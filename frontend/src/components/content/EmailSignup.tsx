"use client";

import { useState } from "react";

interface EmailSignupProps {
  variant?: "inline" | "card";
  heading?: string;
  description?: string;
}

export default function EmailSignup({
  variant = "card",
  heading = "Get Gift Alerts & Price Drops",
  description = "Join 5,000+ smart gift-givers. We'll send seasonal picks, price drop alerts, and exclusive deals — never spam.",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-hover transition-colors text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </>
        )}
      </form>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 my-8">
      <h3 className="text-xl font-heading font-semibold text-navy mb-2">
        {heading}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {submitted ? (
        <p className="text-green-600 font-medium">
          You&apos;re in! Check your inbox for a welcome email.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-hover transition-colors text-sm whitespace-nowrap"
          >
            Send Me Deals
          </button>
        </form>
      )}
      <p className="text-xs text-gray-400 mt-3">
        Unsubscribe anytime. No spam, ever.
      </p>
    </div>
  );
}
