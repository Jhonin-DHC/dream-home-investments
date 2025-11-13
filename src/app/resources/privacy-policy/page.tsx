import Header from "@/components/Header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Privacy <span className="gradient-text">Policy</span>
            </h1>

            <div className="glass-card space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-2">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Investment preferences and financial information</li>
                  <li>Property interests and search criteria</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you about investment opportunities, process transactions, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our business, conducting our services, or serving our clients, provided they agree to keep your information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-2">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at info@dreamhomeinvestments.com
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

