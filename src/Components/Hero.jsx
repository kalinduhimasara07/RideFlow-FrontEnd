import BookingForm from './BookingForm'

const STATS = [
  { num: '2M+', label: 'Happy Travellers' },
  { num: '500+', label: 'Routes Available' },
  { num: '50+', label: 'Cities Covered' },
  { num: '4.9★', label: 'Average Rating' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                 text-center px-6 pt-28 pb-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255,107,53,0.06) 0%, transparent 60%), #0a0f1e',
      }}
    >
      {/* Dot grid */}
      <div className="bg-hero-pattern absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center hero-animate">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 text-brand-light
                        text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
          500+ Routes Across Southeast Asia
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold text-white leading-[1.07] tracking-tight
                       text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
          Travel Smarter,{' '}
          <br />
          <span className="text-brand">Book Faster.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#8a94a6] text-base sm:text-lg max-w-md mt-5 mb-8 leading-relaxed">
          Seamless bus booking across 50+ cities. Real-time seats, instant confirmation — zero hassle.
        </p>

        {/* Booking form */}
        <BookingForm />

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-syne text-2xl font-extrabold text-white">{s.num}</div>
              <div className="text-[#8a94a6] text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
