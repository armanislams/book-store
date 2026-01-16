export default function EventsTimeline() {
  const events = [
    {
      title: "Book Fair 2026",
      date: "Jan 15, 2026",
      description:
        "A large-scale book fair featuring local and international publishers.",
    },
    {
      title: "Author Talk: Writing for Beginners",
      date: "Jan 08, 2026",
      description: "An interactive talk for aspiring writers.",
    },
    {
      title: "Poetry Reading Night",
      date: "Dec 30, 2025",
      description: "An evening of poetry and open mic sessions.",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Event Highlights
        </h2>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex gap-6 bg-base-100 p-6 rounded-xl shadow"
            >
              <div className="text-primary font-semibold min-w-[100px]">
                {event.date}
              </div>

              <div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-gray-600 mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
