export type SentenceSpan = {
  sid: string
  text: string
  blockSid: string
}

const SENTENCE_RE = /[^.!?。！？]+[.!?。！？]?/g

export function splitIntoSentences(text: string): string[] {
  const parts = text.match(SENTENCE_RE) ?? [text]
  return parts
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

