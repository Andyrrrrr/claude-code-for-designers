export default function MenuToggle({ isOpen, onToggle }) {
  return (
    <button
      className="fixed top-6 left-6 z-[1001] bg-transparent border-none cursor-pointer p-2 flex flex-col gap-[5px] transition-opacity duration-200 hover:opacity-70"
      onClick={onToggle}
      aria-label="Table of contents"
    >
      <span
        className="block w-5 h-[1.5px] bg-text-dim transition-all duration-300"
        style={isOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : undefined}
      />
      <span
        className="block w-5 h-[1.5px] bg-text-dim transition-all duration-300"
        style={isOpen ? { opacity: 0 } : undefined}
      />
      <span
        className="block w-5 h-[1.5px] bg-text-dim transition-all duration-300"
        style={isOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : undefined}
      />
    </button>
  )
}
