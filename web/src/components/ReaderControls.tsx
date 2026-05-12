import { useEffect, useMemo, useState } from 'react'
import { applyPrefsToDom, defaultPrefs, loadPrefs, savePrefs, type ThemeName } from '../theme/prefs'

type Props = {
  compact?: boolean
}

export function ReaderControls({ compact }: Props) {
  const initial = useMemo(() => (typeof window === 'undefined' ? defaultPrefs : loadPrefs()), [])
  const [theme, setTheme] = useState<ThemeName>(initial.theme)
  const [fontSize, setFontSize] = useState<number>(initial.fontSize)
  const [lineHeight, setLineHeight] = useState<number>(initial.lineHeight)
  const [maxWidth, setMaxWidth] = useState<number>(initial.maxWidth)

  useEffect(() => {
    const prefs = { theme, fontSize, lineHeight, maxWidth }
    applyPrefsToDom(prefs)
    savePrefs(prefs)
  }, [theme, fontSize, lineHeight, maxWidth])

  return (
    <div className={`controls ${compact ? 'isCompact' : ''}`} aria-label="Reading preferences">
      <label className="ctrl">
        <span className="ctrlLabel">主题</span>
        <select className="ctrlSelect" value={theme} onChange={(e) => setTheme(e.target.value as ThemeName)}>
          <option value="auto">自动</option>
          <option value="light">浅色</option>
          <option value="dark">暗色</option>
          <option value="sepia">护眼</option>
        </select>
      </label>

      <label className="ctrl">
        <span className="ctrlLabel">字号</span>
        <input
          className="ctrlRange"
          type="range"
          min={14}
          max={22}
          step={1}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <span className="ctrlValue">{fontSize}px</span>
      </label>

      <label className="ctrl">
        <span className="ctrlLabel">行高</span>
        <input
          className="ctrlRange"
          type="range"
          min={1.5}
          max={2.1}
          step={0.05}
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
        />
        <span className="ctrlValue">{lineHeight.toFixed(2)}</span>
      </label>

      <label className="ctrl">
        <span className="ctrlLabel">栏宽</span>
        <input
          className="ctrlRange"
          type="range"
          min={52}
          max={92}
          step={1}
          value={maxWidth}
          onChange={(e) => setMaxWidth(Number(e.target.value))}
        />
        <span className="ctrlValue">{maxWidth}ch</span>
      </label>
    </div>
  )
}

