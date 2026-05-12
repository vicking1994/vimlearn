export type ThemeName = 'auto' | 'light' | 'dark' | 'sepia'

export type ReaderPrefs = {
  theme: ThemeName
  fontSize: number // px
  lineHeight: number
  maxWidth: number // ch
}

const STORAGE_KEY = 'vimlearn.reader.prefs.v1'

export const defaultPrefs: ReaderPrefs = {
  theme: 'auto',
  fontSize: 16,
  lineHeight: 1.75,
  maxWidth: 78,
}

export function loadPrefs(): ReaderPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultPrefs
    const parsed = JSON.parse(raw) as Partial<ReaderPrefs>
    return {
      theme: parsed.theme ?? defaultPrefs.theme,
      fontSize: typeof parsed.fontSize === 'number' ? parsed.fontSize : defaultPrefs.fontSize,
      lineHeight:
        typeof parsed.lineHeight === 'number' ? parsed.lineHeight : defaultPrefs.lineHeight,
      maxWidth: typeof parsed.maxWidth === 'number' ? parsed.maxWidth : defaultPrefs.maxWidth,
    }
  } catch {
    return defaultPrefs
  }
}

export function savePrefs(prefs: ReaderPrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}

export function applyPrefsToDom(prefs: ReaderPrefs) {
  const html = document.documentElement
  html.classList.remove('theme-light', 'theme-dark', 'theme-sepia')

  if (prefs.theme === 'light') html.classList.add('theme-light')
  if (prefs.theme === 'dark') html.classList.add('theme-dark')
  if (prefs.theme === 'sepia') html.classList.add('theme-sepia')

  html.style.setProperty('--reader-font-size', `${prefs.fontSize}px`)
  html.style.setProperty('--reader-line-height', `${prefs.lineHeight}`)
  html.style.setProperty('--reader-max-width', `${prefs.maxWidth}ch`)
}

