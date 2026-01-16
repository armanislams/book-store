import Image from "next/image";

export default function RecentEventBlogs() {
  const blogs = [
    {
      title: "Highlights from the 2026 Book Fair",
      date: "Jan 14, 2026",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      excerpt:
        "The 2026 Book Fair brought together authors, publishers, and readers for an unforgettable literary experience.",
    },
    {
      title: "Meet the Author: Fiction Writers Meetup",
      date: "Jan 06, 2026",
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
      excerpt:
        "An inspiring session where bestselling authors shared insights into storytelling and publishing.",
    },
    {
      title: "Community Reading Night Recap",
      date: "Dec 29, 2025",
      image: "https://images.unsplash.com/photo-1524578271613-b89f8e2b43a8",
      excerpt:
        "Readers gathered for an engaging discussion on classic literature and modern interpretations.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Event Stories & Recaps</h2>
          <p className="text-gray-500 mt-2">
            Read highlights and moments from our recent events
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-lg transition"
            >
              {/* Image */}
              <figure className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </figure>

              {/* Content */}
              <div className="card-body">
                <p className="text-sm text-primary">{blog.date}</p>

                <h3 className="card-title">{blog.title}</h3>

                <p className="text-sm text-gray-600">{blog.excerpt}</p>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-outline">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
