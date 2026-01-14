import { getBooks } from '@/actions/server/books'
import BookCard from '@/components/BookCard/BookCard'
import React from 'react'

export default async function AllBooks() {
    const books = await getBooks()
  return (
    <div className="text-center bg-gray-100 my-5">
      <h2 className="text-5xl font-bold my-5">Our Books</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5">
        {books.map((book) => (
          <BookCard
            key={book.bookId}
            book={{ ...book, _id: book._id.toString() }}
          />
        ))}
      </div>
    </div>
  );
}
