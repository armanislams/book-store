// components/NewsletterSection.jsx
export default function NewsletterSection() {
  return (
    <section className="py-16 bg-indigo-600 text-white my-5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Join Our Reading Community</h2>
        <p className="text-indigo-100 mb-8">
          Get updates on new arrivals, exclusive deals, and reading tips.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md text-gray-900 bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black rounded-md font-medium hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
