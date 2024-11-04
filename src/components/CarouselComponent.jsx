import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.mohanlalsons.com/cdn/shop/files/banner1_desk_3350x.webp?v=1700134935",
    },
    {
      image: "https://www.mohanlalsons.com/cdn/shop/files/Web_Banner_Desktop_1512x553_4a17d035-f12c-4d26-a1d9-cf1846a8945d_3350x.jpg?v=1701099378",
    },
    {
      image: "https://www.mohanlalsons.com/cdn/shop/files/Web_Banner_DESKTOP--1366X500__3.jpg?v=1726827233",
    },
    {
      image: "https://www.mohanlalsons.com/cdn/shop/files/Web_Banner_DESKTOP--1366X500__1.jpg?v=1726827155",
    },
    {
      image: "https://www.mohanlalsons.com/cdn/shop/files/Banner2_desk.jpg?v=1708604518",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20">
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 px-8 py-6 bg-white">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">PERFECT FIT GUARANTEED</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">PREMIUM FABRIC & MATERIAL</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">HAND CRAFTED CLOTHING</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">MADE TO MEASURE</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;