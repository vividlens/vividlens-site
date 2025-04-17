import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sravan Kumar',
    content: "We had an incredible experience with Vivid Lens for our recent family event and photo shoot! From start to finish, Lax was professional, friendly, and highly skilled. They captured our special moments beautifully, with stunning attention to detail and natural expressions. My lil one looked like an Angel😍😍 \
              The final photos exceeded our expectations—crisp, vibrant, and full of emotion. The entire process, from booking to delivery, was seamless, and they made sure we felt comfortable throughout the session. \
              If you're looking for any photography, I highly recommend Vivid Lens. Thank you for preserving our memories so perfectly! \
              Thank you Lax!!",
    date: 'Feb-26-2025',
    rating: 5
  },
  {
    id: '2',
    name: 'Hanumanth Mannepalli',
    content: "We had Lax from VividLens capture our housewarming ceremony, and the photos & videos exceeded all expectations! 🎥✨ From the sacred pooja rituals to the dinner celebrations, every moment was framed beautifully. The attention to detail and the way emotions were captured made these memories even more special. \
              Right from the initial communication to the booking process, everything was smooth, clear, and hassle-free. Lax arrived well before time, patiently captured every moment without rushing, and his passion for photography truly reflects in the final output. His services are not only affordable but also come with a professional and friendly approach, making the entire experience comfortable and memorable. \
              It’s been a long time since I felt this good about my photos, and Lax truly made that happen! If you’re looking for someone who brings passion, creativity, and professionalism to the table, VividLens is the way to go! 📸🔥",
    date: 'March-02-2025',
    rating: 5
  },
  {
    id: '3',
    name: 'Shekar Nayak Daravath',
    content: "We recently had a maternity photoshoot with Lakshman, and we couldn’t be happier with the results! From the moment we met him, his professionalism, friendly nature, and creative suggestions made the entire experience enjoyable and comfortable. He took the time to understand our vision and guided us with great ideas, ensuring we felt relaxed and natural in front of the camera. \
              The final photos exceeded our expectations beautifully captured this special moment in our lives with such elegance and warmth. We truly appreciate Lakshman’s dedication and passion for his work. Highly recommend him to anyone looking for a talented and professional photographer!",
    date: 'March-13-2025',
    rating: 5
  },
];

export const Testimonials = () => {
  return (
    <div className="pt-32 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-rockybilly text-center mb-12">Client Testimonials</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-playfair italic mb-4">{testimonial.content}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-rockybilly text-xs">{testimonial.name}</span>
                <span className="text-sm text-gray-400">{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
