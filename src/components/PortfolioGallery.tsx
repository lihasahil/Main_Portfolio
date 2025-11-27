export default function PortfolioGallery() {
  return (
    <div className="relative mt-5  p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Main Image */}
        <div className="rounded-xl h-fit shadow-[#328E6E] shadow-sm">
          <img
            src="/Sahil.jpg"
            alt="Main"
            className="w-full h-auto rounded-xl object-cover aspect-square sm:aspect-3/4 "
          />
        </div>

        {/* Right: Two stacked images */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden shadow-[#328E6E] shadow-sm">
            <img
              src="/main.jpg"
              alt="Secondary 1"
              className="w-full h-auto object-cover aspect-video sm:aspect-square "
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-[#328E6E] shadow-sm">
            <img
              src="/sahil-photo.jpg"
              alt="Secondary 2"
              className="w-full h-auto object-cover aspect-video sm:aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
