const FEATURES = [
  {
    icon: '⚡',
    title: 'Instant Booking',
    desc: 'Confirm your seat in under 60 seconds. No queues, no waiting at the counter.',
  },
  {
    icon: '📍',
    title: 'Live Bus Tracking',
    desc: 'Know exactly where your bus is, updated in real-time down to the minute.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'Your transactions are protected with bank-level 256-bit SSL encryption.',
  },
  {
    icon: '🎟️',
    title: 'Easy Cancellations',
    desc: 'Plans change? Modify or cancel bookings up to 2 hours before departure.',
  },
  {
    icon: '🌙',
    title: 'Overnight Sleeper',
    desc: 'Luxury sleeper coaches with reclining seats, AC, and onboard WiFi.',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    desc: 'Our support team is always on standby to assist you any time of day.',
  },
]

export default function Features() {
  return (
    <section className="bg-navy-2 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="font-syne text-3xl font-bold text-white">The RideFlow Difference</h2>
          <p className="text-[#8a94a6] text-sm mt-3 max-w-md mx-auto leading-relaxed">
            We obsess over every detail so your journey is seamless from booking to arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="bg-navy-3 border border-white/[0.06] rounded-2xl p-6
                         hover:border-brand/20 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-2xl mb-5
                              group-hover:bg-brand/20 transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="font-syne font-bold text-white text-base mb-2">{f.title}</h3>
              <p className="text-[#8a94a6] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
