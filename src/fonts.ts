import { DM_Sans, Inter } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
});

export default {
  dmSans,
  inter
};
