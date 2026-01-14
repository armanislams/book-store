import { getBookDetails } from "@/actions/server/books";
import Image from "next/image";

export default async function BookDetailsPage({params}) {
    const {id} = await params
    const book = await getBookDetails(id)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT — IMAGE */}
        <div className="flex justify-center">
          <div className="bg-base-200 rounded-xl p-6">
            <Image
              src={book.image}
              alt={book.bookName}
              width={260}
              height={380}
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div>
          <span className="badge badge-primary mb-3">{book.category}</span>

          <h1 className="text-4xl font-bold mb-2">{book.bookName}</h1>

          <p className="text-lg text-gray-600 mb-4">by {book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-medium">{book.rating}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{book.review}</p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p>
              <strong>Pages:</strong> {book.totalPages}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>Published:</strong> {book.yearOfPublishing}
            </p>
            <p>
              <strong>Tags:</strong> {book.tags.join(", ")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline">Wishlist</button>
          </div>
        </div>
      </div>
    </section>
  );
}
