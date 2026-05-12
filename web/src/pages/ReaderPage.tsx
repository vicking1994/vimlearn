import { useEffect, useMemo, useRef, useState } from 'react'
import type React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { defaultChapter, getRouteBySlug } from '../routes'
import { fetchBilingualMarkdown } from '../markdown/loaders'
import { MarkdownRender } from '../markdown/render'
import { ReaderControls } from '../components/ReaderControls'

export function ReaderPage() {
  const { slug } = useParams()

  const chapter = useMemo(() => (slug ? getRouteBySlug(slug) : null), [slug])
  const [zh, setZh] = useState<string | null>(null)
  const [en, setEn] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState<{ pane: 'zh' | 'en'; block: number; sent: number } | null>(
    null,
  )
  const zhRef = useRef<HTMLDivElement | null>(null)
  const enRef = useRef<HTMLDivElement | null>(null)

  if (!slug) return <Navigate to={`/ch/${defaultChapter.slug}`} replace />
  if (!chapter) return <Navigate to={`/ch/${defaultChapter.slug}`} replace />

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setZh(null)
    setEn(null)
    setActive(null)

    fetchBilingualMarkdown(chapter.mdPath)
      .then((r) => {
        if (cancelled) return
        setZh(r.zh)
        setEn(r.en)
      })
      .finally(() => {
        if (cancelled) return
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [chapter.mdPath])

  useEffect(() => {
    if (!active) return

    const targetPane = active.pane === 'zh' ? enRef.current : zhRef.current
    const targetSid = `${active.pane === 'zh' ? 'en' : 'zh'}:${active.block}:${active.sent}`
    const el = targetPane?.querySelector<HTMLElement>(`[data-sid="${targetSid}"]`) ?? null
    if (el) el.scrollIntoView({ block: 'center', inline: 'nearest' })
  }, [active])

  useEffect(() => {
    const zhRoot = zhRef.current
    const enRoot = enRef.current
    if (!zhRoot || !enRoot) return

    for (const root of [zhRoot, enRoot]) {
      root.querySelectorAll<HTMLElement>('.sentence.isActive').forEach((n) => {
        n.classList.remove('isActive')
      })
    }

    if (!active) return

    const zhSid = `zh:${active.block}:${active.sent}`
    const enSid = `en:${active.block}:${active.sent}`
    zhRoot.querySelectorAll<HTMLElement>(`[data-sid="${zhSid}"]`).forEach((n) => n.classList.add('isActive'))
    enRoot.querySelectorAll<HTMLElement>(`[data-sid="${enSid}"]`).forEach((n) => n.classList.add('isActive'))
  }, [active, zh, en])

  function onPaneClick(pane: 'zh' | 'en', ev: React.MouseEvent) {
    const root = pane === 'zh' ? zhRef.current : enRef.current
    if (!root) return
    const target = ev.target as HTMLElement | null
    const span = target?.closest?.('[data-sid]') as HTMLElement | null
    if (!span) return

    const sid = span.getAttribute('data-sid')
    if (!sid) return
    // sid format: pane:block:sent
    const parts = sid.split(':')
    if (parts.length !== 3) return
    const block = Number(parts[1])
    const sent = Number(parts[2])
    if (!Number.isFinite(block) || !Number.isFinite(sent)) return
    setActive({ pane, block, sent })
  }

  return (
    <main className="reader" aria-label="Reader">
      <header className="readerHeader">
        <div className="readerHeaderLeft">
          <div className="readerTitle">{chapter.title}</div>
          <div className="readerHint">左栏中文 / 右栏英文（点击句子可联动高亮）</div>
        </div>
        <ReaderControls compact />
      </header>

      <section className="panes" aria-label="Bilingual panes">
        <article className="pane">
          <div className="paneHeader">中文</div>
          <div
            className="paneBody"
            ref={zhRef}
            onClick={(ev) => onPaneClick('zh', ev)}
            data-active-sid={
              active ? `zh:${active.block}:${active.sent}` : ''
            }
          >
            {loading ? (
              <p>加载中…</p>
            ) : zh ? (
              <MarkdownRender paneId="zh" markdown={zh} />
            ) : (
              <p className="missingHint">
                未找到中文文件：<code>{`zh/${chapter.mdPath}`}</code>
              </p>
            )}
          </div>
        </article>
        <article className="pane">
          <div className="paneHeader">English</div>
          <div
            className="paneBody"
            ref={enRef}
            onClick={(ev) => onPaneClick('en', ev)}
            data-active-sid={
              active ? `en:${active.block}:${active.sent}` : ''
            }
          >
            {loading ? (
              <p>Loading…</p>
            ) : en ? (
              <MarkdownRender paneId="en" markdown={en} />
            ) : (
              <p className="missingHint">
                Missing English file: <code>{chapter.mdPath}</code>
              </p>
            )}
          </div>
        </article>
      </section>
    </main>
  )
}

