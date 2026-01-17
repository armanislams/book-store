import { getBooks } from '@/actions/server/books'
import React from 'react'
import BookCard from '../BookCard/BookCard';

export default async function Featured() {
    const books = await getBooks()
    const filteredBooks = books.filter((books) => books.isFeatured);
    
  return (
      <div className='my-5 bg-gray-100 px-5'>
          <h2 className='text-5xl font-bold text-center mt-5'>Featured Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
        {filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            book={{ ...book, _id: book._id.toString() }}
          />
        ))}
      </div>
    </div>
  );
}
