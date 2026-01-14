import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  const { bookName, author, image, rating, totalPages, category ,_id} = book;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Book Cover */}
      <div className="relative w-full flex justify-center items-center h-60">
        <Image src={image} alt={bookName} width={100} height={120} className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-1">{bookName}</h3>

        <p className="text-sm text-gray-600">by {author}</p>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded">
            {category}
          </span>

          <span className="flex items-center gap-1">⭐ {rating}</span>
        </div>

        <p className="text-sm text-gray-500">{totalPages} pages</p>

        <Link href={`/books/${_id}`} className="w-full btn mt-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
}
