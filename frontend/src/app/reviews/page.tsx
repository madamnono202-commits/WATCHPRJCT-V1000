import Link from "next/link";
import { getAllReviews } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import EmailSignup from "@/components/content/EmailSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Reviews — Expert Gift-Worthy Watch Reviews",
  description:
    "In-depth watch reviews with Gift-Worthiness Scores, pros & cons, and buying advice. Every watch hand-tested and rated for gift-giving.",
};

export default function ReviewsIndexPage() {
  const reviews = getAllReviews();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-20 md:py-28 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[300px] h-[300px] bg-navy-light/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumb items={[{ label: "Reviews" }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="editorial-label">Honest Reviews</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-5 tracking-[-0.02em]">
              Watch Reviews
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-[1.8]">
              Every watch on WristNerd is honestly rated and scored for
              gift-worthiness. No paid placements, no fluff.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {reviews.map((review) => (
            <Link
              key={review.slug}
              href={`/reviews/${review.slug}`}
              className="group luxury-card overflow-hidden"
            >
              <div className="aspect-[4/3] img-placeholder">
                <span className="text-gray-300 text-sm relative z-10">Watch Image</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-heading font-medium text-navy group-hover:text-gold transition-colors duration-300 mb-2.5 tracking-[-0.01em]">
                  {review.frontmatter.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 leading-[1.7]">
                  {review.frontmatter.meta_description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/gift-finder"
            className="inline-flex items-center gap-2.5 px-10 py-4 cta-shine text-white font-semibold rounded-full text-base min-h-[56px] hover:shadow-xl transition-all duration-300 tracking-wide"
          >
            Not sure? Take the Gift Finder Quiz
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-20">
          <EmailSignup />
        </div>
      </div>
    </>
  );
}
