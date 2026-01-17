"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddBookForm() {
    const {data} = useSession()
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const bookData = {
      bookName: form.bookName.value,
      author: form.author.value,
      image: form.image.value,
      review: form.review.value,
      totalPages: Number(form.totalPages.value),
      rating: Number(form.rating.value),
      category: form.category.value,
      tags: form.tags.value.split(",").map((tag) => tag.trim()),
      publisher: form.publisher.value,
        yearOfPublishing: Number(form.yearOfPublishing.value),
      uploadedBy :data.user.email
    };

      
        await fetch("/api/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookData),
        })


      ////
    form.reset();
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold">Add New Book</h2>

       
        {/* Book Name */}
        <input
          name="bookName"
          type="text"
          placeholder="Book Name"
          className="input input-bordered w-full"
          required
        />

        {/* Author */}
        <input
          name="author"
          type="text"
          placeholder="Author"
          className="input input-bordered w-full"
          required
        />

        {/* Image URL */}
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        {/* Review */}
        <textarea
          name="review"
          placeholder="Book Review"
          className="textarea textarea-bordered w-full"
          rows={4}
          required
        />

        {/* Pages + Rating */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="totalPages"
            type="number"
            placeholder="Total Pages"
            className="input input-bordered w-full"
            required
          />

          <input
            name="rating"
            type="number"
            step="0.1"
            max="5"
            placeholder="Rating (0-5)"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category + Publisher */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="category"
            type="text"
            placeholder="Category (Fantasy, Classic...)"
            className="input input-bordered w-full"
            required
          />

          <input
            name="publisher"
            type="text"
            placeholder="Publisher"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Tags */}
        <input
          name="tags"
          type="text"
          placeholder="Tags (comma separated)"
          className="input input-bordered w-full"
          required
        />

        {/* Year */}
        <input
          name="yearOfPublishing"
          type="number"
          placeholder="Year of Publishing"
          className="input input-bordered w-full"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Adding Book..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}
