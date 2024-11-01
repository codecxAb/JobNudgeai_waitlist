import React, { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import toast, { Toaster } from "react-hot-toast";

// Regex to allow only emails from gmail.com, icloud.com, and yahoo.com
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|yahoo\.com)$/;

// List of common disposable email domains
const disposableDomains = [
  "mailinator.com",
  "10minutemail.com",
  "tempmail.com",
  "guerrillamail.com",
  // Add more domains as needed
];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isDisposableEmail = (email: string) => {
    const domain = email.split("@")[1];
    return disposableDomains.includes(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Email format validation
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Disposable email domain check
    if (isDisposableEmail(email)) {
      toast.error("Disposable email addresses are not allowed.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already on the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }

      setSubmitted(true);
      setEmail("");
      toast.success("Successfully joined the waitlist!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="sm:flex justify-center">
        <div className="min-w-0 flex-1">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={isLoading}
            className="block w-full px-4 py-3 rounded-lg text-base text-white placeholder-gray-400 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={isLoading}
            className="block w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining...
              </span>
            ) : (
              "Join Waitlist"
            )}
          </button>
        </div>
      </form>
      {submitted && (
        <div className="mt-3 text-sm text-cyan-400 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span>You're on the list! We'll notify you when we launch.</span>
        </div>
      )}
    </div>
  );
}
