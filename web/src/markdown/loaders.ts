export type BilingualMd = {
  zh: string | null
  en: string | null
}

/**
 * English markdown files are copied (not modified) into `web/public/content/en/`,
 * and Chinese into `web/public/content/zh/`.
 */
export async function fetchMarkdown(pathFromRepoRoot: string): Promise<string | null> {
  const res = await fetch(`/${pathFromRepoRoot}`)
  if (!res.ok) return null
  return await res.text()
}

export async function fetchBilingualMarkdown(enMdPath: string): Promise<BilingualMd> {
  const [zh, en] = await Promise.all([
    fetchMarkdown(`content/zh/${enMdPath}`),
    fetchMarkdown(`content/en/${enMdPath}`),
  ])
  return { zh, en }
}

