import fs from 'node:fs/promises'
import path from 'node:path'

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..', '..')
const webRoot = path.resolve(repoRoot, 'web')
const publicRoot = path.resolve(webRoot, 'public', 'content')
const enOut = path.resolve(publicRoot, 'en')
const zhOut = path.resolve(publicRoot, 'zh')

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true })
}

async function copyIfExists(src, dest) {
  try {
    await fs.copyFile(src, dest)
    return true
  } catch (e) {
    if (e && e.code === 'ENOENT') return false
    throw e
  }
}

async function main() {
  await ensureDir(enOut)
  await ensureDir(zhOut)

  const entries = await fs.readdir(repoRoot)
  const chapterFiles = entries.filter((n) => /^ch\d+_.*\.md$/i.test(n))

  // English: copy from repo root (do not modify originals)
  await Promise.all(
    chapterFiles.map((name) =>
      fs.copyFile(path.resolve(repoRoot, name), path.resolve(enOut, name)),
    ),
  )

  // Chinese: copy from repoRoot/zh if present
  const zhDir = path.resolve(repoRoot, 'zh')
  let zhEntries = []
  try {
    zhEntries = await fs.readdir(zhDir)
  } catch (e) {
    if (!(e && e.code === 'ENOENT')) throw e
  }

  await Promise.all(
    zhEntries
      .filter((n) => /^ch\d+_.*\.md$/i.test(n))
      .map((name) =>
        fs.copyFile(path.resolve(zhDir, name), path.resolve(zhOut, name)),
      ),
  )

  await copyIfExists(
    path.resolve(repoRoot, 'README.md'),
    path.resolve(enOut, 'README.md'),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
