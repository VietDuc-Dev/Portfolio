"use client";

export default function CardProject() {
  return (
    <div className="group rounded overflow-hidden flex flex-col max-w-xl mx-auto transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
      {/* IMAGE */}
      <a href="#" className="overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] "
          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625&sharp=10&w=1000"
          alt="Sunset in the mountains"
        />
      </a>

      {/* CONTENT */}
      <div className="relative -mt-16 px-4 py-5 glassBase m-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:backdrop-blur-lg">
        <a
          href="#"
          className="font-semibold text-lg inline-block mb-2 transition-colors duration-300 group-hover:text-blue-500"
        >
          Teams Project Management App
        </a>

        <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          Today, I’m covering one of my favorite parts of the Nordstrom
          Anniversary Sale: the activewear!
        </p>
      </div>
    </div>
  );
}
