import { Children, cloneElement, isValidElement } from 'react'

export default function SlideInner({ isActive, className = '', children }) {
  return (
    <div className={`max-w-[820px] w-full mx-auto ${className}`} key={isActive ? 'active' : 'inactive'}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child
        return cloneElement(child, {
          style: {
            ...child.props.style,
            animation: 'fadeInUp 500ms cubic-bezier(0.4, 0, 0.2, 1) both',
            animationDelay: `${i * 80}ms`,
          },
        })
      })}
    </div>
  )
}
