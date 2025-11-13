'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
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
          <section className="w-full max-w-4xl mx-auto py-20 px-4">
            <div className="inline-block bg-blue-100 text-[#001738] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last updated: November 13, 2025
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Limm, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          {/* Content Section */}
          <section className="w-full max-w-4xl mx-auto pb-20 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Account information (name, email address, phone number)</li>
                  <li>Business information (business name, address, tax ID)</li>
                  <li>Transaction data (sales, purchases, inventory movements)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Device and usage information (IP address, browser type, operating system)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect the rights and safety of Limm and our users</li>
                  <li>In connection with a merger, sale, or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">5. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and data at any time by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict certain processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">8. Children&apos;s Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for children under 18. We do not knowingly collect personal information from children under 18.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">10. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@limm.app</p>
                  <p className="text-gray-700"><strong>Address:</strong> Dakar, Senegal</p>
                </div>
              </div>

            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
