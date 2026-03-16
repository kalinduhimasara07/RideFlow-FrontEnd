export default function CTABanner() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div
        className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #e85520 100%)' }}
      >
        {/* Text */}
        <div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-2">
            Take RideFlow on the Go
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-md">
            Download the app for exclusive mobile deals, offline tickets, real-time alerts, and one-tap booking anywhere you are.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button className="bg-white text-brand font-semibold text-sm px-6 py-3 rounded-full
                             hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 7.5L5.5 2 4 3.5 8 7.5 4 11.5 5.5 13 11 7.5Z" fill="#FF6B35"/>
            </svg>
            App Store
          </button>
          <button className="bg-transparent text-white border-2 border-white/50 hover:border-white
                             font-semibold text-sm px-6 py-3 rounded-full
                             transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5"/>
              <path d="M5 8L11 5M5 8L11 11M5 8H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Google Play
          </button>
        </div>
      </div>
    </section>
  )
}
