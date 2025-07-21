export default function PortfolioGallery() {
  return (
    <div className="relative mt-5 bg-white p-6 sm:p-8">
      {/* Decorative shape */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Main Image */}
        <div className="rounded-xl h-fit shadow-[#328E6E] shadow-sm">
          <img
            src="/Sahil.jpg"
            alt="Main"
            className="w-full h-auto rounded-xl object-cover aspect-square sm:aspect-[3/4] "
          />
        </div>

        {/* Right: Two stacked images */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden shadow-[#328E6E] shadow-sm">
            <img
              src="/hero1.jpg"
              alt="Secondary 1"
              className="w-full h-auto object-cover aspect-[16/9] sm:aspect-square "
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-[#328E6E] shadow-sm">
            <img
              src="/sahil-photo.jpg"
              alt="Secondary 2"
              className="w-full h-auto object-cover aspect-[16/9] sm:aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
