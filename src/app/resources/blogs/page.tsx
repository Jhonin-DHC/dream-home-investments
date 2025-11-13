import Header from "@/components/Header";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Investment <span className="gradient-text">Blogs</span>
          </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Stay informed with the latest insights, tips, and strategies for real estate investing
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card mb-8">
              <p className="text-gray-300 text-center">
                Blog content coming soon. Check back regularly for expert insights on real estate investment strategies, market trends, and portfolio management tips.
              </p>
            </div>

            <div className="text-center">
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

