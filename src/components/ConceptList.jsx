export default function ConceptList({ items }) {
  return (
    <ol className="list-none mt-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 py-4 border-b border-white/[0.04] text-base text-text-muted leading-[1.6]">
          <span className="font-mono text-[0.8rem] text-accent min-w-6 pt-[3px] font-semibold">
            {item.num}
          </span>
          <span>{item.content}</span>
        </li>
      ))}
    </ol>
  )
}
