import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

type TextNode = {
  type: 'text'
  value: string
}

type ParentNode = {
  type: string
  children?: any[]
}

type SentenceOptions = {
  paneId: 'zh' | 'en'
}

const SENTENCE_RE = /[^.!?。！？]+[.!?。！？]?/g

function splitIntoSentences(text: string): string[] {
  const parts = text.match(SENTENCE_RE) ?? [text]
  return parts
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

/**
 * Inject sentence spans for text nodes inside paragraphs / list items.
 * We generate stable ids by traversal order:
 *   sid = `${paneId}:${blockIndex}:${sentenceIndex}`
 * Both panes share the same block/sentence indices as long as translations
 * preserve paragraph & sentence boundaries; otherwise we still can fall back
 * to block-level match `${paneId}:${blockIndex}:*`.
 */
export const remarkSentenceSpans: Plugin<[SentenceOptions?], any> = (opts) => {
  const paneId = opts?.paneId ?? 'en'
  return (tree: any) => {
    let blockIndex = 0

    visit(tree, (node: any) => {
      if (!node || typeof node !== 'object') return false
      if (node.type === 'paragraph' || node.type === 'listItem') return true
      return false
    }, (node: any) => {
      const parent = node as ParentNode
      if (!parent.children || parent.children.length === 0) {
        blockIndex += 1
        return
      }

      const newChildren: any[] = []
      let sentenceIndex = 0

      for (const child of parent.children) {
        // Only split plain text nodes. Inline code/links/emphasis remain intact.
        if (child && child.type === 'text' && typeof child.value === 'string') {
          const parts = splitIntoSentences(child.value)
          if (parts.length <= 1) {
            newChildren.push(child)
            continue
          }

          for (const part of parts) {
            const sid = `${paneId}:${blockIndex}:${sentenceIndex}`
            newChildren.push({
              type: 'html',
              value: `<span class="sentence" data-sid="${sid}" data-block="${paneId}:${blockIndex}">`,
            })
            newChildren.push({ type: 'text', value: part })
            newChildren.push({ type: 'html', value: `</span>` })
            sentenceIndex += 1
          }
        } else {
          newChildren.push(child)
        }
      }

      parent.children = newChildren
      blockIndex += 1
    })
  }
}

