'use client'
import { useEffect, useRef } from 'react'
import { Bold, Italic, Heading2, Heading3, List, ListOrdered, Link2, Quote, Eraser } from 'lucide-react'

const BLUE = '#00aaff', INK = '#0a0a0a'

export default function RichText({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) ref.current.innerHTML = value || ''
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function exec(cmd: string, arg?: string) {
    ref.current?.focus()
    document.execCommand(cmd, false, arg)
    onChange(ref.current?.innerHTML || '')
  }
  function block(tag: string) { exec('formatBlock', tag) }
  function link() {
    const url = prompt('Link URL (https://…)')
    if (url) exec('createLink', url)
  }

  const btn: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: '1px solid #e2e2e2', background: '#fff', color: INK, cursor: 'pointer', borderRadius: 6 }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
        <button type="button" title="Heading" onClick={() => block('h2')} style={btn}><Heading2 size={16} /></button>
        <button type="button" title="Subheading" onClick={() => block('h3')} style={btn}><Heading3 size={16} /></button>
        <button type="button" title="Bold" onClick={() => exec('bold')} style={btn}><Bold size={15} /></button>
        <button type="button" title="Italic" onClick={() => exec('italic')} style={btn}><Italic size={15} /></button>
        <button type="button" title="Bulleted list" onClick={() => exec('insertUnorderedList')} style={btn}><List size={16} /></button>
        <button type="button" title="Numbered list" onClick={() => exec('insertOrderedList')} style={btn}><ListOrdered size={16} /></button>
        <button type="button" title="Quote" onClick={() => block('blockquote')} style={btn}><Quote size={15} /></button>
        <button type="button" title="Add link" onClick={link} style={btn}><Link2 size={15} /></button>
        <button type="button" title="Clear formatting" onClick={() => block('p')} style={btn}><Eraser size={15} /></button>
      </div>
      <style>{`
        .rt-editor{ min-height:280px; border:1px solid #e2e2e2; border-radius:8px; padding:18px 20px; background:#fff; color:${INK}; font-size:16px; line-height:1.75; font-weight:300; outline:none; }
        .rt-editor:focus{ border-color:${BLUE}; }
        .rt-editor:empty:before{ content:attr(data-placeholder); color:#bbb; }
        .rt-editor h2{ font-family:'Fraunces',serif; font-weight:800; font-size:26px; margin:20px 0 10px; }
        .rt-editor h3{ font-family:'Fraunces',serif; font-weight:800; font-size:21px; margin:18px 0 8px; }
        .rt-editor p{ margin:0 0 14px; }
        .rt-editor ul,.rt-editor ol{ margin:0 0 14px 22px; } .rt-editor li{ margin:0 0 6px; }
        .rt-editor blockquote{ border-left:3px solid ${BLUE}; margin:16px 0; padding-left:16px; color:#555; font-style:italic; }
        .rt-editor a{ color:${BLUE}; }
      `}</style>
      <div
        ref={ref}
        className="rt-editor"
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Write the article here…"
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
      />
    </div>
  )
}