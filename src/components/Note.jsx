export default function Note({ style, children }) {
  return (
    <p className="mt-6 text-[0.85rem] text-text-dim italic" style={style}>
      {children}
    </p>
  )
}
