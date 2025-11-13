'use client';

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    accountId: '',
    reason: '',
    additionalInfo: ''
  });

  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Deletion request submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-linear-to-br from-red-200 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-linear-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col w-full relative z-10">
        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section className="w-full max-w-4xl mx-auto py-20 px-4">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚠️ Account Deletion Request
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Request Account Deletion
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We&apos;re sorry to see you go. Please fill out the form below to request the deletion of your Limm account and all associated data.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800 text-sm leading-relaxed">
                <strong>Important:</strong> This action is permanent and cannot be undone. All your data, including transactions, inventory records, and business information will be permanently deleted within 30 days.
              </p>
            </div>
          </section>

          {/* Information Section */}
          <section className="w-full max-w-4xl mx-auto pb-12 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">What will be deleted?</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">Your account profile and login credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">All business data (sales, purchases, expenses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">Inventory records and item movements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">Customer and supplier information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">Reports and analytics data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-600">Payment history and subscription information</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="font-semibold text-black mb-2">Before you proceed:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Export any data you want to keep</li>
                  <li>✓ Cancel any active subscriptions</li>
                  <li>✓ Settle any outstanding payments</li>
                  <li>✓ Remove connected devices and integrations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deletion Request Form */}
          <section className="w-full max-w-4xl mx-auto pb-20 px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-black mb-6">Deletion Request Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="+221 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Account ID / Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountId"
                      value={formData.accountId}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Account ID or Business Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Reason for Deletion <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a reason</option>
                    <option value="no-longer-needed">No longer need the service</option>
                    <option value="switching-service">Switching to another service</option>
                    <option value="privacy-concerns">Privacy concerns</option>
                    <option value="too-expensive">Too expensive</option>
                    <option value="technical-issues">Technical issues</option>
                    <option value="business-closed">Business closed</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please provide any additional details about your deletion request..."
                  ></textarea>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-700">
                      <span className="font-semibold">I understand and agree that:</span>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>• This action is permanent and cannot be undone</li>
                        <li>• All my data will be permanently deleted within 30 days</li>
                        <li>• I will lose access to my account immediately after confirmation</li>
                        <li>• Any active subscriptions will be cancelled</li>
                        <li>• I have exported any data I want to keep</li>
                      </ul>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={!agreed}
                    className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      agreed
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit Deletion Request
                  </button>
                  <Link
                    href="/"
                    className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-center hover:bg-gray-300 transition-all duration-300"
                  >
                    Cancel
                  </Link>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Need help? Contact us at{' '}
                  <a href="mailto:support@limm.app" className="text-[#0066CC] hover:underline font-semibold">
                    support@limm.app
                  </a>
                  {' '}or call{' '}
                  <span className="font-semibold">+221 XX XXX XXXX</span>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full bg-linear-to-br from-gray-50 to-gray-100 py-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does the deletion process take?",
                    answer: "Once your request is approved, your account will be deactivated immediately. Complete data deletion will occur within 30 days as required by data protection regulations."
                  },
                  {
                    question: "Can I recover my account after deletion?",
                    answer: "No, account deletion is permanent. Once the process is complete, all your data will be permanently removed from our systems and cannot be recovered."
                  },
                  {
                    question: "What happens to my subscription?",
                    answer: "Your subscription will be cancelled immediately. You will not be charged for any future billing cycles. Any remaining balance will be handled according to our refund policy."
                  },
                  {
                    question: "Will I receive confirmation?",
                    answer: "Yes, you will receive an email confirmation when your deletion request is received and another when the deletion is complete."
                  },
                  {
                    question: "Can I export my data before deletion?",
                    answer: "Yes, we recommend exporting all your data before submitting a deletion request. You can export your data from your account settings or contact support for assistance."
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
