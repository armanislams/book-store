const BookDetailsSkeleton = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-pulse">
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT — IMAGE SKELETON */}
        <div className="flex justify-center">
          <div className="bg-base-200 rounded-xl p-6 w-full max-w-[300px]">
            <div className="skeleton aspect-[2/3] w-full bg-gray-400 rounded-lg"></div>
          </div>
        </div>

        {/* RIGHT — DETAILS SKELETON */}
        <div className="flex flex-col gap-4">
          {/* Badge */}
          <div className="skeleton h-6 w-24 bg-gray-400 rounded-full"></div>

          {/* Title */}
          <div className="skeleton h-12 w-3/4 bg-gray-400"></div>

          {/* Author */}
          <div className="skeleton h-6 w-1/2 bg-gray-400"></div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="skeleton h-5 w-5 bg-gray-400 rounded-full"></div>
            <div className="skeleton h-5 w-12 bg-gray-400"></div>
          </div>

          {/* Description (Multi-line) */}
          <div className="space-y-2 mt-4">
            <div className="skeleton h-4 w-full bg-gray-400"></div>
            <div className="skeleton h-4 w-full bg-gray-400"></div>
            <div className="skeleton h-4 w-2/3 bg-gray-400"></div>
          </div>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 gap-6 mt-6 border-y border-gray-400 py-6">
            <div className="skeleton h-4 w-3/4 bg-gray-400"></div>
            <div className="skeleton h-4 w-3/4 bg-gray-400"></div>
            <div className="skeleton h-4 w-3/4 bg-gray-400"></div>
            <div className="skeleton h-4 w-3/4 bg-gray-400"></div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <div className="skeleton h-12 w-36 bg-gray-400 rounded-lg"></div>
            <div className="skeleton h-12 w-36 bg-gray-400 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsSkeleton;
