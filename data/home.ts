export const labels = [
  { name: 'Inicio', route: '/home' },
  { name: 'Comprar por marca', route: '/shop-by-brand' },
  { name: 'Comprar por mascota', route: '/shop-by-pet' },
  { name: 'Nuestros Servicios', route: '/our-services' },
  { name: 'Promociones', route: '/promotions' },
  { name: 'Nosotros', route: '/about-us' },
];

export const icons = [
  { src: '/location.svg', route: '/location' },
  { src: '/pet.svg', route: '/pets' },
  { src: '/user.svg', route: '/profile' },
  { src: '/shopping-car.svg', route: '/shopping-car' },
];

export const options = [
  { label: 'Bello Monte' },
  { label: 'La Trinidad' },
  { label: 'El Cafetal' },
];

export const socialNetworks = [
  { name: 'instagram', link: 'https://www.instagram.com/' },
  { name: 'twitter', link: 'https://twitter.com' },
  { name: 'facebook', link: 'https://facebook.com' },
];

export const carouselImages = [
  { id: 1, src: '/dog.svg' },
  { id: 2, src: '/dog.svg' },
  { id: 3, src: '/dog.svg' },
  { id: 4, src: '/dog.svg' },
];

export const carouselResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
