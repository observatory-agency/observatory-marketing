import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
      <path
        fill="#B34A18"
        d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L14.028 6Zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.796 6Z"
      />
    </svg>
  )
}

export function Testimonial({ children, author, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32',
        className,
      )}
    >
      <div className="relative bg-brand-green pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-2/1 h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Image
                alt={author.name}
                src={author.image}
                fill
                sizes="(min-width: 1280px) 24rem, (min-width: 768px) 40rem, 100vw"
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                <p>{children}</p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">{author.name}</div>
                <div className="mt-1 text-gray-200">{author.role}</div>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* Triangle Shape */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="175"
          fill="none"
          className="absolute right-0 bottom-0"
        >
          <path fill="#B34A18" d="M0 175h220V.51709L0 175Z" />
        </svg>
        {/* Line Shape */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="387"
          height="342"
          fill="none"
          className="absolute top-24 right-8 hidden stroke-white/20 xl:block"
        >
          <path
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M0 2h385v338H0M0 22.8369h362.229"
          />
        </svg>
      </div>
    </div>
  )
}
