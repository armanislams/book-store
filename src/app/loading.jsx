export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#191919] text-white">

      {/* 2. Sleek Loading Text */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-medium tracking-tight opacity-90">
          Opening the Boi-Poka...
        </h2>

        {/* 3. Progress Bar style loader */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full w-full origin-left animate-progress bg-primary"></div>
        </div>
      </div>

     
    </div>
  );
}
