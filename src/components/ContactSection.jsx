import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-brand-green px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <span className="font-mono text-3xl font-medium tracking-tight [text-wrap:balance] text-neutral-200 sm:text-lg">
              Let’s chat
            </span>
            <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-6 text-brand-sand">
              From branding to marketing and graphic design to web development,
              Observatory has a thoughtful solution to benefit your business.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
