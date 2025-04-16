import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';

// Replace these URLs with your own image URLs
const images = [
  "/images/slider1.jpg", // These will be your local images
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg",
  "/images/slider6.jpg",
  "/images/slider7.jpg",
  "/images/slider8.jpg"
  
];

const descriptions = [
  "Your story, beautifully told through our lens...",
  "Where moments become timeless memories...",
  "Specializing in maternity and newborn photography...",
  "Capturing the joy of birthdays and celebrations...",
  "Creating beautiful family portraits...",
  "Honoring tradition through vibrant, storytelling photography of Indian ceremonies..."
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let timeout: number;
    
    if (isTyping) {
      const currentText = descriptions[currentDescription];
      if (displayText.length < currentText.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = window.setTimeout(() => {
          setIsTyping(false);
        }, 4000);
      }
    } else {
      timeout = window.setTimeout(() => {
        setDisplayText("");
        setCurrentDescription((prev) => (prev + 1) % descriptions.length);
        setIsTyping(true);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentDescription]);

  return (
    <div className="relative w-full h-screen overflow-hidden pt-24 flex items-center justify-center">
      <AnimatePresence mode="wait">
      <motion.img
      key={currentIndex}
      src={images[currentIndex]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center top' }} // Optional: tweak if you want top-center crop
      />


      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 flex items-center justify-center text-white pt-24">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-allura text-7xl md:text-9xl font-normal mb-8 tracking-wider"
          >
            Vivid Lens
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-20 flex items-center justify-center"
          >
            <p className="font-playfair text-2xl md:text-4xl tracking-wider font-light italic">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://www.facebook.com/vividlens.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-theme transition-colors duration-300"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/vividlens_au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-theme transition-colors duration-300"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};