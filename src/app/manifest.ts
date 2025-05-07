import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Boss Agency',
    short_name: 'Boss Agency',
    description: 'Boss Agency is a full-service marketing agency specializing in branding and digital marketing strategies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#aa58b1',
    icons: [
      {
        src: '/site-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/site-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 