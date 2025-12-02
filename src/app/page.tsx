"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dhi-hero-sc.webp"
            alt="Dream Home Investments Hero"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container px-4">
          <div className="glass-card max-w-3xl mx-auto text-center">
            {/* Company Name */}
            <p className="text-sm md:text-base uppercase tracking-wider text-white/90 mb-4">
              DREAM HOME INVESTMENTS
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
              Build Your Real<br />Estate Portfolio
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
              From fix and-flips to rental properties, unlock wealth through smart investments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#portfolio" className="btn-hero-primary">
                View Investment Opportunities
              </a>
              <a href="#contact" className="btn-hero-secondary">
                Schedule a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Dream Home Investments</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Experience Card */}
            <div className="glass-card">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Years of Experience</h3>
              <p className="text-gray-300">
                With over a decade of experience in real estate investment, we
                have helped hundreds of clients build wealth through strategic
                property investments and portfolio management.
              </p>
            </div>

            {/* Process Card */}
            <div className="glass-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Proven Methodology</h3>
              <p className="text-gray-300">
                Our systematic approach combines market analysis, due diligence,
                and strategic planning to identify the best investment
                opportunities and maximize returns.
              </p>
            </div>

            {/* Services Card */}
            <div className="glass-card">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-2xl font-bold mb-4">
                Comprehensive Services
              </h3>
              <p className="text-gray-300">
                From property acquisition and renovation to management and
                exit strategies, we provide end-to-end investment services
                tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After / Portfolio Section */}
      <section id="portfolio" className="section bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="gradient-text">Portfolio</span>
          </h2>

          {/* Main Before/After Display */}
          <div className="glass-card mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Before</h3>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                    alt="Property Before"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">After</h3>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                    alt="Property After"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Residential Investment",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
              },
              {
                name: "Commercial Properties",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
              },
              {
                name: "Fix & Flip Projects",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
              },
              {
                name: "Rental Properties",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
              },
              {
                name: "Multi-Family Units",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
              },
              {
                name: "Land Development",
                image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
              },
            ].map((item, index) => {
              const routeMap: { [key: string]: string } = {
                "Residential Investment": "/portfolio/residential-investment",
                "Commercial Properties": "/portfolio/commercial-properties",
                "Fix & Flip Projects": "/portfolio/fix-flip-projects",
                "Rental Properties": "/portfolio/rental-properties",
                "Multi-Family Units": "/portfolio/multi-family-units",
                "Land Development": "/portfolio/land-development",
              };

              return (
                <Link
                  key={index}
                  href={routeMap[item.name] || "#"}
                  className="glass-card group cursor-pointer overflow-hidden block"
                >
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Trusted by investors across the region
          </p>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Dream Home Investments transformed my approach to real estate.
                Their expertise helped me build a profitable portfolio in just
                two years. Highly recommended!&rdquo;
              </p>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-sm text-gray-400">Property Investor</p>
            </div>

            <div className="glass-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;The team at Dream Home Investments made the entire investment
                process seamless. Their attention to detail and market knowledge
                is unmatched.&rdquo;
              </p>
              <p className="font-bold">Michael Chen</p>
              <p className="text-sm text-gray-400">Real Estate Developer</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass-panel text-center">
              <div className="text-3xl font-bold mb-2 gradient-text">
                Licensed
              </div>
              <p className="text-sm text-gray-400">
                Fully Licensed & Insured
              </p>
            </div>
            <div className="glass-panel text-center">
              <div className="text-3xl font-bold mb-2 gradient-text">10+</div>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="glass-panel text-center">
              <div className="text-3xl font-bold mb-2 gradient-text">500+</div>
              <p className="text-sm text-gray-400">Properties Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="section bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Comprehensive real estate investment solutions
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-4">
                Property Acquisition
              </h3>
              <p className="text-gray-300">
                Expert guidance in identifying and acquiring profitable
                investment properties that align with your financial goals.
              </p>
            </div>

            {/* Service 2 */}
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold mb-4">Fix & Flip</h3>
              <p className="text-gray-300">
                Complete renovation and resale services to maximize your
                property value and investment returns.
              </p>
            </div>

            {/* Service 3 */}
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Portfolio Management</h3>
              <p className="text-gray-300">
                Strategic management of your investment portfolio to optimize
                performance and growth.
              </p>
            </div>

            {/* Service 4 */}
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Rental Management</h3>
              <p className="text-gray-300">
                Comprehensive property management services including tenant
                relations, maintenance, and rent collection.
              </p>
            </div>

            {/* Service 5 */}
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">
                Investment Consulting
              </h3>
              <p className="text-gray-300">
                Personalized investment strategies and market analysis to help
                you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Investment <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Tools and insights to help you make informed investment decisions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Resource 1 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Investment Guides</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive guides covering everything from getting started in
                real estate investing to advanced portfolio strategies.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Resource 2 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Market Analysis</h3>
              <p className="text-gray-300 mb-4">
                Stay informed with our latest market trends, property valuations,
                and investment opportunity reports.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                View Reports
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Resource 3 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Investment Calculator</h3>
              <p className="text-gray-300 mb-4">
                Use our ROI calculator to analyze potential returns and make
                data-driven investment decisions.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                Calculate ROI
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Resource 4 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Educational Webinars</h3>
              <p className="text-gray-300 mb-4">
                Join our monthly webinars featuring industry experts and learn
                about the latest investment strategies.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                Register Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Resource 5 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">Legal Resources</h3>
              <p className="text-gray-300 mb-4">
                Access templates, checklists, and legal guides to navigate
                property transactions with confidence.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                Browse Resources
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Resource 6 */}
            <div className="glass-card">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Investor Network</h3>
              <p className="text-gray-300 mb-4">
                Connect with other investors, share experiences, and access
                exclusive investment opportunities.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-2"
              >
                Join Network
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="acquisition" className="bg-gray-900">Property Acquisition</option>
                    <option value="fix-flip" className="bg-gray-900">Fix & Flip</option>
                    <option value="management" className="bg-gray-900">Portfolio Management</option>
                    <option value="rental" className="bg-gray-900">Rental Management</option>
                    <option value="consulting" className="bg-gray-900">Investment Consulting</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    placeholder="Tell us about your investment goals..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-card">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">
                        508 North 2nd Street
                        <br />
                        Honey Grove, Texas 75446
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:concierge@dreamhomecollections.com"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        concierge@dreamhomecollections.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+14698378891"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        +1 469-837-8891
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container px-4">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dream Home Investments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

