import Header from "@/components/Header";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Terms of <span className="gradient-text">Service</span>
            </h1>

            <div className="glass-card space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Dream Home Investments' services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Dream Home Investments provides real estate investment consulting, property acquisition services, portfolio management, and related investment advisory services. All services are subject to availability and applicable laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Investment Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  All investments carry risk. Past performance does not guarantee future results. Dream Home Investments does not guarantee any specific investment returns. You should consult with qualified financial advisors before making investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Dream Home Investments shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or information provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at info@dreamhomeinvestments.com
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/" className="btn-hero-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

