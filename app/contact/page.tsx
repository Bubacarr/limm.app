'use client';

import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-linear-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-linear-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col w-full relative z-10">

        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section className="w-full max-w-6xl mx-auto py-20 px-4 text-center">
            <div className="inline-block bg-blue-100 text-[#001738] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              We&apos;re Here to Help
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    placeholder="+221 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#001738] text-white py-4 rounded-xl font-semibold hover:bg-[#002855] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="w-full max-w-6xl mx-auto py-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                <p className="text-gray-600">support@limm.app</p>
                <p className="text-gray-600">sales@limm.app</p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                <p className="text-gray-600">+221 XX XXX XXXX</p>
                <p className="text-gray-600 text-sm">Mon-Fri 9am-6pm</p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-black mb-2">Visit Us</h3>
                <p className="text-gray-600">Dakar, Senegal</p>
                <p className="text-gray-600 text-sm">West Africa</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full bg-linear-to-br from-blue-50 to-indigo-50 py-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly do you respond to inquiries?",
                    answer: "We typically respond within 24 hours during business days."
                  },
                  {
                    question: "Do you offer phone support?",
                    answer: "Yes, phone support is available for Premium and Enterprise customers."
                  },
                  {
                    question: "Can I schedule a demo?",
                    answer: "Absolutely! Contact us and we'll arrange a personalized demo for your business."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-black mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
