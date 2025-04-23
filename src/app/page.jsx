import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { SimpleImage } from '@/components/SimpleImage'
import { Testimonial } from '@/components/Testimonial'
import logoBlackbird from '@/images/clients/blackbird/logo-light.svg'
import logoCraft from '@/images/clients/craft/logo-light.svg'
import logoSparkDark from '@/images/clients/spark/logo-dark.svg'
import logoSparkLight from '@/images/clients/spark/logo-light.svg'
import logoBrandecation from '@/images/clients/brandecation/logo-light.svg'
import logoSSGA from '@/images/clients/ssga/logo-light.svg'
import logoSolarflux from '@/images/clients/solarflux/logo-light.svg'
import logoLederick from '@/images/clients/lederick/logo-light.svg'
import logoSimply from '@/images/clients/simply/logo-light.svg'
import imageServices from '@/images/services.png'

import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Spark', logoSparkLight],
  ['Brandecation', logoBrandecation],
  ['Craft', logoCraft],
  ['Blackbird', logoBlackbird],
  ['SSGA', logoSSGA],
  ['Solarflux', logoSolarflux],
  ['Lederick', logoLederick],
  ['Simply', logoSimply],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-brand-green py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-brand-gray/80" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="homepage-clients mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="w-40" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We craft digital experiences that evolve with your vision."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          A modern business deserves more than just a website—it needs a digital
          ecosystem that can adapt and grow. Our tailored solutions combine
          elegant design with powerful functionality to create experiences that
          truly represent your brand and connect with your audience.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <SimpleImage
                src={imageServices}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website Creation">
              Our team will design and develop a website that represents your
              business. We can incorporate your current branding, or start fresh
              for a full redesign. We create these sites with Jamstack
              architecture, so they’ll scale with you.
            </ListItem>
            <ListItem title="Application development">
              We’ll design and develop a progressive web app to add interaction
              layers to your site. Build a searchable database, enable accounts
              and log ins, create portals for educational or task-based content,
              and more.
            </ListItem>
            <ListItem title="E-commerce">
              We work with Shopify, Stripe and Snipcart to build you an
              e-commerce store that delivers. If you’re already set up and want
              a better look or functionality, we got you. If you’re just jumping
              in, we’ll cannonball in together.
            </ListItem>
            <ListItem title="Custom content management">
              Update pages, publish posts, and manage digital assets without
              calling a developer. Our intuitive systems are built on Jamstack
              architecture, ensuring they're secure, speedy, and ready to grow
              with your business.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="We make digital products that help brands and businesses grow."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="case-studies grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-brand-gray">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-brand-gray">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-brand-gray sm:text-7xl">
            We create elegant digital experiences
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Observatory is a nimble, personable and diligent development-focused
            creative agency.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Spark', logo: logoSparkDark }}
        clientName="Nicole D'Andrea"
        clientBusiness="Owner, Spark Strategies"
      >
        I could not have asked for a better experience than I had with Peter.
        From conception to completion, he hit every mark. My website is clean,
        user-friendly, and creative. He was open to my suggestions and
        significantly improved upon them. Even once the project was finished, he
        made himself available for questions, tweaks, and updates. I would
        recommend Peter to anyone.
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
