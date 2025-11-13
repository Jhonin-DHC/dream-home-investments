import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Dream Home Investments Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
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
                    src="/images/before-after/before-1.jpg"
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
                    src="/images/before-after/after-1.jpg"
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
              "Residential Investment",
              "Commercial Properties",
              "Fix & Flip Projects",
              "Rental Properties",
              "Multi-Family Units",
              "Land Development",
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card group cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/portfolio/portfolio-${index + 1}.jpg`}
                    alt={service}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">{service}</h3>
              </div>
            ))}
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
                "Dream Home Investments transformed my approach to real estate.
                Their expertise helped me build a profitable portfolio in just
                two years. Highly recommended!"
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
                "The team at Dream Home Investments made the entire investment
                process seamless. Their attention to detail and market knowledge
                is unmatched."
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="acquisition">Property Acquisition</option>
                    <option value="fix-flip">Fix & Flip</option>
                    <option value="management">Portfolio Management</option>
                    <option value="rental">Rental Management</option>
                    <option value="consulting">Investment Consulting</option>
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
                    <div className="text-2xl">📞</div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@dreamhomeinvestments.com"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        info@dreamhomeinvestments.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">
                        123 Investment Avenue
                        <br />
                        Suite 100
                        <br />
                        Your City, ST 12345
                      </p>
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

