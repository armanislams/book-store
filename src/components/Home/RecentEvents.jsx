import Link from "next/link";

export default function RecentEvents() {
  const events = [
    {
      id: 1,
      title: "Book Launch: Modern JavaScript",
      date: "Jan 12, 2026",
      location: "Online",
      description: "Join the launch event and live Q&A with the author.",
    },
    {
      id: 2,
      title: "Author Meetup: Fiction Writers",
      date: "Jan 05, 2026",
      location: "Kuala Lumpur",
      description: "Meet bestselling fiction authors and get signed copies.",
    },
    {
      id: 3,
      title: "Reading Session: Classic Literature",
      date: "Dec 28, 2025",
      location: "Penang",
      description: "A community reading and discussion on classic novels.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Recent Events</h2>
          <p className="text-gray-500 mt-2">
            Highlights from our latest book events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title">{event.title}</h3>

                <p className="text-sm text-gray-500">
                  {event.date} • {event.location}
                </p>

                <p className="mt-2 text-sm">{event.description}</p>

                {/* <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-primary">
                    View Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="card-actions justify-center mt-4">
          <Link href={'/blog'} className="btn btn-primary">Check out Our Blog</Link>
        </div>
      </div>
    </section>
  );
}
