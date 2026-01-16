export default function loading() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header skeleton */}
        <div className="text-center mb-10">
          <div className="skeleton h-8 w-64 mx-auto mb-3"></div>
          <div className="skeleton h-4 w-96 mx-auto"></div>
        </div>

        {/* Blog cards skeleton */}
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="card bg-base-200 shadow-md">
              {/* Image */}
              <div className="skeleton h-48 w-full rounded-t-xl"></div>

              {/* Content */}
              <div className="card-body space-y-3">
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>

                <div className="flex justify-end mt-4">
                  <div className="skeleton h-8 w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
