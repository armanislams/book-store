"use client";

import { useEffect, useState } from "react";

export default function LimitedOfferSection() {
  // 🔥 Set your offer end date here
  const offerEnd = new Date("2026-02-20T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = offerEnd - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [offerEnd]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <span className="badge badge-error mb-3">Limited Time</span>
          <h2 className="text-3xl font-bold mb-4">
            Up to 40% Off Bestselling Books
          </h2>
          <p className="text-gray-600 mb-6">
            Don’t miss out on exclusive deals on your favorite books.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="font-semibold mb-4">Offer Ends In</h3>

          <div className="flex justify-center gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label}>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": item.value }}></span>
                </span>
                <div className="text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
