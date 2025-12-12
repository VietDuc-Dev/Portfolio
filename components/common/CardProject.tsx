export default function CardProject() {
  return (
    <div
      className="group relative inline-block transition-all duration-500 
      hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,150,255,0.35)]
      hover:filter-[brightness(1.07)] rounded-sm"
    >
      {/* CARD */}
      <div className="relative h-full w-full glassBase overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(145deg,rgba(0,110,255,0.15),rgba(0,210,255,0.18),rgba(255,0,150,0.14))]" />

        {/* Light Sweep Animation */}
        <div className="absolute inset-0 pointer-events-none translate-x-[-120%] group-hover:translate-x-[130%] transition-transform duration-1200 ease-out bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        {/* IMAGE */}
        <div className="max-h-[80%] m-3 overflow-hidden rounded-sm">
          <img
            src="https://webixytech.com/admin_panel/assets/project_images/16265210345329-min.jpg"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.08]"
          />
        </div>

        {/* TITLE */}
        <div className="px-1.5 ml-4 max-w-[75%] mb-3">
          <p className="text-[1rem] font-semibold tracking-wide">
            Teams Project Management App
          </p>
        </div>
      </div>

      <button className="absolute bottom-2 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 px-3 py-1.5 min-w-[120px] glassBase text-center cursor-pointer">
        <p className="text-[0.85rem] font-semibold">View Detail</p>
      </button>
    </div>
  );
}
