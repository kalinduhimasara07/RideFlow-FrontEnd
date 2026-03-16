import { useState } from "react";

export default function RideFlowLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as ${email}`);
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col justify-between flex-[1.1] relative bg-[#0d0c14] overflow-hidden p-12">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[70%] h-[60%] bg-[#ff501e] opacity-[0.12] blur-[80px] rounded-full" />
          <div className="absolute top-0 right-0 w-[50%] h-[40%] bg-[#ffb428] opacity-[0.07] blur-[80px] rounded-full" />
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ff501e] rounded-xl flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L5 6H19L21 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <rect x="2" y="12" width="20" height="6" rx="2" fill="#fff" opacity="0.9" />
              <circle cx="7" cy="20" r="2" fill="#fff" />
              <circle cx="17" cy="20" r="2" fill="#fff" />
            </svg>
          </div>
          <span className="text-white text-xl font-extrabold tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
            RideFlow
          </span>
        </div>

        {/* City Illustration */}
        <div className="relative z-0 flex-1 flex items-end">
          <svg
            viewBox="0 0 560 320"
            className="w-full max-h-[320px]"
            preserveAspectRatio="xMidYMax meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Buildings */}
            <rect x="20" y="100" width="55" height="220" fill="#1a1824" rx="2" />
            <rect x="23" y="110" width="8" height="6" fill="#ff501e" opacity="0.6" rx="1" />
            <rect x="35" y="110" width="8" height="6" fill="#ffb428" opacity="0.3" rx="1" />
            <rect x="23" y="122" width="8" height="6" fill="#ffb428" opacity="0.4" rx="1" />
            <rect x="35" y="122" width="8" height="6" fill="#ff501e" opacity="0.2" rx="1" />
            <rect x="23" y="134" width="8" height="6" fill="#ff501e" opacity="0.5" rx="1" />

            <rect x="85" y="60" width="50" height="260" fill="#16151f" rx="2" />
            <rect x="89" y="72" width="7" height="5" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="100" y="72" width="7" height="5" fill="#ff501e" opacity="0.4" rx="1" />
            <rect x="111" y="72" width="7" height="5" fill="#ffb428" opacity="0.6" rx="1" />
            <rect x="89" y="84" width="7" height="5" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="100" y="84" width="7" height="5" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="89" y="96" width="7" height="5" fill="#ff501e" opacity="0.6" rx="1" />
            <rect x="111" y="96" width="7" height="5" fill="#ffb428" opacity="0.4" rx="1" />

            <rect x="145" y="80" width="70" height="240" fill="#1e1c2a" rx="2" />
            <rect x="149" y="92" width="10" height="7" fill="#ff501e" opacity="0.7" rx="1" />
            <rect x="163" y="92" width="10" height="7" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="177" y="92" width="10" height="7" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="149" y="105" width="10" height="7" fill="#ffb428" opacity="0.4" rx="1" />
            <rect x="163" y="105" width="10" height="7" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="149" y="118" width="10" height="7" fill="#ff501e" opacity="0.5" rx="1" />
            <rect x="177" y="118" width="10" height="7" fill="#ffb428" opacity="0.6" rx="1" />
            <rect x="149" y="131" width="10" height="7" fill="#ff501e" opacity="0.2" rx="1" />
            <rect x="163" y="131" width="10" height="7" fill="#ffb428" opacity="0.4" rx="1" />

            <rect x="225" y="40" width="55" height="280" fill="#13121b" rx="2" />
            <rect x="229" y="52" width="9" height="6" fill="#ff501e" opacity="0.8" rx="1" />
            <rect x="242" y="52" width="9" height="6" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="255" y="52" width="9" height="6" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="229" y="64" width="9" height="6" fill="#ffb428" opacity="0.6" rx="1" />
            <rect x="242" y="64" width="9" height="6" fill="#ff501e" opacity="0.4" rx="1" />
            <rect x="229" y="76" width="9" height="6" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="255" y="76" width="9" height="6" fill="#ffb428" opacity="0.7" rx="1" />

            <rect x="290" y="110" width="40" height="210" fill="#1a1824" rx="2" />
            <rect x="294" y="120" width="7" height="5" fill="#ff501e" opacity="0.5" rx="1" />
            <rect x="305" y="120" width="7" height="5" fill="#ffb428" opacity="0.4" rx="1" />
            <rect x="294" y="131" width="7" height="5" fill="#ffb428" opacity="0.3" rx="1" />
            <rect x="318" y="131" width="7" height="5" fill="#ff501e" opacity="0.6" rx="1" />

            <rect x="340" y="70" width="65" height="250" fill="#1e1c2a" rx="2" />
            <rect x="344" y="82" width="9" height="7" fill="#ffb428" opacity="0.6" rx="1" />
            <rect x="357" y="82" width="9" height="7" fill="#ff501e" opacity="0.4" rx="1" />
            <rect x="370" y="82" width="9" height="7" fill="#ffb428" opacity="0.3" rx="1" />
            <rect x="344" y="95" width="9" height="7" fill="#ff501e" opacity="0.5" rx="1" />
            <rect x="370" y="95" width="9" height="7" fill="#ff501e" opacity="0.7" rx="1" />

            <rect x="415" y="50" width="75" height="270" fill="#16151f" rx="2" />
            <rect x="420" y="62" width="11" height="8" fill="#ff501e" opacity="0.7" rx="1" />
            <rect x="435" y="62" width="11" height="8" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="450" y="62" width="11" height="8" fill="#ff501e" opacity="0.3" rx="1" />
            <rect x="465" y="62" width="11" height="8" fill="#ffb428" opacity="0.6" rx="1" />
            <rect x="420" y="76" width="11" height="8" fill="#ffb428" opacity="0.4" rx="1" />
            <rect x="450" y="76" width="11" height="8" fill="#ff501e" opacity="0.5" rx="1" />
            <rect x="420" y="90" width="11" height="8" fill="#ff501e" opacity="0.6" rx="1" />
            <rect x="435" y="90" width="11" height="8" fill="#ffb428" opacity="0.3" rx="1" />

            <rect x="500" y="90" width="50" height="230" fill="#1a1824" rx="2" />
            <rect x="504" y="100" width="8" height="6" fill="#ff501e" opacity="0.6" rx="1" />
            <rect x="516" y="100" width="8" height="6" fill="#ffb428" opacity="0.4" rx="1" />
            <rect x="504" y="112" width="8" height="6" fill="#ffb428" opacity="0.5" rx="1" />
            <rect x="530" y="112" width="8" height="6" fill="#ff501e" opacity="0.3" rx="1" />

            {/* Road */}
            <rect x="0" y="260" width="560" height="60" fill="#0f0d18" />
            <polygon points="0,260 560,260 560,320 0,320" fill="#181624" />
            <line x1="280" y1="260" x2="280" y2="320" stroke="#ff501e" strokeWidth="1.5" strokeDasharray="14 10" opacity="0.25" />
            <line x1="90" y1="265" x2="140" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="470" y1="265" x2="420" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* Car */}
            <g transform="translate(220,262)">
              <rect width="120" height="44" rx="6" fill="#1e1c2a" />
              <rect x="5" y="5" width="50" height="34" rx="4" fill="#232030" />
              <rect x="65" y="5" width="50" height="34" rx="4" fill="#232030" />
              <circle cx="20" cy="45" r="8" fill="#0f0d18" />
              <circle cx="20" cy="45" r="4" fill="#2a2838" />
              <circle cx="100" cy="45" r="8" fill="#0f0d18" />
              <circle cx="100" cy="45" r="4" fill="#2a2838" />
              <rect x="3" y="10" width="12" height="7" rx="2" fill="#ffb428" opacity="0.8" />
              <rect x="105" y="10" width="12" height="7" rx="2" fill="#ff4444" opacity="0.9" />
            </g>
          </svg>
        </div>

        {/* Tagline & Stats */}
        <div className="relative z-10">
          <h1
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-1.5px" }}
          >
            Move<br />smarter,<br />
            <span className="text-[#ff501e]">faster.</span>
          </h1>
          <p className="text-sm text-white/40 font-light max-w-xs leading-relaxed mb-8">
            Your city's ride network, all in one place. Get to where you need to go.
          </p>
          <div className="flex gap-8">
            {[
              { num: "2.4M+", label: "Daily rides" },
              { num: "180+", label: "Cities" },
              { num: "4.9★", label: "Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-white text-xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
                  {s.num}
                </div>
                <div className="text-white/40 text-[11px] uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 lg:flex-[0.9] flex items-center justify-center px-6 py-12 bg-[#f5f3ed] relative">
        {/* Accent line */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff501e]/30 to-transparent" />

        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-[#ff501e] rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L5 6H19L21 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <rect x="2" y="12" width="20" height="6" rx="2" fill="#fff" opacity="0.9" />
                <circle cx="7" cy="20" r="2" fill="#fff" />
                <circle cx="17" cy="20" r="2" fill="#fff" />
              </svg>
            </div>
            <span className="text-[#0a0a0f] text-xl font-extrabold tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              RideFlow
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2
              className="text-[2rem] font-extrabold text-[#0a0a0f] leading-tight"
              style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-1px" }}
            >
              Welcome back.
            </h2>
            <p className="mt-1.5 text-sm text-gray-500">
              New to RideFlow?{" "}
              <a href="#" className="text-[#ff501e] font-medium hover:underline">
                Create an account →
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-500 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="w-full h-12 bg-white border border-[#e8e5de] rounded-xl pl-10 pr-4 text-sm text-[#0a0a0f] placeholder-gray-300 outline-none focus:border-[#ff501e] transition-colors duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-12 bg-white border border-[#e8e5de] rounded-xl pl-10 pr-12 text-sm text-[#0a0a0f] placeholder-gray-300 outline-none focus:border-[#ff501e] transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#ff501e] cursor-pointer"
                />
                <span className="text-sm text-gray-500">Keep me signed in</span>
              </label>
              <button type="button" className="text-sm text-[#ff501e] font-medium hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-13 bg-[#ff501e] hover:bg-[#e04018] active:scale-[0.98] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-150"
              style={{ fontFamily: "Syne, sans-serif", height: "52px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Sign in to RideFlow
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#e8e5de]" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-[#e8e5de]" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              {
                label: "Google",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                label: "X",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <button
                key={social.label}
                type="button"
                className="h-11 bg-white border border-[#e8e5de] hover:bg-[#f9f7f3] hover:border-[#c8c4bc] rounded-xl flex items-center justify-center gap-2 text-xs font-medium text-gray-600 transition-all duration-150"
              >
                {social.icon}
                {social.label}
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#ff501e] hover:underline">Terms</a>{" "}
            and{" "}
            <a href="#" className="text-[#ff501e] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}