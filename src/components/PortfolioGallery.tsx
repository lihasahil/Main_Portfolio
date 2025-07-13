export default function PortfolioGallery() {
  return (
    <div className="relative mt-5 bg-white p-6 sm:p-8">
      {/* Decorative shape */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Main Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.Xul8xb_RKpJd0BhazsiY3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Main"
            className="w-full h-auto object-cover aspect-square sm:aspect-[3/4]"
          />
        </div>

        {/* Right: Two stacked images */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/32/a3/c5/32a3c5156953b0ae032574b0ea335ac0.jpg"
              alt="Secondary 1"
              className="w-full h-auto object-cover aspect-[16/9] sm:aspect-square"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/e1/4c/ed/e14cedcb37585dc0a66b558c6d18ed25.jpg"
              alt="Secondary 2"
              className="w-full h-auto object-cover aspect-[16/9] sm:aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
