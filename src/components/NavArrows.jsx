export default function NavArrows({ onPrev, onNext }) {
  return (
    <div className="fixed bottom-6 left-6 flex gap-1.5 z-[100] max-md:hidden">
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="bg-transparent border border-code-border text-text-dim w-8 h-8 flex items-center justify-center cursor-pointer rounded text-[0.8rem] transition-all duration-200 hover:border-text-muted hover:text-text-muted"
      >
        &#8592;
      </button>
      <button
        onClick={onNext}
        aria-label="Next slide"
        className="bg-transparent border border-code-border text-text-dim w-8 h-8 flex items-center justify-center cursor-pointer rounded text-[0.8rem] transition-all duration-200 hover:border-text-muted hover:text-text-muted"
      >
        &#8594;
      </button>
    </div>
  )
}
