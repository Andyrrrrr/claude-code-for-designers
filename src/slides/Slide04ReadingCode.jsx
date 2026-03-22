import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide04ReadingCode({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="04" />
        <SlideTitle>
          Reading code<br />
          <span className="text-[0.55em] text-text-muted font-normal">(you already can)</span>
        </SlideTitle>
        <SlideBody>
          You don't need to <em>write</em> code. You need to be able to <strong>scan it</strong> enough to verify Claude Code did what you asked.
        </SlideBody>
        <div className="mt-6 font-mono text-[0.78rem] max-[480px]:text-[0.72rem] leading-[2.1] bg-code-bg border border-code-border border-l-[3px] border-l-accent rounded-r-[6px] p-6 overflow-x-auto whitespace-pre">
          <span className="tp">&lt;</span><span className="tt">div</span> <span className="ta">class</span><span className="tp">=</span><span className="ts">"card"</span><span className="tp">&gt;</span>           <span className="anno">&larr; a container (like a frame in Figma)</span>{'\n'}  <span className="tp">&lt;</span><span className="tt">h2</span><span className="tp">&gt;</span>Title<span className="tp">&lt;/</span><span className="tt">h2</span><span className="tp">&gt;</span>             <span className="anno">&larr; a heading</span>{'\n'}  <span className="tp">&lt;</span><span className="tt">p</span><span className="tp">&gt;</span>Description<span className="tp">&lt;/</span><span className="tt">p</span><span className="tp">&gt;</span>         <span className="anno">&larr; body text</span>{'\n'}  <span className="tp">&lt;</span><span className="tt">button</span><span className="tp">&gt;</span>Click me<span className="tp">&lt;/</span><span className="tt">button</span><span className="tp">&gt;</span>  <span className="anno">&larr; a button</span>{'\n'}<span className="tp">&lt;/</span><span className="tt">div</span><span className="tp">&gt;</span>
        </div>
        <div className="mt-4 font-mono text-[0.78rem] max-[480px]:text-[0.72rem] leading-[2.1] bg-code-bg border border-code-border border-l-[3px] border-l-accent rounded-r-[6px] p-6 overflow-x-auto whitespace-pre">
          <span className="tp">.</span><span className="tt">card</span> <span className="tp">{'{'}</span>{'\n'}  <span className="tk">padding</span><span className="tp">:</span> <span className="tn">24px</span><span className="tp">;</span>             <span className="anno">&larr; inner spacing</span>{'\n'}  <span className="tk">border-radius</span><span className="tp">:</span> <span className="tn">12px</span><span className="tp">;</span>       <span className="anno">&larr; corner radius</span>{'\n'}  <span className="tk">background</span><span className="tp">:</span> <span className="ts">#ffffff</span><span className="tp">;</span>       <span className="anno">&larr; fill color</span>{'\n'}  <span className="tk">box-shadow</span><span className="tp">:</span> <span className="tn">0 2px 8px</span>      <span className="anno">&larr; drop shadow</span>{'\n'}    <span className="ts">rgba(0,0,0,0.1)</span><span className="tp">;</span>{'\n'}<span className="tp">{'}'}</span>
        </div>
        <SlideBody style={{ marginTop: '1.5rem' }}>
          You'll also see <strong>Tailwind CSS</strong> &mdash; a popular shorthand for styling. Instead of writing <code>padding: 24px</code> in a separate file, you write <code>p-6</code> directly on the element. Same concepts, shorter names.
        </SlideBody>
        <Callout>
          If you've ever inspected an element in Figma's dev mode, you can read this. The vocabulary is almost identical.
        </Callout>
        <SlideLinks links={[
          { href: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML', label: 'MDN: Introduction to HTML' },
          { href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps', label: 'MDN: CSS first steps' },
          { href: 'https://tailwindcss.com/docs/utility-first', label: 'Tailwind CSS: utility-first fundamentals' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
