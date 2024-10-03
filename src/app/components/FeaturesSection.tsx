import Link from 'next/link'
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  Cloud,
  BarChart,
  Users,
  Lock,
  Coffee
} from 'lucide-react'

export default function HeroSectionFeatures() {
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
    { icon: Shield, title: 'Secure', description: 'Built-in security features to protect your data' },
    { icon: Smartphone, title: 'Mobile-First', description: 'Responsive design for all devices' },
    { icon: Globe, title: 'Global CDN', description: 'Content delivered from the nearest location' },
    { icon: Cloud, title: 'Cloud-Native', description: 'Designed for modern cloud infrastructures' },
    { icon: BarChart, title: 'Analytics', description: 'Built-in analytics to track performance' },
    { icon: Users, title: 'Collaboration', description: 'Team-friendly tools and features' },
    { icon: Lock, title: 'GDPR Compliant', description: 'Adheres to data protection regulations' },
    { icon: Coffee, title: '24/7 Support', description: 'Round-the-clock expert assistance' },
  ]

  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to the Future of Web Development
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience the power of our platform with these 9 game-changing features.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="/get-started"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 text-card-foreground transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}