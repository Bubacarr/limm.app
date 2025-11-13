'use client';

import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-linear-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-linear-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col w-full relative z-10">
        <Header />

        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section className="w-full max-w-6xl mx-auto py-20 px-4 text-center">
            <div className="inline-block bg-blue-100 text-[#001738] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Limm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Empowering Businesses<br />
              <span className="text-[#0066CC]">Across Africa</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              We&apos;re on a mission to make business management simple, accessible, and powerful for every entrepreneur.
            </p>
          </section>

          {/* Our Story Section */}
          <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Limm was born from a simple observation: small businesses across Africa were struggling with outdated, complicated, and expensive business management tools.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    We set out to change that. Our team of passionate developers, designers, and business experts came together to create a solution that&apos;s powerful yet simple, affordable yet feature-rich.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Today, we&apos;re proud to serve businesses of all sizes, helping them manage their operations, track their finances, and grow with confidence.
                  </p>
                </div>
                <div className="relative h-96 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="w-full max-w-6xl mx-auto py-20 px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Values</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💡",
                  title: "Innovation",
                  description: "We constantly innovate to bring you the best tools and features for your business."
                },
                {
                  icon: "🤝",
                  title: "Trust",
                  description: "Your data security and privacy are our top priorities. We build trust through transparency."
                },
                {
                  icon: "🎯",
                  title: "Simplicity",
                  description: "Complex problems deserve simple solutions. We make business management effortless."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-black mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="w-full bg-linear-to-br from-[#001738] to-[#002855] py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-12">
                A diverse team of experts dedicated to your success
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((member) => (
                  <div key={member} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-white font-bold text-lg mb-1">Team Member</h3>
                    <p className="text-blue-200 text-sm">Position</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full max-w-6xl mx-auto py-20 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of businesses already using Limm to manage their operations
            </p>
            <button className="bg-[#001738] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#002855] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Free Trial
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
