import { appVersion } from 'virtual:app-version'

const appliedVersionKey = 'rps-applied-version'

function presentationIsPlaying() {
  return [...document.querySelectorAll('video')].some((video) => !video.paused && !video.ended)
}

export function watchForSiteUpdates() {
  if (import.meta.env.DEV) return

  let checking = false

  async function check() {
    if (checking || presentationIsPlaying()) return
    checking = true
    try {
      const response = await fetch(`/version.json?ts=${Date.now()}`, { cache: 'no-store' })
      if (!response.ok) return
      const data: { version?: unknown } = await response.json()
      if (typeof data.version !== 'string' || data.version === appVersion) return
      if (sessionStorage.getItem(appliedVersionKey) === data.version) return
      sessionStorage.setItem(appliedVersionKey, data.version)
      window.location.reload()
    } catch {
      // A failed check leaves the open page as it is.
    } finally {
      checking = false
    }
  }

  window.setInterval(() => {
    void check()
  }, 15_000)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void check()
  })
}
