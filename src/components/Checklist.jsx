export default function Checklist({ items }) {
  return (
    <ul className="list-none mt-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 py-4 text-base text-text-muted leading-[1.6]">
          <span className={`shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center mt-[2px] transition-all duration-300 ${
            item.done
              ? 'border-[1.5px] border-accent bg-accent'
              : 'border-[1.5px] border-text-dim'
          }`}>
            {item.done && (
              <span className="block w-[6px] h-[10px] border-r-2 border-b-2 border-bg rotate-45 -mt-[2px]" />
            )}
          </span>
          {item.text}
        </li>
      ))}
    </ul>
  )
}
