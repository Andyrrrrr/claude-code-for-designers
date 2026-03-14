export default function SlideShell({ isActive, className = '', children }) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center py-24 px-16 max-md:py-16 max-md:px-6 max-[480px]:py-12 max-[480px]:px-4 transition-[opacity,visibility] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity] overflow-y-auto ${
        isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      } ${className}`}
    >
      {children}
    </section>
  )
}
