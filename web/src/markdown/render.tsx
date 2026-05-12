import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { remarkSentenceSpans } from './sentencePlugin'

type Props = {
  markdown: string
  onSentenceClick?: (sid: string) => void
  activeSid?: string | null
  paneId: 'zh' | 'en'
}

/**
 * Render markdown with sentence spans injected so we can do click+sync highlight.
 */
export function MarkdownRender({ markdown, paneId }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkSentenceSpans, { paneId }]]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  )
}

