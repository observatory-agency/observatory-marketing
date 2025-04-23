import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
  clientName,
  clientBusiness,
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <figcaption>
              <Image
                src={client.logo}
                alt={client.name}
                unoptimized
                className="w-40"
              />
            </figcaption>
            <blockquote className="relative mt-6 font-display text-3xl font-medium tracking-tight text-brand-gray sm:text-4xl">
              <p className="before:content-['\22'] after:content-['\22'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <div className="mt-6">
              {clientName && (
                <p className="text-lg font-semibold text-brand-gray">
                  {clientName}
                </p>
              )}
              {clientBusiness && (
                <p className="text-sm text-neutral-700">{clientBusiness}</p>
              )}
            </div>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
