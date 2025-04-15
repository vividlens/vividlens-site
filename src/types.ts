export interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  date: string;
  rating: number;
}