import { Check } from 'lucide-react'

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '$9',
      features: ['1 user', '10 projects', '5GB storage', 'Basic support'],
      cta: 'Start for free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['5 users', 'Unlimited projects', '50GB storage', 'Priority support', 'Advanced analytics'],
      cta: 'Get started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited users', 'Unlimited projects', 'Unlimited storage', '24/7 dedicated support', 'Custom integrations'],
      cta: 'Contact sales',
      highlighted: false,
    },
  ]

  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan thats right for you and start building amazing projects today.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border bg-card p-6 shadow-sm ${
                tier.highlighted ? 'border-primary ring-2 ring-primary' : ''
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-3xl font-bold">{tier.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tier.name === 'Enterprise' ? 'Billed annually' : 'per month'}</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white shadow hover:bg-blue-700'
                    : 'bg-blue-500 text-white shadow hover:bg-blue-600'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}