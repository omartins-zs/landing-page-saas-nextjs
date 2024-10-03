import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Welcome to Our <span className="text-secondary">Next-Gen</span> Platform
            </h1>
            <p className="mx-auto max-w-lg text-xl text-primary-foreground/80 lg:mx-0">
              Experience the future of web development with our cutting-edge tools and services.
            </p>
            <div>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-3 text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Hero illustration"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}