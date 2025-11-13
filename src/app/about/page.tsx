import Link from "next/link";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 container px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-white mb-4">
            Building Wealth, One Investment at a Time
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card mb-12">
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Building a successful real estate investment portfolio is a significant achievement.</strong> At <strong className="text-white">Dream Home Investments</strong>, we are your <strong className="text-white">real estate investment experts</strong>, committed to helping you navigate the investment market with confidence and ease. We understand how important this financial decision is, and our experienced team is here to guide you every step of the way.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Founded in 2025, <strong className="text-white">Dream Home Investments</strong> began as a family-owned business with a passion for connecting investors with profitable property opportunities. Today, we've grown into one of the leading <strong className="text-white">real estate investment experts</strong>, built on a foundation of trust, integrity, and unmatched market expertise. Our commitment to personalized service has earned us a reputation for excellence, making us a trusted name in real estate investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Us: Real Estate Investment Experts
            </h2>
            <p className="text-lg text-gray-300">
              Our mission is to provide exceptional real estate investment services that exceed our clients' expectations. We strive to create lasting relationships by delivering personalized guidance and achieving optimal results.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Honesty Card */}
            <div className="glass-card text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Honesty</h3>
              <p className="text-gray-300">
                We uphold honesty through clear communication, fair dealings, and integrity in every investment transaction.
              </p>
            </div>

            {/* Transparency Card */}
            <div className="glass-card text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-300">
                We prioritize transparency by providing clear, accurate information and open communication about every investment opportunity.
              </p>
            </div>

            {/* Client Satisfaction Card */}
            <div className="glass-card text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
              <p className="text-gray-300">
                We operate with the highest ethical standards and prioritize building trust in every investment relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center glass-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let us help you build your investment portfolio.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to start your real estate investment journey? Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-hero-primary">
                Contact Us
              </Link>
              <Link href="/#portfolio" className="btn-hero-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

