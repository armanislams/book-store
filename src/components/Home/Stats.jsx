// components/StatsSection.jsx
export default function StatsSection() {
  const stats = [
    { value: "50K+", label: "Books Available" },
    { value: "20K+", label: "Happy Readers" },
    { value: "5K+", label: "Authors" },
    { value: "100K+", label: "Books Sold" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our Growing Reading Community
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
