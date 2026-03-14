export default function SlideTitle({ children }) {
  return (
    <h2 className="font-heading text-[2.4rem] max-md:text-[1.6rem] max-[480px]:text-[1.3rem] font-bold leading-[1.2] text-text mb-8 tracking-[-0.01em]">
      {children}
    </h2>
  )
}
