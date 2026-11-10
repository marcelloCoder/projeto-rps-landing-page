from pathlib import Path
import re

from PIL import Image, ImageDraw, ImageFont

SRC = Path(r"H:\full-stack-projects\rps-project\public\motos\motos-atualizadas\MOTOS")
OUT = Path(r"H:\full-stack-projects\rps-project\public\motos\motos-atualizadas-com-legenda")
LOGO = Path(r"H:\full-stack-projects\rps-project\public\logo.png")

LIME = (214, 255, 58)
WHITE = (255, 255, 255)
BLACK = (9, 9, 9)

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\arialbd.ttf",
    r"C:\Windows\Fonts\segoeuib.ttf",
    r"C:\Windows\Fonts\arial.ttf",
    r"C:\Windows\Fonts\segoeui.ttf",
]
FONT_PATH = next((p for p in FONT_CANDIDATES if Path(p).exists()), None)
if not FONT_PATH:
    raise SystemExit("Nenhuma fonte TrueType encontrada.")


def font(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_PATH, size)


def format_price(raw: str) -> str:
    cleaned = raw.strip()
    if re.search(r",\d{2}$", cleaned):
        cleaned = cleaned.rsplit(",", 1)[0]
    digits = re.sub(r"[^\d]", "", cleaned)
    value = int(digits)
    return f"R$ {value:,}".replace(",", ".") + ",00"


def parse_folder(name: str) -> dict:
    match = re.search(r"(\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?|\d{4,6}(?:,\d{2})?)\s*$", name)
    if not match:
        raise ValueError(f"Sem preço na pasta: {name}")
    price = format_price(match.group(1))
    rest = name[: match.start()].strip(" -")

    year_match = re.search(r"(20\d{2})", rest)
    year = year_match.group(1) if year_match else ""
    if year_match:
        rest = (rest[: year_match.start()] + rest[year_match.end() :]).strip(" -")

    km = None
    km_match = re.search(r"\b(\d+)\s*KM\b", rest, re.I)
    if km_match:
        number = int(km_match.group(1))
        km = "0 km" if number == 0 else f"{number} km"
        rest = (rest[: km_match.start()] + rest[km_match.end() :]).strip(" -")
    if re.search(r"\b0KM\b", rest, re.I):
        km = "0 km"
        rest = re.sub(r"\b0KM\b", "", rest, flags=re.I).strip(" -")

    color = None
    for candidate in ("VERMELHA", "AZUL", "PRETA", "BRANCA", "CINZA"):
        if re.search(rf"\b{candidate}\b", rest, re.I):
            color = candidate
            rest = re.sub(rf"\b{candidate}\b", "", rest, flags=re.I).strip(" -")
            break

    title = re.sub(r"\s+", " ", rest).strip(" -")
    title = title.replace("FAZE FZ25", "FAZER FZ25")
    title = title.replace("NXRE BROS", "NXR BROS")
    title = re.sub(r"\s*-\s*", " ", title).strip().upper()

    subtitle_parts: list[str] = []
    if "ORIGINAL" in title:
        subtitle_parts.append("ORIGINAL")
        title = title.replace("ORIGINAL", "").strip()
    if "SETA LED" in title:
        subtitle_parts.append("SETA LED")
        title = re.sub(r"SETA\s*LED", "", title).strip()
    if color:
        subtitle_parts.append(color)
    title = re.sub(r"\s+", " ", title).strip(" -")

    return {
        "title": title,
        "year": year,
        "price": price,
        "km": km,
        "subtitle": " · ".join(subtitle_parts) if subtitle_parts else None,
        "folder": name,
    }


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def draw_text_with_shadow(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
) -> None:
    x, y = xy
    for dx, dy in ((2, 2), (1, 1), (-1, 1), (1, -1)):
        draw.text((x + dx, y + dy), text, font=fnt, fill=(0, 0, 0, 170))
    draw.text((x, y), text, font=fnt, fill=fill)


