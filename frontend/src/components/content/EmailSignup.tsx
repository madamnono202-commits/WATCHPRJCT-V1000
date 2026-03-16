"use client";

import { useState } from "react";

interface EmailSignupProps {
  variant?: "inline" | "card";
  heading?: string;
  description?: string;
  source?: string;
}

export default function EmailSignup({
  variant = "card",
  heading = "Get Gift Alerts & Price Drops",
  description = "Join 5,000+ smart gift-givers. We'll send seasonal picks, price drop alerts, and exclusive deals — never spam.",
  source = "website",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        {submitted ? (
          <p className="text-green-600 font-medium text-sm py-2">
            You&apos;re in! Check your inbox for a welcome email.
          </p>
        ) : (
          <>
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 overflow-hidden"
              aria-hidden="true"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-hover transition-colors text-sm whitespace-nowrap disabled:opacity-60"
            >
              {loading ? "..." : "Subscribe"}
            </button>
            {error && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </>
        )}
      </form>
    );
  }

  return (
    <div className="relative overflow-hidden bg-navy-dark rounded-2xl p-8 md:p-12 my-10 grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[200px] h-[200px] bg-navy-light/10 rounded-full blur-[80px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="editorial-label">Newsletter</span>
        </div>
        <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-3 tracking-[-0.01em]">
          {heading}
        </h3>
        <p className="text-sm text-gray-400 mb-7 max-w-lg leading-[1.7]">{description}</p>
        {submitted ? (
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            You&apos;re in! Check your inbox for a welcome email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 overflow-hidden"
              aria-hidden="true"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all min-h-[48px]"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-7 py-3.5 cta-shine text-white font-semibold rounded-full text-sm whitespace-nowrap disabled:opacity-60 min-h-[48px]"
            >
              {loading ? "Subscribing..." : "Send Me Deals"}
            </button>
          </form>
        )}
        {error && (
          <p className="text-red-400 text-xs mt-3">{error}</p>
        )}
        <p className="text-xs text-gray-500 mt-5 tracking-wide">
          Unsubscribe anytime. No spam, ever.
        </p>
      </div>
    </div>
  );
}
