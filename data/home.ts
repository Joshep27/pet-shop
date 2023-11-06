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
  { src: '/shopping-car-badge.svg', route: '/shopping-car' },
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

export const categories = [
  { name: 'Perros', src: '/category.svg' },
  { name: 'Gatos', src: '/category.svg' },
  { name: 'Peces', src: '/category.svg' },
  { name: 'Roedores', src: '/category.svg' },
  { name: 'Reptiles', src: '/category.svg' },
  { name: 'Placeholder', src: '/category.svg' },
];

export const categorySection = {
  title: 'UNA GRAN VARIEDAD DE CATEGORÍAS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  categories: categories,
};

export const products = [
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
  {
    name: '1st Choice Puppy Chiot',
    src: '/product.svg',
    rating: 3,
    price: '$9.99',
  },
];

export const productSections = [
  {
    title: 'PRODUCTOS DESTACADOS',
    subtitle: 'Lorem ipsum dolor sit amet.',
    products: products,
    order: 'normal',
    imgEnabled: true,
  },
  {
    title: 'PRODUCTOS POPULARES',
    subtitle: 'Lorem ipsum dolor sit amet.',
    products: products.slice(0, 5),
    order: 'normal',
  },
  {
    title: 'ULTIMOS PRODUCTOS',
    subtitle: 'Lorem ipsum dolor sit amet.',
    products: products,
    order: 'reverse',
    imgEnabled: true,
  },
];

export const ads = [
  { src: '/ad-dog-ball.svg' },
  { src: '/ad-dog-food.svg' },
  { src: '/ad-food.svg' },
];

export const services = [
  {
    name: 'Peluquería',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
  {
    name: 'Odontología',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
  {
    name: 'Veterinario',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
  {
    name: 'Entrenamiento',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
  {
    name: 'Psicología canina',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
  {
    name: 'Fiestas de cumpleaños',
    src: '/service.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  },
];

export const serviceSection = {
  title: 'NUESTROS SERVICIOS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.',
  services: services,
};

export const brands = [
  { src: '/brand.svg' },
  { src: '/brand.svg' },
  { src: '/brand.svg' },
  { src: '/brand.svg' },
];

export const brandSection = {
  title: 'TRABAJAMOS CON LAS MEJORES MARCAS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.',
  brands: brands,
};
