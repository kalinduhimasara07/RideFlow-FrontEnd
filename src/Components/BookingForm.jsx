import { useState } from 'react'

const TABS = ['One Way', 'Round Trip', 'Multi-City']

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('One Way')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState('1')

  function swapCities() {
    const tmp = from
    setFrom(to)
    setTo(tmp)
  }

  function handleSearch(e) {
    e.preventDefault()
    alert(`Searching: ${from || 'Any'} → ${to || 'Any'} on ${date || 'any date'} for ${passengers} passenger(s)`)
  }

  return (
    <div className="bg-navy-3 border border-white/[0.08] rounded-2xl p-7 w-full max-w-4xl relative z-10">
      {/* Trip type tabs */}
      <div className="flex gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeTab === tab
                ? 'bg-brand border-brand text-white'
                : 'bg-transparent border-white/[0.12] text-[#8a94a6] hover:border-white/30 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr] gap-3 items-end">
          {/* From */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-[#8a94a6] uppercase tracking-widest">From</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a94a6] text-base">📍</span>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Departure city"
                className="w-full bg-navy-4 border border-white/[0.08] rounded-xl text-white text-sm px-10 py-3 placeholder-[#8a94a6] focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>

          {/* Swap */}
          <button
            type="button"
            onClick={swapCities}
            className="swap-btn bg-navy-4 border border-white/[0.08] w-10 h-10 rounded-xl flex items-center justify-center self-end text-white flex-shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13 3L16 6L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 15L2 12L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* To */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-[#8a94a6] uppercase tracking-widest">To</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a94a6] text-base">🏁</span>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination city"
                className="w-full bg-navy-4 border border-white/[0.08] rounded-xl text-white text-sm px-10 py-3 placeholder-[#8a94a6] focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-[#8a94a6] uppercase tracking-widest">
              {activeTab === 'Round Trip' ? 'Depart Date' : 'Travel Date'}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-navy-4 border border-white/[0.08] rounded-xl text-white text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>

        {/* Second row — return date + passengers + search */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-end mt-3">
          {/* Return date (only for Round Trip) */}
          {activeTab === 'Round Trip' ? (
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-[#8a94a6] uppercase tracking-widest">Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-navy-4 border border-white/[0.08] rounded-xl text-white text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          ) : (
            <div /> /* spacer */
          )}

          {/* Passengers */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-[#8a94a6] uppercase tracking-widest">Passengers</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a94a6] text-sm">👤</span>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-navy-4 border border-white/[0.08] rounded-xl text-white text-sm px-10 py-3 focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-navy-4">
                    {n} Passenger{n > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a94a6] pointer-events-none text-xs">▾</span>
            </div>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="bg-brand hover:bg-brand-light text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap self-end"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Search Buses
          </button>
        </div>
      </form>
    </div>
  )
}
