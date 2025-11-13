import Header from "@/components/Header";
import Link from "next/link";

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Investment <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Watch educational videos, property tours, and expert interviews to enhance your investment knowledge
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card mb-8">
              <p className="text-gray-300 text-center">
                Video content coming soon. We'll be sharing property walkthroughs, investment tutorials, market analysis, and interviews with industry experts.
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

