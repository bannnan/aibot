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
    <section className="text-center py-20">
      {/* Tagline */}
      <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
        The first AI-powered cloud automation platform
      </p>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
        Automate your cloud in seconds with natural language
      </h1>

      {/* Chat Box */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto border rounded-lg shadow-md p-6 flex items-center gap-3 bg-white"
      >
        <input
          type="text"
          placeholder="Describe what you want to automate..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 outline-none text-gray-700 text-lg py-3"
        />
        <button
          type="submit"
          className="btn btn-primary btn-lg"
        >
          Try it now →
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
            className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </section>
  );
}