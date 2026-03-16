import { useState } from 'react'

const ALL_TRIPS = [
  {
    time: '07:30',
    period: 'AM',
    route: 'Singapore → Kuala Lumpur',
    type: 'Express Coach',
    platform: 'Platform 4',
    seats: 12,
    price: '$18',
    badge: 'Express',
    seatsColor: 'text-green-400',
  },
  {
    time: '09:00',
    period: 'AM',
    route: 'Singapore → Johor Bahru',
    type: 'Standard · Non-AC',
    platform: 'Platform 1',
    seats: 24,
    price: '$5',
    badge: 'Budget',
    seatsColor: 'text-green-400',
  },
  {
    time: '10:15',
    period: 'AM',
    route: 'Singapore → Penang',
    type: 'Luxury Sleeper',
    platform: 'Platform 6',
    seats: 5,
    price: '$32',
    badge: 'Luxury',
    seatsColor: 'text-amber-400',
  },
  {
    time: '11:45',
    period: 'AM',
    route: 'Kuala Lumpur → Penang',
    type: 'Express Coach',
    platform: 'Platform 3',
    seats: 18,
    price: '$12',
    badge: 'Express',
    seatsColor: 'text-green-400',
  },
  {
    time: '01:30',
    period: 'PM',
    route: 'Johor Bahru → Kuala Lumpur',
    type: 'Standard Coach',
    platform: 'Platform 2',
    seats: 2,
    price: '$14',
    badge: 'Almost Full',
    seatsColor: 'text-red-400',
  },
  {
    time: '03:00',
    period: 'PM',
    route: 'Penang → Ipoh',
    type: 'Standard Coach',
    platform: 'Platform 5',
    seats: 30,
    price: '$8',
    badge: 'Available',
    seatsColor: 'text-green-400',
  },
]

export default function Departures() {
  const [filter, setFilter] = useState('All')
  const FILTERS = ['All', 'Express', 'Luxury', 'Budget']

  const filtered = filter === 'All'
    ? ALL_TRIPS
    : ALL_TRIPS.filter((t) => t.badge === filter)

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-1">Live Schedule</p>
          <h2 className="font-syne text-3xl font-bold text-white">Today's Departures</h2>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                filter === f
                  ? 'bg-brand border-brand text-white'
                  : 'bg-transparent border-white/[0.12] text-[#8a94a6] hover:border-white/30 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length === 0 && (
          <p className="text-[#8a94a6] text-sm py-8 text-center">No departures found for this filter.</p>
        )}
        {filtered.map((trip, i) => (
          <div
            key={i}
            className="bg-navy-3 border border-white/[0.07] rounded-xl px-5 py-4
                       flex flex-wrap md:flex-nowrap items-center gap-4
                       hover:border-brand/25 transition-colors duration-200"
          >
            {/* Time */}
            <div className="font-syne text-2xl font-extrabold text-white min-w-[64px]">
              {trip.time}
              <span className="text-sm font-normal text-[#8a94a6] ml-1">{trip.period}</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-white/[0.08] flex-shrink-0" />

            {/* Route info */}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm mb-0.5">{trip.route}</div>
              <div className="text-[#8a94a6] text-xs">
                {trip.type} · {trip.platform}
              </div>
            </div>

            {/* Badge */}
            <span
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                trip.badge === 'Almost Full'
                  ? 'bg-red-500/10 text-red-400'
                  : trip.badge === 'Luxury'
                  ? 'bg-amber-500/10 text-amber-400'
                  : 'bg-brand/10 text-brand-light'
              }`}
            >
              {trip.badge}
            </span>

            {/* Seats */}
            <div className="text-center flex-shrink-0 min-w-[56px]">
              <div className={`font-syne text-lg font-bold ${trip.seatsColor}`}>{trip.seats}</div>
              <div className="text-[#8a94a6] text-[10px] leading-tight">seats left</div>
            </div>

            {/* Price */}
            <div className="font-syne font-bold text-lg text-brand flex-shrink-0 min-w-[52px] text-right">
              {trip.price}
            </div>

            {/* Book button */}
            <button
              className="bg-brand hover:bg-brand-light text-white text-xs font-semibold px-4 py-2 rounded-lg
                         transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-sm text-[#8a94a6] hover:text-brand transition-colors">
          View full schedule →
        </button>
      </div>
    </section>
  )
}
