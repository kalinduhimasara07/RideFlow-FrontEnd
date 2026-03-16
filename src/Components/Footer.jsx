const LINKS = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Support: ['Help Center', 'Contact Us', 'Safety', 'Cancellations'],
  Services: ['Bus Routes', 'Group Booking', 'Corporate', 'Track My Bus'],
}

export default function Footer() {
  return (
    <footer className="bg-navy-2 border-t border-white/[0.06] px-6 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-syne text-2xl font-extrabold mb-3">
              Ride<span className="text-brand">Flow</span>
            </div>
            <p className="text-[#8a94a6] text-sm leading-relaxed max-w-xs">
              Southeast Asia's most trusted bus booking platform. Travel smarter, arrive happier.
            </p>
            <div className="flex gap-3 mt-5">
              {['𝕏', 'in', 'f'].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-navy-4 border border-white/[0.08] text-[#8a94a6]
                             hover:text-white hover:border-white/20 transition-all text-xs font-bold"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-syne font-bold text-white text-sm mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#8a94a6] text-sm hover:text-white transition-colors no-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8a94a6]">
          <span>© 2025 RideFlow. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
