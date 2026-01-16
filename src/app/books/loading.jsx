import BookCardSkeleton from '@/components/Skeletons/BookCardSkeleton'
import React from 'react'

export default function loading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-10'>
      {[...Array(12)].map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  );
}
