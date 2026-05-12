import { tocItems } from './toc/toc'

export type ChapterRoute = {
  slug: string
  mdPath: string
  title: string
}

export function mdPathToSlug(mdPath: string): string {
  return mdPath.replace(/\.md$/i, '')
}

export const chapterRoutes: ChapterRoute[] = tocItems.map((it) => ({
  slug: mdPathToSlug(it.path),
  mdPath: it.path,
  title: it.title,
}))

export const defaultChapter = chapterRoutes[0]

export function getRouteBySlug(slug: string): ChapterRoute | null {
  return chapterRoutes.find((c) => c.slug === slug) ?? null
}