def draw_mixed_title(
    draw: ImageDraw.ImageDraw,
    center_x: int,
    y: int,
    model: str,
    year: str,
    fnt: ImageFont.FreeTypeFont,
) -> int:
    gap = max(8, fnt.size // 8)
    width_model, height_model = text_size(draw, model, fnt)
    width_year, height_year = text_size(draw, year, fnt) if year else (0, 0)
    total = width_model + (gap if year else 0) + width_year
    x = center_x - total // 2
    draw_text_with_shadow(draw, (x, y), model, fnt, WHITE)
    if year:
        draw_text_with_shadow(draw, (x + width_model + gap, y), year, fnt, LIME)
    return max(height_model, height_year)


def caption_image(src: Path, meta: dict, dest: Path) -> None:
    img = Image.open(src).convert("RGBA")
    width, height = img.size
    scale = width / 1080

    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    title_font = font(max(42, int(64 * scale)))
    sub_font = font(max(22, int(30 * scale)))
    box_title_font = font(max(22, int(30 * scale)))
    box_body_font = font(max(18, int(24 * scale)))
    box_small_font = font(max(15, int(18 * scale)))

    center_x = width // 2
    y = int(36 * scale)

    # Top: modelo (branco) + ano (lima), centralizados — igual ao modelo anexado
    title_height = draw_mixed_title(draw, center_x, y, meta["title"], meta["year"], title_font)
    y += title_height + int(10 * scale)

    if meta["subtitle"]:
        text_width, text_height = text_size(draw, meta["subtitle"], sub_font)
        draw_text_with_shadow(draw, (center_x - text_width // 2, y), meta["subtitle"], sub_font, WHITE)

    # Caixa branca centralizada na parte inferior
    lines = [
        (("FAZEMOS ", BLACK), ("SIMULAÇÃO", LIME), box_title_font),
        (("E FINANCIAMOS ATÉ", BLACK), None, box_body_font),
        (("SEM ENTRADA", BLACK), None, box_body_font),
        (("TAXA DE FINANCIAMENTO ZERO", BLACK), None, box_small_font),
    ]
    pad_x, pad_y = int(36 * scale), int(22 * scale)
    gap_line = int(8 * scale)
    content_width = 0
    content_height = 0
    measured = []
    for left, right, line_font in lines:
        left_text, left_color = left
        left_width, left_height = text_size(draw, left_text, line_font)
        if right is None:
            measured.append((left_text, left_color, None, None, left_height, line_font))
            content_width = max(content_width, left_width)
            content_height += left_height + gap_line
        else:
            right_text, right_color = right
            right_width, right_height = text_size(draw, right_text, line_font)
            measured.append(
                (left_text, left_color, right_text, right_color, max(left_height, right_height), line_font)
            )
            content_width = max(content_width, left_width + right_width)
            content_height += max(left_height, right_height) + gap_line
    content_height -= gap_line

    box_width = content_width + pad_x * 2
    box_height = content_height + pad_y * 2
    margin = int(28 * scale)
    logo_size = int(140 * scale)
    # Caixa acima do logo, centralizada; logo sobrepõe levemente a borda inferior
    box_x1 = (width - box_width) // 2
    box_y1 = height - margin - logo_size - box_height + int(28 * scale)
    box_x2 = box_x1 + box_width
    box_y2 = box_y1 + box_height
    draw.rounded_rectangle(
        (box_x1, box_y1, box_x2, box_y2),
        radius=int(18 * scale),
        fill=(255, 255, 255, 242),
    )

    text_y = box_y1 + pad_y
    for left_text, left_color, right_text, right_color, line_height, line_font in measured:
        if right_text is None:
            text_width, _ = text_size(draw, left_text, line_font)
            draw.text((center_x - text_width // 2, text_y), left_text, font=line_font, fill=left_color)
        else:
            left_width, _ = text_size(draw, left_text, line_font)
            right_width, _ = text_size(draw, right_text, line_font)
            text_x = center_x - (left_width + right_width) // 2
            draw.text((text_x, text_y), left_text, font=line_font, fill=left_color)
            draw.text((text_x + left_width, text_y), right_text, font=line_font, fill=right_color)
        text_y += line_height + gap_line

    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    logo_x = (width - logo_size) // 2
    logo_y = height - margin - logo_size
    overlay.alpha_composite(logo, (logo_x, logo_y))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    dest.parent.mkdir(parents=True, exist_ok=True)
    result.save(dest, "JPEG", quality=90, optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    summary = []
    count = 0

    folders = sorted([path for path in SRC.iterdir() if path.is_dir()], key=lambda path: path.name.lower())
    for folder in folders:
        meta = parse_folder(folder.name)
        summary.append(meta)
        photos = sorted(
            [
                path
                for path in folder.iterdir()
                if path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
            ]
        )
        seen: set[str] = set()
        index = 0
        for photo in photos:
            key = photo.name.lower().replace(" (1)", "")
            if key in seen:
                continue
            seen.add(key)
            index += 1
            dest = OUT / folder.name / f"{index:02d}-{photo.stem[:12]}.jpg"
            caption_image(photo, meta, dest)
            count += 1

    print(f"Generated {count} captioned photos in {OUT}")
    print("---")
    for meta in summary:
        print(meta["folder"])
        print(
            f"  -> {meta['title']} | {meta['year']} | {meta['km']} | {meta['subtitle']} | {meta['price']}"
        )


if __name__ == "__main__":
    main()
