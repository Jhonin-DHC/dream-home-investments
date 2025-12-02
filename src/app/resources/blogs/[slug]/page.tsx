import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const blogs: { [key: string]: {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}} = {
  "getting-started-rental-property-investing": {
    id: 1,
    slug: "getting-started-rental-property-investing",
    title: "Getting Started with Rental Property Investing: A Beginner's Guide",
    excerpt: "Learn the fundamentals of rental property investing, from understanding cash flow to evaluating potential properties.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    date: "November 28, 2025",
    readTime: "8 min read",
    category: "Beginner",
    content: [
      "Rental property investing is one of the most reliable ways to build long-term wealth. Unlike stocks or bonds, real estate provides tangible assets that generate consistent monthly income while appreciating in value over time.",
      "Before diving into your first investment, it's essential to understand the fundamentals. Cash flow—the money left over after all expenses—is the lifeblood of rental investing. A property that generates positive cash flow puts money in your pocket every month, regardless of market conditions.",
      "When evaluating potential properties, consider the 1% rule as a starting point: the monthly rent should be at least 1% of the purchase price. For example, a $200,000 property should rent for at least $2,000 per month. While this isn't a hard rule, it's a useful filter for initial property screening.",
      "Location remains the most critical factor in real estate investing. Look for areas with strong job growth, good schools, low crime rates, and access to amenities. These factors drive tenant demand and support long-term appreciation.",
      "Financing your investment property differs from buying a primary residence. Expect to put down 20-25% and pay slightly higher interest rates. However, the leverage real estate provides—using borrowed money to control a larger asset—is one of its greatest advantages.",
      "Building a reliable team is essential for success. You'll need a real estate agent who understands investment properties, a property manager (unless you plan to self-manage), a contractor for repairs, and an accountant familiar with real estate tax benefits.",
      "Start small and learn as you go. Many successful investors began with a single-family home or small multi-family property. As you gain experience and build equity, you can scale your portfolio and take on larger investments.",
      "Remember, rental property investing is a marathon, not a sprint. Focus on acquiring quality properties in good locations, maintain them well, treat your tenants fairly, and let time and compound growth work in your favor."
    ]
  },
  "maximizing-roi-rental-properties": {
    id: 2,
    slug: "maximizing-roi-rental-properties",
    title: "5 Strategies to Maximize ROI on Your Rental Properties",
    excerpt: "Discover proven strategies to increase your rental property returns.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    date: "November 25, 2025",
    readTime: "6 min read",
    category: "Strategy",
    content: [
      "Maximizing return on investment (ROI) is the goal of every rental property investor. While buying at the right price is crucial, there are numerous strategies you can employ to boost returns on properties you already own.",
      "Strategy 1: Optimize Your Rent Pricing. Many landlords leave money on the table by not adjusting rents to market rates. Research comparable properties in your area regularly and implement annual rent increases. Even a modest 3-5% annual increase compounds significantly over time.",
      "Strategy 2: Reduce Vacancy Rates. Every month your property sits empty costs you money. Focus on tenant retention through responsive maintenance, fair treatment, and competitive amenities. When turnover does occur, have a system in place to quickly prepare and market the unit.",
      "Strategy 3: Add Value Through Strategic Improvements. Not all upgrades are created equal. Focus on improvements that justify rent increases: in-unit laundry, updated kitchens and bathrooms, smart home features, and enhanced curb appeal. Calculate the expected rent increase against the improvement cost to ensure positive ROI.",
      "Strategy 4: Minimize Operating Expenses. Review your expenses annually for optimization opportunities. Shop insurance policies every few years, contest property tax assessments if warranted, and consider energy-efficient upgrades that reduce utility costs. Small savings across multiple categories add up quickly.",
      "Strategy 5: Leverage Tax Benefits. Real estate offers significant tax advantages that directly impact your ROI. Depreciation, mortgage interest deductions, and the ability to defer taxes through 1031 exchanges can substantially improve your after-tax returns. Work with a tax professional who specializes in real estate.",
      "Implementing these strategies requires effort and attention to detail, but the cumulative effect on your portfolio's performance can be dramatic. Even improving ROI by 1-2% across multiple properties significantly accelerates wealth building over time."
    ]
  },
  "finding-right-rental-market": {
    id: 3,
    slug: "finding-right-rental-market",
    title: "How to Find the Right Rental Market for Your Investment",
    excerpt: "Location is everything in real estate. Learn how to analyze markets and identify growth areas.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    date: "November 20, 2025",
    readTime: "7 min read",
    category: "Market Analysis",
    content: [
      "The old real estate adage 'location, location, location' holds especially true for rental property investing. The market you choose to invest in can make or break your investment success, regardless of how well you manage individual properties.",
      "Start by analyzing population and job growth trends. Markets with growing populations and diverse, expanding job bases tend to have strong rental demand. Look for cities attracting major employers, especially in growing industries like technology, healthcare, and logistics.",
      "Examine the rent-to-price ratio in potential markets. Some areas have high property values but relatively low rents, making cash flow difficult. Others offer more favorable ratios that support positive cash flow from day one. Generally, secondary and tertiary markets often provide better cash flow than expensive coastal cities.",
      "Consider landlord-friendly regulations. Some states and cities have laws that favor tenants, making evictions difficult and limiting rent increases. Research local regulations before investing, as they significantly impact your ability to operate profitably.",
      "Look at supply and demand dynamics. Markets with limited new construction and high barriers to development often maintain stronger rent growth. Conversely, areas with excessive new apartment construction may face rent pressure as supply outpaces demand.",
      "Don't overlook quality of life factors. Good schools, low crime rates, access to amenities, and overall livability attract quality tenants who pay rent on time and take care of properties. These factors also support long-term appreciation.",
      "Finally, consider your ability to manage from a distance if investing out of state. Some markets offer better returns but require reliable local property management. Factor management costs and the challenges of remote oversight into your analysis.",
      "The ideal market balances cash flow potential, appreciation prospects, landlord-friendly regulations, and manageable investment entry points. Take time to thoroughly research before committing capital to any market."
    ]
  },
  "passive-income-rental-investing": {
    id: 4,
    slug: "passive-income-rental-investing",
    title: "Building Passive Income Through Rental Property Investing",
    excerpt: "Transform your financial future with passive rental income.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    date: "November 15, 2025",
    readTime: "5 min read",
    category: "Wealth Building",
    content: [
      "The dream of passive income—money that flows in without trading hours for dollars—drives many people to rental property investing. While 'passive' may be somewhat of a misnomer (real estate does require some involvement), rental properties can generate substantial ongoing income with relatively limited time investment.",
      "The key to truly passive rental income is building systems and teams that handle day-to-day operations. Professional property management is the cornerstone of passive investing. A good property manager handles tenant screening, rent collection, maintenance coordination, and legal compliance, freeing you to focus on strategy and acquisition.",
      "Start by calculating your passive income goal. How much monthly cash flow do you need to achieve financial freedom? Work backward from this number to determine how many properties you need, accounting for realistic cash flow projections and management expenses.",
      "Build your portfolio strategically over time. Each property should contribute positive cash flow after all expenses, including property management fees. As you accumulate properties, the combined cash flow grows, eventually reaching your target passive income level.",
      "Reinvest early returns to accelerate growth. Rather than spending initial cash flow, use it to save for down payments on additional properties. This compound growth approach can dramatically shorten your timeline to financial independence.",
      "Consider the BRRRR strategy (Buy, Rehab, Rent, Refinance, Repeat) to recycle capital and acquire properties more quickly. By forcing appreciation through renovation and refinancing to pull out equity, you can scale faster than traditional buy-and-hold approaches.",
      "Remember that passive income from rentals isn't just about cash flow. Properties also build equity through mortgage paydown and appreciation, creating wealth that can be accessed later through refinancing or sale. The combination of income and wealth building makes rental investing a powerful path to financial freedom."
    ]
  },
  "avoiding-common-rental-investing-mistakes": {
    id: 5,
    slug: "avoiding-common-rental-investing-mistakes",
    title: "Top 10 Mistakes New Rental Property Investors Make (And How to Avoid Them)",
    excerpt: "Learn from the mistakes of others and set yourself up for success.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
    date: "November 10, 2025",
    readTime: "9 min read",
    category: "Tips & Advice",
    content: [
      "Learning from others' mistakes is one of the fastest ways to accelerate your success in rental property investing. Here are the most common pitfalls that trip up new investors and how to avoid them.",
      "Mistake 1: Underestimating Expenses. New investors often calculate cash flow using only mortgage, taxes, and insurance. They forget about vacancy, maintenance, capital expenditures, property management, and unexpected repairs. Use conservative expense estimates—typically 40-50% of rent for a realistic picture.",
      "Mistake 2: Skipping Due Diligence. Excitement about a deal can lead to rushed decisions. Always get professional inspections, verify rental income claims, research the neighborhood thoroughly, and understand all costs before closing. The money spent on due diligence is insurance against costly surprises.",
      "Mistake 3: Overpaying for Properties. In competitive markets, it's tempting to stretch on price to win deals. But overpaying erodes returns for years. Know your numbers, set firm limits, and be willing to walk away. There will always be more deals.",
      "Mistake 4: Poor Tenant Screening. A bad tenant can cost thousands in unpaid rent, property damage, and eviction expenses. Implement thorough screening including credit checks, income verification, rental history, and background checks. Never skip steps to fill a vacancy quickly.",
      "Mistake 5: Neglecting Legal Compliance. Fair housing laws, security deposit regulations, lease requirements, and eviction procedures vary by location. Ignorance isn't a defense. Learn your local laws or work with professionals who know them.",
      "Mistake 6: DIY Property Management Without Systems. Self-managing can work, but only with proper systems for rent collection, maintenance requests, record-keeping, and tenant communication. Without systems, small portfolios become overwhelming time sinks.",
      "Mistake 7: Ignoring Insurance Needs. Standard homeowner's insurance doesn't cover rental properties. You need landlord policies that cover liability, lost rent, and property damage. Also consider umbrella policies as your portfolio grows.",
      "Mistake 8: Failing to Build Cash Reserves. Properties require ongoing maintenance and occasional major repairs. Without reserves, a broken furnace or roof repair becomes a financial crisis. Maintain at least 3-6 months of expenses per property in reserve.",
      "Mistake 9: Emotional Decision Making. Successful investing requires objectivity. Don't fall in love with properties, take tenant issues personally, or make decisions based on fear or greed. Treat real estate as a business with clear criteria and processes.",
      "Mistake 10: Going It Alone. Real estate investing has a learning curve. Seek out mentors, join investor groups, read extensively, and build relationships with experienced investors. The knowledge and connections you gain will pay dividends throughout your investing career."
    ]
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <article className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link href="/resources/blogs" className="text-green-400 hover:text-green-300 mb-6 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>

            {/* Header */}
            <div className="mb-8">
              <span className="text-green-400 text-sm font-semibold">{blog.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="glass-card">
              <div className="prose prose-lg prose-invert max-w-none">
                {blog.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center glass-card">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
              <p className="text-gray-300 mb-6">
                Contact Dream Home Investments today to explore rental property opportunities.
              </p>
              <Link href="/#contact" className="btn-hero-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

