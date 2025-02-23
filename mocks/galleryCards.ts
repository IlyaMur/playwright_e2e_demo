export type GalleryItem = {
  title: string;
  price: number;
};

export const galleryItemsMock: Record<string, GalleryItem> = {
  astronautItem: {
    title: 'Astronaut dabbing',
    price: 499
  },
  landscapeItem: {
    title: 'Mountain Landscape',
    price: 599
  },
  zebraItem: {
    title: 'Baby Zebra with butterfly',
    price: 320
  },
  houseItem: {
    title: 'Night background with rental of house',
    price: 875
  },
  ballonItem: {
    title: 'Young Man in hot air balloon',
    price: 672
  }
} as const;
