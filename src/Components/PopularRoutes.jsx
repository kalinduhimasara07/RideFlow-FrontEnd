const ROUTES = [
  {
    from: 'Singapore',
    to: 'Kuala Lumpur',
    duration: '5h 30m',
    price: '$18',
    tag: 'Most Popular',
    freq: '12 daily buses',
  },
  {
    from: 'Kuala Lumpur',
    to: 'Penang',
    duration: '3h 45m',
    price: '$12',
    tag: 'Scenic Route',
    freq: '8 daily buses',
  },
  {
    from: 'Singapore',
    to: 'Johor Bahru',
    duration: '1h 15m',
    price: '$5',
    tag: 'Express',
    freq: '24 daily buses',
  },
  {
    from: 'Penang',
    to: 'Ipoh',
    duration: '2h 10m',
    price: '$8',
    tag: 'Budget',
    freq: '6 daily buses',
  },
  {
    from: 'Kuala Lumpur',
    to: 'Melaka',
    duration: '2h 00m',
    price: '$10',
    tag: 'Weekend Special',
    freq: '10 daily buses',
  },
  {
    from: 'Johor Bahru',
    to: 'Kuala Lumpur',
    duration: '4h 00m',
    price: '$14',
    tag: 'Luxury',
    freq: '5 daily buses',
  },
]

export default function PopularRoutes() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-brand text-sm font-medium mb-1 uppercase tracking-widest">Destinations</p>
          <h2 className="font-syne text-3xl font-bold text-white">Popular Routes</h2>
        </div>
        <button className="text-brand text-sm font-medium hover:text-brand-light transition-colors hidden md:block">
          View all routes →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROUTES.map((route, i) => (
          <div
            key={i}
            className="route-card relative bg-navy-3 border border-white/[0.07] rounded-2xl p-5 cursor-pointer
                       hover:border-brand/30 hover:-translate-y-1 transition-all duration-250 overflow-hidden"
          >
            {/* Tag */}
            <span className="inline-block text-[11px] font-medium text-brand-light bg-brand/10 px-3 py-1 rounded-full mb-3">
              {route.tag}
            </span>

            {/* Route cities */}
            <div className="flex items-center gap-2 font-syne text-lg font-bold text-white mb-1">
              <span>{route.from}</span>
              <span className="text-brand text-sm">→</span>
              <span>{route.to}</span>
            </div>

            <p className="text-[#8a94a6] text-xs mb-4">{route.freq}</p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#8a94a6] text-xs">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="#8a94a6" strokeWidth="1.2"/>
                  <path d="M6.5 3.5V6.5L8.5 8" stroke="#8a94a6" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {route.duration}
              </div>
              <div className="font-syne text-xl font-bold text-brand">
                {route.price}
                <span className="text-[11px] font-normal text-[#8a94a6] ml-1">/ seat</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 md:hidden">
        <button className="text-brand text-sm font-medium">View all routes →</button>
      </div>
    </section>
  )
}
