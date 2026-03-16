"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-dark to-navy-950 text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.02] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/10 blur-[100px]" />

      {/* Gold Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex items-baseline gap-0.5">
              <span className="text-[1.75rem] font-medium font-heading text-white tracking-[-0.02em]">
                Wrist
              </span>
              <span className="text-[1.75rem] font-medium font-heading gradient-text tracking-[-0.02em]">
                Nerd
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold ml-0.5 mb-1" />
            </Link>
            <p className="mt-5 text-sm text-gray-400 leading-[1.8] max-w-xs">
              Expert watch gift guides, honest reviews, and a proprietary
              Gift-Worthiness Score to help you find the perfect watch for him.
            </p>
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
          </div>

          {/* Gift Guides */}
          <div>
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Gift Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/occasion/fathers-day" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Father&apos;s Day Watches
                </Link>
              </li>
              <li>
                <Link href="/occasion/christmas" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Christmas Gift Watches
                </Link>
              </li>
              <li>
                <Link href="/occasion/birthday" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Birthday Watches
                </Link>
              </li>
              <li>
                <Link href="/budget/under-200" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Best Watches Under $200
                </Link>
              </li>
              <li>
                <Link href="/budget/under-500" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Best Watches Under $500
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/reviews" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Watch Reviews
                </Link>
              </li>
              <li>
                <Link href="/gift-finder" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Gift Finder Quiz
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Current Deals
                </Link>
              </li>
              <li>
                <Link href="/blog/watch-care-guide" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Watch Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  About WristNerd
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-gray-300 hover:text-gold transition-colors duration-200">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Email Signup */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="max-w-xl">
            <p className="editorial-label mb-3">Stay Informed</p>
            <h3 className="text-2xl font-heading font-medium mb-3 text-white tracking-[-0.02em]">
              Get Gift Alerts & Deals
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Price drops, seasonal picks, and gift guides &mdash; delivered when it matters.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-3.5 cta-shine text-white font-semibold rounded-full text-sm whitespace-nowrap tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.6875rem] text-gray-500 tracking-wide">
            &copy; {new Date().getFullYear()} WristNerd. All rights reserved.
            As an Amazon Associate, WristNerd earns from qualifying purchases.
          </p>
          <div className="flex gap-6">
            <Link href="/affiliate-disclosure" className="text-xs text-gray-500 hover:text-gold transition-colors duration-200">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gold transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="text-xs text-gray-500 hover:text-gold transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
