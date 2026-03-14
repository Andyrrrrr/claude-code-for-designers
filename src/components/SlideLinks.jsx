export default function SlideLinks({ links, style }) {
  return (
    <div className="mt-8 flex flex-col gap-2 text-[0.85rem]" style={style}>
      {links.map((link, i) => (
        <a
          key={i}
          className="text-accent no-underline border-b border-accent/30 transition-[border-color] duration-200 hover:border-accent w-fit"
          href={link.href}
          target="_blank"
          rel="noopener"
        >
          {link.label} &rarr;
        </a>
      ))}
    </div>
  )
}
