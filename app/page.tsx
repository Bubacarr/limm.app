"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

// Feature Card Component with mouse tracking
type Feature = {
  title: string;
  description: string;
  image: string;
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(${isHovered ? 1.05 : 1})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      <div className="relative bg-linear-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Sparkle effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        
        <div className="p-8 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="inline-block bg-linear-to-r from-[#001738] to-[#0066CC] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
              #{index + 1}
            </div>
            <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
              {index === 0 ? '🏪' : index === 1 ? '🍽️' : '⚙️'}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-[#0066CC] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {feature.description}
          </p>
          
          {/* Feature highlights */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">Fast</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">Secure</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">Easy</span>
          </div>
        </div>
        
        <div className="justify-center items-center flex pb-8 px-8 relative z-10">
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Image glow effect */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Image
              src={feature.image}
              alt={feature.title}
              width={220}
              height={140}
              className="object-contain h-[140px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 relative z-10"
              style={{
                transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
              }}
            />
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
}

export default function Home() {
  const sliderImages = [
    {
      slide: 'One',
      image: '/Image1.png'
    },
    {
      slide: 'Two',
      image: '/Image2.png'
    },
    {
      slide: 'Three',
      image: '/Image3.png'
    },
    {
      slide: 'Four',
      image: '/Image4.png'
    }
  ];

  const features = [
    {
      title: "Manage Multiple Cash Accounts",
      description: "This helps you manage your money, know how it comes in and out. Perfect for retail businesses that need to track multiple payment sources and cash flows.",
      image: "/for_retail.png"
    },
    {
      title: "Cool Reports",
      description: "Get detailed reports from sales, purchases, expenses, and inventory. Know how much stock you started with, how much is out & in, and what's the balance.",
      image: "/for_restaurants.png"
    },
    {
      title: "Track Item Movements",
      description: "Very detailed list of how an item is moving. See every transaction, transfer, and change in your inventory with complete visibility.",
      image: "/for_services.png"
    }
  ];

  const pricingPlans = [
    {
      name: "Premium Plus",
      price: "0 F",
      period: "CFA / MONTH",
      description: "Everything you need to get started with your business.",
      features: [
        "Up to 100 transactions",
        "Basic inventory management",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Investors In",
      price: "5,000 F",
      period: "CFA / MONTH",
      description: "Perfect for growing businesses with more needs.",
      features: [
        "Unlimited transactions",
        "Advanced inventory management",
        "Multi-device access",
        "Priority support",
        "Analytics dashboard"
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Premium Plus",
      price: "10,000 F",
      period: "CFA / MONTH",
      description: "For established businesses that need the best.",
      features: [
        "Everything in Investors In",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reports"
      ],
      buttonText: "Get Started",
      highlighted: false
    }
  ];

  const hardwareProducts = [
    {
      name: "Limm Tablet Register",
      description: "A complete POS system with built-in printer, card reader, and cash drawer. Perfect for retail and restaurants.",
      image: "/logo.png",
      buttonText: "Discover & More"
    },
    {
      name: "Limm Bluetooth Printer",
      description: "Compact, wireless receipt printer that works seamlessly with your phone or tablet.",
      image: "/logo.png",
      buttonText: "Discover & More"
    }
  ];


  return (
    <div className="flex min-h-screen items-center justify-center font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs - more visible */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-linear-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-linear-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-linear-to-br from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]"></div>
        
        {/* Large geometric shapes */}
        <div className="absolute top-40 right-20 w-64 h-64 border-4 border-blue-200/30 rounded-3xl transform rotate-12 animate-float"></div>
        <div className="absolute bottom-60 left-32 w-48 h-48 border-4 border-indigo-200/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 border-4 border-purple-200/30 rounded-2xl transform -rotate-12 animate-float animation-delay-4000"></div>
        
        {/* Smaller accent shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-indigo-300/20 rounded-lg transform rotate-45 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse-slow animation-delay-4000"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-transparent via-blue-200/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-linear-to-b from-transparent via-indigo-200/20 to-transparent"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-blue-100/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl from-indigo-100/40 to-transparent"></div>
      </div>

      <main className="flex min-h-screen w-full flex-col items-center bg-transparent relative z-10">
       

        {/* Hero Section */}
        <section className="w-full mx-auto py-20 px-4">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-blue-50 text-[#001738] px-4 py-2 rounded-full text-sm font-medium">
                ✨ Built for African Businesses
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight">
              The operating system for<br />
              <span className="bg-linear-to-r from-[#001738] to-[#0066CC] bg-clip-text text-transparent">
                African Businesses
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Limm helps you track sales, manage inventory, and accept payments — all from your phone or register. Simple, local, and built for your everyday reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-[#001738] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#002855] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="bg-white text-[#001738] px-8 py-4 rounded-xl font-medium shadow-lg border-[#001738] hover:bg-gray-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>
            <div className="flex gap-6 animate-scroll">
              {/* First set of images */}
              {sliderImages.map((image, index) => (
                <div key={`first-${index}`} className="shrink-0 w-[280px] md:w-[320px] group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={image.image}
                      alt={image.slide}
                      width={320}
                      height={420}
                      className="object-cover w-full h-[420px]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sliderImages.map((image, index) => (
                <div key={`second-${index}`} className="shrink-0 w-[280px] md:w-[320px] group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={image.image}
                      alt={image.slide}
                      width={320}
                      height={420}
                      className="object-cover w-full h-[420px]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started with App Section */}
        <section id="app" className="w-full bg-linear-to-br from-[#001738] via-[#002855] to-[#001738] py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                  📱 Available on Mobile
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Manage Your Business<br />
                  <span className="text-blue-300">Anywhere, Anytime</span>
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Download our mobile app and take control of your business on the go. Track sales, manage inventory, and accept payments from your phone.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white mb-1">4.8★</div>
                    <div className="text-blue-200 text-xs">App Rating</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-blue-200 text-xs">Support</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white mb-1">Free</div>
                    <div className="text-blue-200 text-xs">To Start</div>
                  </div>
                </div>
                
                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-white text-[#001738] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">Download on the</div>
                      <div className="text-lg font-bold leading-tight">App Store</div>
                    </div>
                  </button>
                  <button className="group bg-white text-[#001738] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">Get it on</div>
                      <div className="text-lg font-bold leading-tight">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Right side - Phone mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-400/30 rounded-[2.5rem] filter blur-3xl"></div>
                  
                  {/* Android Phone frame */}
                  <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-[2rem] overflow-hidden w-[280px] h-[580px] relative flex flex-col">
                      {/* Android status bar - at the very top */}
                      <div className="h-8 bg-white flex items-center justify-between px-4 shrink-0 border-b border-gray-200">
                        <div className="text-gray-900 text-xs font-medium">9:41</div>
                        <div className="flex gap-1.5 items-center">
                          <div className="text-gray-900 text-xs font-medium">5G</div>
                          <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                          </svg>
                          <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Screen content with actual app image - takes remaining space */}
                      <div className="flex-1 relative bg-white h-full w-full">
                        <Image
                          src="/app_dashboard.png"
                          alt="Limm App Dashboard"
                          width={280}
                          height={480}
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Android navigation bar - at the bottom */}
                      <div className="h-12 bg-white flex items-center justify-center gap-8 shrink-0 border-t border-gray-200">
                        <div className="w-5 h-5 border-2 border-gray-700 rounded-sm"></div>
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                        <div className="w-5 h-0.5 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                    Live Updates
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-[#001738] px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              ✨ Core Features
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Built for Every Business
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Powerful tools to help you manage your business finances, inventory, and operations with complete visibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
          
          
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full bg-linear-to-br from-[#001738] to-[#002855] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Choose the plan that fits your business. No hidden fees, cancel anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-linear-to-br from-[#0066CC] to-[#0052A3] text-white border-[#0066CC] shadow-2xl transform scale-105'
                      : 'bg-white text-black border-white hover:shadow-xl'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-yellow-400 text-[#001738] px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <p className={`mb-6 text-sm leading-relaxed ${
                    plan.highlighted ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm ml-2 opacity-75">{plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <svg className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-white' : 'text-green-500'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.highlighted
                        ? 'bg-white text-[#0066CC] hover:bg-gray-100 shadow-lg'
                        : 'bg-[#001738] text-white hover:bg-[#002855] shadow-md'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Solutions Section */}
        <section id="hardware" className="w-full bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Hardware Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Professional-grade hardware designed to work seamlessly with Limm software
              </p>
            </div>
            <div className="space-y-20">
              {hardwareProducts.map((product, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-12 bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex-1">
                    <div className="inline-block bg-[#001738] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      HARDWARE
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="group bg-[#001738] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#002855] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                        {product.buttonText}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                      <button className="bg-white text-[#001738] px-8 py-4 rounded-xl font-medium border-2 border-gray-200 hover:border-[#001738] transition-all duration-300">
                        View Specs
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-80 h-80 group">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={320}
                          height={320}
                          className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
