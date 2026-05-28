'use client'
import { useState } from 'react'

export default function WilsonPropertyLandingPage() {
  const [propertyCount, setPropertyCount] = useState(1)
return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/30 text-white font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
      {/* Hero */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-2 text-sm mb-6">
              Wilson Property Assist
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Tenant Maintenance Support For Landlords
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-xl">
              We handle tenant maintenance issues, contractor coordination, and landlord approvals so you don’t have to deal with day-to-day property problems yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl text-center"
              >
                Start Subscription
              </a>

              <a
                href="#contact"
                className="border border-zinc-700 hover:border-zinc-500 transition-all duration-300 px-8 py-4 rounded-2xl text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Recent Tenant Issue</span>
                  <span className="text-yellow-400">Boiler Pressure</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Contractor Quote</span>
                  <span className="text-emerald-400">Ready</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Landlord Approval</span>
                  <span className="text-yellow-400">Pending</span>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-5">
                  <p className="text-sm text-zinc-400 mb-2">Latest Update</p>
                  <p className="text-lg">
                    Tenant reported boiler pressure issue. Contractor quote sourced and awaiting landlord approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What’s Included</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A simple monthly service designed to help landlords stay informed and reduce stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Property Inspections',
                text: 'Tenant Issue Management.'
              },
              {
                title: 'Photo Reports',
                text: 'Receive detailed updates with clear property photos.'
              },
              {
                title: 'Maintenance Coordination',
                text: 'We help organise repairs and contractor visits.'
              },
              {
                title: 'Tenant Issue Reporting',
                text: 'Stay updated with problems before they become costly.'
              },
              {
                title: 'Flexible Support',
                text: 'Simple communication via email or WhatsApp.'
              },
              {
                title: 'Trusted Local Norfolk Service',
                text: 'Focused support for landlords in Norfolk and surrounding areas.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Simple Monthly Pricing</h2>
          <p className="text-zinc-400 text-lg mb-16">
            No complicated contracts or hidden fees.
          </p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 max-w-2xl mx-auto shadow-2xl">
            <div className="text-6xl font-bold mb-4">£60</div>
            <div className="text-zinc-400 text-lg mb-8">Per Property / Month</div>

            <div className="space-y-4 text-left mb-10">
              {[
                'Yearly property inspection',
                'Photo reports',
                'Maintenance coordination',
                'Tenant issue reporting',
                'Email & WhatsApp support',
                'Cancel anytime'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#signup"
              className="block w-full bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-semibold py-5 rounded-2xl text-lg"
            >
              Subscribe Now
            </a>

            <p className="text-zinc-500 text-sm mt-5">
              Replace the Stripe link with your own subscription checkout.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Sign up online',
              'Add your property details',
              'We carry out inspections',
              'Issue resolved & landlord updated'
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-black font-bold text-xl flex items-center justify-center mx-auto mb-6">
                  {index + 1}
                </div>
                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold mb-6">Start Your Subscription</h2>
            <p className="text-zinc-400 text-lg">
              Enter your details below and we’ll contact you to finalise your property setup.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Landlord Full Name"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <select
                value={propertyCount}
                onChange={(e) => setPropertyCount(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
              >
                <option value={1}>1 Property</option>
                <option value={2}>2 Properties</option>
                <option value={3}>3 Properties</option>
                <option value={4}>4 Properties</option>
                <option value={5}>5 Properties</option>
                <option value={6}>6+ Properties</option>
              </select>
            </div>

            {propertyCount === 6 ? (
              <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-3xl p-10 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Portfolio Landlord?
                </h3>

                <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  If you have more than 5 properties, please contact us directly for a tailored management solution and discounted portfolio pricing.
                </p>

                <a
                  href="#contact"
                  className="inline-block bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl"
                >
                  Contact Us
                </a>
              </div>
            ) : Array.from({ length: propertyCount }).map((_, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950/50"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Property {index + 1} Details
                </h3>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Tenant Name"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
                    />

                    <input
                      type="tel"
                      placeholder="Tenant Contact Number"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-5 rounded-2xl transition-all duration-300 text-lg">
              Continue To Payment
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-zinc-400 text-lg mb-12">
            Have questions before subscribing? Reach out today.
          </p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
            />

            <textarea
              placeholder="How can we help?"
              rows="5"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500"
            />

            <button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-5 rounded-2xl transition-all duration-300">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Wilson Property Assist</h3>
            <p className="text-zinc-500 mt-2">
              Property support services for landlords.
            </p>
          </div>

          <div className="text-zinc-500 text-sm">
            Norwich, Norfolk • WPA@wilsonpropertyassist.co.uk
          </div>
        </div>
      </footer>
    </div>
  )
}
