import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    slug: "getting-started-rental-property-investing",
    title: "Getting Started with Rental Property Investing: A Beginner&apos;s Guide",
    excerpt: "Learn the fundamentals of rental property investing, from understanding cash flow to evaluating potential properties. This comprehensive guide covers everything you need to know to make your first investment.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    date: "November 28, 2025",
    readTime: "8 min read",
    category: "Beginner",
  },
  {
    id: 2,
    slug: "maximizing-roi-rental-properties",
    title: "5 Strategies to Maximize ROI on Your Rental Properties",
    excerpt: "Discover proven strategies to increase your rental property returns. From rent optimization to cost-effective improvements, learn how successful investors maximize their investment performance.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    date: "November 25, 2025",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    id: 3,
    slug: "finding-right-rental-market",
    title: "How to Find the Right Rental Market for Your Investment",
    excerpt: "Location is everything in real estate. Learn how to analyze markets, identify growth areas, and find locations that offer the best potential for rental income and property appreciation.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    date: "November 20, 2025",
    readTime: "7 min read",
    category: "Market Analysis",
  },
  {
    id: 4,
    slug: "passive-income-rental-investing",
    title: "Building Passive Income Through Rental Property Investing",
    excerpt: "Transform your financial future with passive rental income. This guide explores how to build a portfolio that generates consistent monthly cash flow while building long-term wealth.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    date: "November 15, 2025",
    readTime: "5 min read",
    category: "Wealth Building",
  },
  {
    id: 5,
    slug: "avoiding-common-rental-investing-mistakes",
    title: "Top 10 Mistakes New Rental Property Investors Make (And How to Avoid Them)",
    excerpt: "Learn from the mistakes of others. We break down the most common pitfalls that trip up new rental property investors and provide actionable advice to help you succeed from day one.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    date: "November 10, 2025",
    readTime: "9 min read",
    category: "Tips & Advice",
  },
];

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
            Stay informed with the latest insights, tips, and strategies for real estate investing. Our expert articles help you make smarter investment decisions.
          </p>

          {/* Featured Blog */}
          <div className="max-w-6xl mx-auto mb-12">
            <Link href={`/resources/blogs/${blogs[0].slug}`} className="block">
              <div className="glass-card group cursor-pointer overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video md:aspect-auto md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={blogs[0].image}
                      alt={blogs[0].title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-green-400 text-sm font-semibold mb-2">{blogs[0].category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                      {blogs[0].title.replace(/&apos;/g, "'")}
                    </h2>
                    <p className="text-gray-300 mb-4">{blogs[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{blogs[0].date}</span>
                      <span>•</span>
                      <span>{blogs[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {blogs.slice(1).map((blog) => (
                <Link key={blog.id} href={`/resources/blogs/${blog.slug}`} className="block">
                  <div className="glass-card group cursor-pointer overflow-hidden h-full">
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{blog.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-green-400 transition-colors">
                      {blog.title.replace(/&apos;/g, "'")}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
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
