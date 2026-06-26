"use client";

import { useState } from "react";
import { contactTopics } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-accent-light/50 p-8 text-center">
        <p className="section-kanji text-3xl text-accent">ありがとう</p>
        <p className="mt-4 font-serif text-xl text-foreground">Message received (demo)</p>
        <p className="mt-2 text-sm text-muted">
          This form is for demonstration only. No data is sent anywhere. In a real
          deployment, you would connect it to email or a form service.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Name (sample)</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Guest Sample"
            className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground">Email (sample)</span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Topic</span>
        <select
          name="topic"
          className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        >
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your demo reservation or feedback..."
          className="mt-2 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </label>

      <p className="text-xs text-muted">
        Demo form only — submitting does not send email or store data.
      </p>

      <button
        type="submit"
        className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
      >
        Send Demo Message
      </button>
    </form>
  );
}
