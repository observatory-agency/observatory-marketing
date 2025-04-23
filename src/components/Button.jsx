import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert = false, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex px-4 py-2 text-sm font-medium transition rounded-bl-xl rounded-tr-xl',
    invert
      ? 'bg-brand-orange text-brand-sand hover:bg-brand-orange/80'
      : 'bg-brand-blue text-white hover:bg-brand-blue/80',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
