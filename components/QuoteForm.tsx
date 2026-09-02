"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteContent } from "@/content/site";

export default function QuoteForm() {
  const { quoteForm } = siteContent;
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: serviceParam,
    bedrooms: "",
    bathrooms: "",
    frequency: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(
        `https://formspree.io/f/${quoteForm.formspreeId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          service: "",
          bedrooms: "",
          bathrooms: "",
          frequency: "",
          notes: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-12 w-12 text-brand-pink"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="mt-4 text-lg font-semibold text-brand-ink">
          {quoteForm.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-ink">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-ink">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-ink">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Address / Town */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-brand-ink">
            Address or Town *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-ink">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          >
            <option value="">Select a service</option>
            {quoteForm.serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Frequency */}
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-brand-ink">
            Preferred Frequency
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          >
            <option value="">Select frequency</option>
            {quoteForm.frequencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-brand-ink">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            min="0"
            max="20"
            value={formData.bedrooms}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Bathrooms */}
        <div>
          <label htmlFor="bathrooms" className="block text-sm font-medium text-brand-ink">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            min="0"
            max="20"
            value={formData.bathrooms}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none"
          />
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-brand-ink">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-ink focus:border-brand-pink-deep focus:ring-1 focus:ring-brand-pink-deep focus:outline-none resize-y"
            placeholder="Any additional details? (pets, access instructions, specific areas of concern, etc.)"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{quoteForm.errorMessage}</p>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block rounded-lg bg-brand-pink-deep px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : quoteForm.submitLabel}
        </button>
      </div>
    </form>
  );
}
