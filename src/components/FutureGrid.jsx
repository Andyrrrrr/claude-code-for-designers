export default function FutureGrid({ cards }) {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-8">
      {cards.map((card, i) => (
        <div key={i} className="p-6 bg-bg-surface border border-code-border rounded-lg">
          <h3 className="font-heading text-[0.85rem] text-text mb-2">{card.title}</h3>
          <p className="text-[0.85rem] text-text-muted leading-[1.6]">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
