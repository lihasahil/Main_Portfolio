import { motion } from "framer-motion";

export default function PortfolioGallery() {
  return (
    <div className="relative mt-5 p-4 sm:p-6 max-w-lg mx-auto">
      <motion.div
        className="relative w-54 h-72 rounded-xl shadow-[#328E6E] shadow-sm overflow-hidden cursor-pointer"
        initial="initial"
        animate="initial"
        whileHover="hovered"
      >
        {/* Default Image */}
        <motion.img
          src="/Sahil.jpg"
          alt="Main Image"
          className="w-full h-full object-contain absolute inset-0"
          variants={{
            initial: { opacity: 1 },
            hovered: { opacity: 0 },
          }}
          transition={{ duration: 0.35 }}
        />

        {/* Hover Image */}
        <motion.img
          src="/main.jpg"
          alt="Hover Image"
          className="w-full h-full object-contain absolute inset-0"
          variants={{
            initial: { opacity: 0 },
            hovered: { opacity: 1 },
          }}
          transition={{ duration: 0.35 }}
        />
      </motion.div>
    </div>
  );
}
