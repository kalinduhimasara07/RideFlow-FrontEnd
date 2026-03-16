const TESTIMONIALS = [
  {
    name: 'Priya S.',
    location: 'Singapore',
    avatar: 'PS',
    rating: 5,
    text: 'RideFlow changed how I travel. Booked a last-minute ticket to KL in seconds, and the bus arrived right on time. Incredible service!',
  },
  {
    name: 'Ahmad R.',
    location: 'Kuala Lumpur',
    avatar: 'AR',
    rating: 5,
    text: 'The live tracking feature is amazing. I knew exactly when to head to the platform. Never missed a bus since I started using RideFlow.',
  },
  {
    name: 'Wei Lin T.',
    location: 'Penang',
    avatar: 'WL',
    rating: 5,
    text: 'Super easy to use and prices are unbeatable. The sleeper bus to Singapore was so comfortable — arrived refreshed and ready to go.',
  },
]

const AVATAR_COLORS = ['bg-purple-500/20 text-purple-300', 'bg-teal-500/20 text-teal-300', 'bg-orange-500/20 text-orange-300']

export default function Testimonials() {
  return (
    <section className="bg-navy-2 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-2">Happy Travellers</p>
          <h2 className="font-syne text-3xl font-bold text-white">What Our Passengers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-navy-3 border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-amber-400 text-sm">
                {'★'.repeat(t.rating)}
              </div>

              {/* Quote */}
              <p className="text-[#c0c8d8] text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${AVATAR_COLORS[i]}`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-[#8a94a6] text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
