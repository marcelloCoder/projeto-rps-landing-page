export function Logo({ className = 'size-11' }: { className?: string }) {
  return (
    <img src="/logo.png" alt="" width={160} height={160} className={className} />
  )
}
