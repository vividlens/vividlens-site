import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Category, Photo } from '../types';

const categories: Category[] = [
  {
    id: '1',
    name: 'Maternity',
    description: 'Capturing the beauty of motherhood',
    coverImage: 'https://images.unsplash.com/photo-1611175694989-4870fafa4494?w=800&h=600&fit=crop',
    photos: [
      {
        id: 'm1',
        url: 'https://images.unsplash.com/photo-1611175694989-4870fafa4494?w=800&h=600&fit=crop',
        title: 'Maternity Session 1'
      },
      {
        id: 'm2',
        url: 'https://images.unsplash.com/photo-1595256565459-351ea1fa7a56?w=800&h=600&fit=crop',
        title: 'Maternity Session 2'
      }
      // Add more photos here
    ]
  },
  {
    id: '2',
    name: 'Newborn',
    description: 'First moments of precious lives',
    coverImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=600&fit=crop',
    photos: [
      {
        id: 'n1',
        url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=600&fit=crop',
        title: 'Newborn Session 1'
      },
      {
        id: 'n2',
        url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
        title: 'Newborn Session 2'
      }
      // Add more photos here
    ]
  },
  // ... other categories with their photos
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const closePhotoModal = () => setSelectedPhoto(null);
  const closeCategoryModal = () => setSelectedCategory(null);

  return (
    <div className="pt-32 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-rockybilly text-center mb-12">Photo Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-rockybilly">{category.name}</h3>
                  <p className="text-sm font-playfair mt-2">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 overflow-y-auto py-10"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-rockybilly">{selectedCategory.name}</h2>
                  <button
                    onClick={closeCategoryModal}
                    className="text-white hover:text-theme transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategory.photos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Photo Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              onClick={closePhotoModal}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-h-[90vh] w-auto"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};