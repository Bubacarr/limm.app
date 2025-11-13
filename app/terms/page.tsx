'use client';

import Header from "@/components/Header";

export default function Terms() {
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
              Terms and Conditions
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last updated: November 13, 2025
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Please read these Terms and Conditions carefully before using Limm&apos;s services.
            </p>
          </section>

          {/* Content Section */}
          <section className="w-full max-w-4xl mx-auto pb-20 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Limm&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Subject to your compliance with these Terms, Limm grants you a limited, non-exclusive, non-transferable license to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and use the Limm platform for your business purposes</li>
                  <li>Download and use our mobile applications on your devices</li>
                  <li>Access and use any documentation we provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">3. User Accounts</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Maintaining the security of your account and password</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information is accurate and up-to-date</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">4. Acceptable Use</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Infringe on the intellectual property rights of others</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service or servers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you subscribe to a paid plan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>You agree to pay all fees associated with your subscription</li>
                  <li>Payments are processed securely through our payment partners</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The service and its original content, features, and functionality are owned by Limm and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">7. Data Ownership</h2>
                <p className="text-gray-600 leading-relaxed">
                  You retain all rights to the data you input into our system. We claim no intellectual property rights over the material you provide. Your data belongs to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">8. Service Availability</h2>
                <p className="text-gray-600 leading-relaxed">
                  We strive to provide 99.9% uptime, but we do not guarantee that the service will be uninterrupted or error-free. We reserve the right to modify or discontinue the service with reasonable notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, Limm shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">10. Termination</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may terminate or suspend your account and access to the service:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>For violation of these Terms</li>
                  <li>For non-payment of fees</li>
                  <li>At our discretion with reasonable notice</li>
                  <li>Upon your request to close your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">11. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Senegal, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700"><strong>Email:</strong> legal@limm.app</p>
                  <p className="text-gray-700"><strong>Address:</strong> Dakar, Senegal</p>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
