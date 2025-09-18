import { useState } from "react";
import { useRouter } from "next/router";

export default function HeroSection() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example: if user not logged in, redirect to auth
    const isLoggedIn = false; // replace with your auth check
    if (!isLoggedIn) {
      router.push("/auth/login");
    } else {
      console.log("User prompt:", input);
      // Future: send to AI automation engine
    }
  };

  const handleSuggestion = (text: string) => {
    setInput(text);
  };

  return (
    <section className="text-center py-10 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-primary mb-6 sm:mb-10">
          The first AI-powered cloud automation platform
        </p>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-normal">
          <span className="font-extrabold bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
            Agentic AI
          </span> for Cloud Automation
        </h1>

        {/* Chat Box */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto border border-gray-300 dark:border-gray-600 rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-900"
        >
          <input
            type="text"
            placeholder="Describe what you want to automate..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 outline-none text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 text-sm sm:text-base py-3 sm:py-6 px-3"
          />
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
          >
            Go build →
          </button>
        </form>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Deploy a secure Kubernetes cluster",
            "Set up CI/CD pipeline on AWS",
            "Automate cloud cost optimization",
            "Create a disaster recovery workflow",
          ].map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => handleSuggestion(suggestion)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}