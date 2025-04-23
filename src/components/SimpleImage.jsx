import Image from 'next/image'
import clsx from 'clsx'

export function SimpleImage({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-719/680 w-full grayscale',
      )}
    >
      <Image
        alt="Person typing on a laptop"
        className="w-full object-cover"
        {...props}
      />
    </div>
  )
}
