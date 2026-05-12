import { parseSummaryMarkdown, type TocItem } from './parseSummary'

// Vite raw import (served as plain string)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import summaryRaw from '../../../book/src/SUMMARY.md?raw'

export const tocItems: TocItem[] = parseSummaryMarkdown(summaryRaw)

