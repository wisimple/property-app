export const galleryImages = Array.from({ length: 14 }, (_, index) => ({
  src: `/img/gallery/${index + 1}.jpeg`,
  alt: `Gallery Image ${index + 1}`,
}));
