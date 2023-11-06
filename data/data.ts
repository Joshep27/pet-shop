export const socialNetworks = [
  { name: 'instagram', link: 'https://www.instagram.com/' },
  { name: 'twitter', link: 'https://twitter.com' },
  { name: 'facebook', link: 'https://facebook.com' },
];

export const navbarProps = {
  labels: [
    { name: 'Inicio', route: '/home' },
    { name: 'Comprar por marca', route: '/shop-by-brand' },
    { name: 'Comprar por mascota', route: '/shop-by-pet' },
    { name: 'Nuestros Servicios', route: '/our-services' },
    { name: 'Promociones', route: '/promotions' },
    { name: 'Nosotros', route: '/about-us' },
  ],
  icons: [
    { src: '/location.svg', route: '/location' },
    { src: '/pet.svg', route: '/pets' },
    { src: '/user.svg', route: '/profile' },
    { src: '/shopping-car-badge.svg', route: '/shopping-car' },
  ],
  options: [
    { label: 'Bello Monte' },
    { label: 'La Trinidad' },
    { label: 'El Cafetal' },
  ],
  socialNetworks: socialNetworks,
};

export const carouselProps = {
  images: [
    { id: 1, src: '/dog.svg' },
    { id: 2, src: '/dog.svg' },
    { id: 3, src: '/dog.svg' },
    { id: 4, src: '/dog.svg' },
  ],
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  },
};

export const categorySectionProps = {
  title: 'UNA GRAN VARIEDAD DE CATEGORÍAS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  categories: [
    { name: 'Perros', src: '/category.svg' },
    { name: 'Gatos', src: '/category.svg' },
    { name: 'Peces', src: '/category.svg' },
    { name: 'Roedores', src: '/category.svg' },
    { name: 'Reptiles', src: '/category.svg' },
    { name: 'Placeholder', src: '/category.svg' },
  ],
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

export const productSectionsProps = [
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

export const adSplitterProps = [
  { ads: ads.slice(1, 3) },
  { ads: ads.slice(0, 1) },
];

export const serviceSectionProps = {
  title: 'NUESTROS SERVICIOS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.',
  services: [
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
  ],
};

export const brandSectionProps = {
  title: 'TRABAJAMOS CON LAS MEJORES MARCAS',
  subtitle: 'Lorem ipsum dolor sit amet.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.',
  brands: [
    { src: '/brand.svg' },
    { src: '/brand.svg' },
    { src: '/brand.svg' },
    { src: '/brand.svg' },
  ],
};

export const footerProps = {
  sections: [
    {
      title: 'Sobre nosotros',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      title: 'Mi cuenta',
      hasLinks: true,
      items: [
        { text: 'Información personal', link: '/personal-information' },
        { text: 'Direcciones', link: '/addresses' },
        { text: 'Mascotas', link: '/pets' },
        { text: 'Órdenes', link: '/orders' },
        { text: 'Agenda', link: '/schedule' },
      ],
    },
    {
      title: 'Informacion',
      hasLinks: true,
      items: [
        { text: 'Formulario de contacto', link: '/contact-form' },
        { text: 'Preguntas frecuentes', link: '/faq' },
        { text: 'Términos y condiciones', link: '/terms-and-conditions' },
        { text: 'Política de privacidad', link: '/privacy-policy' },
      ],
    },
    {
      title: 'Informacion',
      hasSocialNet: true,
      items: [
        { text: 'Bello Monte, calle XXXX, local 1' },
        { text: '(0212) 575 54 12' },
        { text: 'soporte@maxipet.com' },
        { text: 'Lunes a Viernes' },
        { text: '9:00 a.m. - 5:00 p.m.' },
      ],
      socialNetworks: socialNetworks,
    },
  ],
  copyright: {
    text: 'Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por Avila Tek ',
    icon: '/avila.svg',
  },
  icons: {
    left: './dog-house.svg',
    right: './tree.svg',
  },
};
