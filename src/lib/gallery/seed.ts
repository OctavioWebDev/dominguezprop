import type { GalleryPhoto } from './types';

// The property photos that ship with the site. They show until the first change is
// saved in the admin, after which the saved list (which starts from these) is used.
const photos: Array<[file: string, projectName: string, location: string]> = [
  ['2857-AIRPORTHWY.jpg', '2857 Airport Hwy', 'Toledo, OH'],
  ['5255-Hill-Ave-Toledo-OH-Primary-Photo-1-HighDefinition.jpg', '5255 Hill Ave', 'Toledo, OH'],
  ['1825-1853-Eastgate-Rd-Toledo-OH-Primary-Photo-1-Large.jpg', '1825-1853 Eastgate Rd', 'Toledo, OH'],
  ['149-151-E-Airport-Hwy-Swanton-OH-Building-Photo-4-LargeHighDefinition.jpg', '149-151 E Airport Hwy', 'Swanton, OH'],
  ['135AIRPORTHWYSWANTONOHIO.jpg', '135 Airport Hwy', 'Swanton, OH'],
];

export const seedPhotos: GalleryPhoto[] = photos.map(([file, projectName, location], i) => ({
  id: `seed-${i + 1}`,
  url: `/images/DOMPROP/${file}`,
  projectName,
  description: '',
  date: '',
  location,
  // Keeps the original order when sorting.
  createdAt: new Date(Date.UTC(2024, 0, 1, 0, 0, photos.length - i)).toISOString(),
}));
