import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    content: 'Absolutely amazing experience! The maternity photos captured the beauty of this special time perfectly.',
    date: '2024-02-15',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Patel',
    content: 'Incredible work capturing our traditional ceremony. Every important moment was beautifully documented.',
    date: '2024-02-10',
    rating: 5
  },
  {
    id: '3',
    name: 'Michael Chen',
    content: 'The family portraits exceeded our expectations. Professional, patient, and creative throughout the session.',
    date: '2024-01-28',
    rating: 5
  }
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
                <span className="font-rockybilly text-lg">{testimonial.name}</span>
                <span className="text-sm text-gray-400">{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};