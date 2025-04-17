import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Category, Photo } from '../types';

const categories: Category[] = [
  {
    id: '1',
    name: 'Maternity',
    description: 'Capturing the beauty of motherhood',
    coverImage: '/images/maternity/shekar_divya/LAX05515.jpg',
    photos: [
      {
        id: 'm1',
        url: '/images/maternity/shekar_divya/LAX05515.jpg',
        title: 'Maternity Session 1'
      },
      {
        id: 'm2',
        url: '/images/maternity/shekar_divya/LAX05580.jpg',
        title: 'Maternity Session 2'
      },
      {
        id: 'm3',
        url: '/images/maternity/shekar_divya/LAX05674.jpg',
        title: 'Maternity Session 3'
      },
      {
        id: 'm4',
        url: '/images/maternity/shekar_divya/LAX05811.jpg',
        title: 'Maternity Session 4'
      },
      {
        id: 'm5',
        url: '/images/maternity/shekar_divya/LAX05854-2.jpg',
        title: 'Maternity Session 5'
      },
      {
        id: 'm6',
        url: '/images/maternity/shekar_divya/LAX05916.jpg',
        title: 'Maternity Session 6'
      },
      {
        id: 'm7',
        url: '/images/maternity/shekar_divya/LAX06017.jpg',
        title: 'Maternity Session 7'
      },
      {
        id: 'm8',
        url: '/images/maternity/shekar_divya/LAX06029.jpg',
        title: 'Maternity Session 8'
      },
      {
        id: 'm9',
        url: '/images/maternity/shekar_divya/LAX06040.jpg',
        title: 'Maternity Session 9'
      },
      {
        id: 'm10',
        url: '/images/maternity/shekar_divya/LAX06075.jpg',
        title: 'Maternity Session 10'
      },
      {
        id: 'm11',
        url: '/images/maternity/shekar_divya/LAX06083.jpg',
        title: 'Maternity Session 11'
      }
    ]
  },  
  {
    id: '2',
    name: 'House Warming',
    description: 'A warm beginning to a new journey',
    coverImage: '/images/housewarming/lavanya/LAX03621.jpg',
    photos: [
      {
        id: 'h1',
        url: '/images/housewarming/lavanya/LAX02841.jpg',
        title: 'House Warming Session 1'
      },
      {
        id: 'h2',
        url: '/images/housewarming/lavanya/LAX02881.jpg',
        title: 'House Warming Session 2'
      },
      {
        id: 'h3',
        url: '/images/housewarming/lavanya/LAX02892.jpg',
        title: 'House Warming Session 3'
      },
      {
        id: 'h4',
        url: '/images/housewarming/lavanya/LAX03001.jpg',
        title: 'House Warming Session 4'
      },
      {
        id: 'h5',
        url: '/images/housewarming/lavanya/LAX03309.jpg',
        title: 'House Warming Session 5'
      },
      {
        id: 'h6',
        url: '/images/housewarming/lavanya/LAX03348.jpg',
        title: 'House Warming Session 6'
      },
      {
        id: 'h7',
        url: '/images/housewarming/lavanya/LAX03592.jpg',
        title: 'House Warming Session 7'
      },
      {
        id: 'h8',
        url: '/images/housewarming/lavanya/LAX03621.jpg',
        title: 'House Warming Session 8'
      },
      {
        id: 'h9',
        url: '/images/housewarming/lavanya/LAX03629.jpg',
        title: 'House Warming Session 9'
      },
      {
        id: 'h10',
        url: '/images/housewarming/lavanya/LAX03908.jpg',
        title: 'House Warming Session 10'
      },
      {
        id: 'h11',
        url: '/images/housewarming/hanumanth/LAX01163.jpg',
        title: 'House Warming Session 11'
      },
      {
        id: 'h12',
        url: '/images/housewarming/hanumanth/LAX01173.jpg',
        title: 'House Warming Session 12'
      },
      {
        id: 'h13',
        url: '/images/housewarming/hanumanth/LAX01438.jpg',
        title: 'House Warming Session 13'
      },
      {
        id: 'h14',
        url: '/images/housewarming/hanumanth/LAX01471.jpg',
        title: 'House Warming Session 14'
      },
      {
        id: 'h15',
        url: '/images/housewarming/hanumanth/LAX01645.jpg',
        title: 'House Warming Session 15'
      },
      {
        id: 'h16',
        url: '/images/housewarming/hanumanth/LAX01656.jpg',
        title: 'House Warming Session 16'
      },
      {
        id: 'h17',
        url: '/images/housewarming/hanumanth/LAX01898.jpg',
        title: 'House Warming Session 17'
      },
      {
        id: 'h18',
        url: '/images/housewarming/hanumanth/LAX02383.jpg',
        title: 'House Warming Session 18'
      },
      {
        id: 'h19',
        url: '/images/housewarming/hanumanth/LAX02391.jpg',
        title: 'House Warming Session 19'
      }
    ]
  },
  {
    id: '3',
    name: 'Half Saree',
    description: 'Celebrating tradition and grace',
    coverImage: '/images/half_saree/havisa/LAX06686.jpg',
    photos: [
      {
        id: 'hs1',
        url: '/images/half_saree/havisa/LAX06238.jpg',
        title: 'Half Saree Session 1'
      },
      {
        id: 'hs2',
        url: '/images/half_saree/havisa/LAX06585.jpg',
        title: 'Half Saree Session 2'
      },
      {
        id: 'hs3',
        url: '/images/half_saree/havisa/LAX06588.jpg',
        title: 'Half Saree Session 3'
      },
      {
        id: 'hs4',
        url: '/images/half_saree/havisa/LAX06598.jpg',
        title: 'Half Saree Session 4'
      },
      {
        id: 'hs5',
        url: '/images/half_saree/havisa/LAX06669.jpg',
        title: 'Half Saree Session 5'
      },
      {
        id: 'hs6',
        url: '/images/half_saree/havisa/LAX06686.jpg',
        title: 'Half Saree Session 6'
      },
      {
        id: 'hs7',
        url: '/images/half_saree/havisa/LAX07436.jpg',
        title: 'Half Saree Session 7'
      }
    ]
  },
  {
    id: '4',
    name: 'Family Shoot',
    description: 'Cherishing moments with loved ones',
    coverImage: '/images/family/nagaraj/LAX00282.jpg',
    photos: [
      {
        id: 'f1',
        url: '/images/family/nagaraj/LAX00002.jpg',
        title: 'Family Shoot Session 1'
      },
      {
        id: 'f2',
        url: '/images/family/nagaraj/LAX00021.jpg',
        title: 'Family Shoot Session 2'
      },
      {
        id: 'f3',
        url: '/images/family/nagaraj/LAX00282.jpg',
        title: 'Family Shoot Session 3'
      },
      {
        id: 'f4',
        url: '/images/family/nagaraj/LAX00319.jpg',
        title: 'Family Shoot Session 4'
      },
      {
        id: 'f5',
        url: '/images/family/nagaraj/LAX00355.jpg',
        title: 'Family Shoot Session 5'
      },
      {
        id: 'f6',
        url: '/images/family/nagaraj/LAX00364.jpg',
        title: 'Family Shoot Session 6'
      },
      {
        id: 'f7',
        url: '/images/family/nagaraj/LAX00373.jpg',
        title: 'Family Shoot Session 7'
      }
    ]
  },
  {
    id: '5',
    name: 'Family Shoot',
    description: 'Cherishing moments with loved ones',
    coverImage: '/images/indianevents/sravan/LAX04447.jpg',
    photos: [
      {
        id: 'f1',
        url: '/images/indianevents/sravan/LAX04277.jpg',
        title: 'Family Shoot Session 1'
      },
      {
        id: 'f2',
        url: '/images/indianevents/sravan/LAX04293.jpg',
        title: 'Family Shoot Session 2'
      },
      {
        id: 'f3',
        url: '/images/indianevents/sravan/LAX04304.jpg',
        title: 'Family Shoot Session 3'
      },
      {
        id: 'f4',
        url: '/images/indianevents/sravan/LAX04319.jpg',
        title: 'Family Shoot Session 4'
      },
      {
        id: 'f5',
        url: '/images/indianevents/sravan/LAX04359.jpg',
        title: 'Family Shoot Session 5'
      },
      {
        id: 'f6',
        url: '/images/indianevents/sravan/LAX04362.jpg',
        title: 'Family Shoot Session 6'
      },
      {
        id: 'f7',
        url: '/images/indianevents/sravan/LAX04379.jpg',
        title: 'Family Shoot Session 7'
      },
      {
        id: 'f8',
        url: '/images/indianevents/sravan/LAX04412.jpg',
        title: 'Family Shoot Session 8'
      },
      {
        id: 'f9',
        url: '/images/indianevents/sravan/LAX04447.jpg',
        title: 'Family Shoot Session 9'
      }
    ]
  },
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
