export type TocItem = {
  title: string
  path: string
  level: number
}

/**
 * Parse mdBook SUMMARY.md into a flat list of clickable items.
 * - Ignores headings like "# Part 1 ..."
 * - Keeps list items like "- [Title](./ch00_x.md)"
 */
export function parseSummaryMarkdown(summary: string): TocItem[] {
  const lines = summary.split(/\r?\n/)
  const items: TocItem[] = []

  for (const line of lines) {
    // list item: - [Title](./path.md)
    const m = line.match(/^(\s*)-\s+\[([^\]]+)\]\(([^)]+)\)\s*$/)
    if (!m) continue

    const indent = m[1] ?? ''
    const title = m[2]!.trim()
    const rawPath = m[3]!.trim()
    // normalize: ./ch00.md -> ch00.md
    const path = rawPath.replace(/^\.\//, '')

    const level = Math.floor(indent.replace(/\t/g, '  ').length / 2)
    items.push({ title, path, level })
  }

  return items
}

