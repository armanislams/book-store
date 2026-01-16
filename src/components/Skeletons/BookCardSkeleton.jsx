const BookCardSkeleton = () => {
  return (
    <div className="flex flex-col w-72 gap-4 p-4 border border-gray-400 rounded-xl ">
      {/* 1. Book Cover Image Placeholder */}
      <div className="skeleton h-64 w-full bg-gray-300 rounded-lg"></div>

      {/* 2. Title and Author */}
      <div className="flex flex-col gap-2">
        <div className="skeleton h-6 w-3/4 bg-gray-300"></div> {/* Title */}
        <div className="skeleton h-4 w-1/2 bg-gray-300"></div> {/* Author */}
      </div>

      {/* 3. Badge and Rating Row */}
      <div className="flex justify-between items-center">
        <div className="skeleton h-6 w-16 rounded-md bg-gray-300"></div>{" "}
        {/* Category Badge */}
        <div className="flex items-center gap-1">
          <div className="skeleton h-4 w-4 rounded-full bg-gray-300"></div>{" "}
          {/* Star icon */}
          <div className="skeleton h-4 w-8 bg-gray-300"></div>{" "}
          {/* Rating number */}
        </div>
      </div>

      {/* 4. Page Count */}
      <div className="skeleton h-4 w-24 bg-gray-300"></div>

      {/* 5. "View Details" Button Placeholder */}
      <div className="skeleton h-10 w-full rounded-lg bg-gray-300 mt-2"></div>
    </div>
  );
};

export default BookCardSkeleton;
