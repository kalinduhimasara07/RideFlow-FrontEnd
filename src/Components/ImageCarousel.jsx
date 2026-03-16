import { useState, useEffect } from "react"

const slides = [
  {
    image: "/carousel1.jpg",
    title: "Travel Across Sri Lanka",
    subtitle: "Book buses across 50+ cities instantly",
  },
  {
    image: "/carousel2.jpg",
    title: "Comfortable & Reliable",
    subtitle: "Premium buses with real-time seat booking",
  },
  {
    image: "/carousel3.jpg",
    title: "Fast & Easy Booking",
    subtitle: "Secure payments and instant confirmation",
  },
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-gray-200 text-lg md:text-xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full text-xl"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full text-xl"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  )
}