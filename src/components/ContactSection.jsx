import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24">
      <FadeIn className="-mx-6 rounded-4xl px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="font-mono font-bold tracking-tight [text-wrap:balance] text-brand-green uppercase sm:text-lg">
              Let’s chat
            </span>
            <h2 className="text-center font-display text-3xl font-medium [text-wrap:balance] text-brand-gray sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-gray/80">
              From branding to marketing and graphic design to web development,
              Observatory has a thoughtful solution to benefit your business.
            </p>
            <div className="mt-6 flex justify-center">
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
