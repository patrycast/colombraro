// Datos de Colombraro (tomados de su ficha de Google Maps). Imágenes: poné la ruta en `image` (ej. '/img/baldes.jpg').
export const business = {
  name: 'Colombraro',
  whatsapp: '5492257668867', // 02257 66-8867 → confirmá que ese número tenga WhatsApp
  instagram: 'https://instagram.com/tu_usuario', // reemplazar por el Instagram real
  address: 'Calle 79 N° 1390, Mar del Tuyú',
  hours: 'Lunes a sábados de 9:30 a 13:30',
  phone: '02257 66-8867',
};
export const waLink = (msg = 'Hola! Quiero hacer una consulta.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Colombraro, Calle 79 1390, Mar del Tuyú')}`;
export const credit = `https://wa.me/5491155688587?text=${encodeURIComponent('Hola! Vi tu página de Colombraro y quiero hacerte una consulta')}`;

export const rating = { score: '4,1', count: 105 };
export const reviews = [
  'Buena atención y surtido de mercadería.',
  'Siempre atiende muy amablemente y tiene muchos productos de buena calidad.',
  'Unos genios los vendedores, buenos precios.',
];

export const categories = [
  { title: 'Cocina y mesa', text: 'Tuppers, jarras, vasos, platos y escurridores.', image: "/img/colombraro-articulo1.webp" },
  { title: 'Baldes y tachos', text: 'Baldes, tachos, cestos y palanganas.', image: "/img/colombraro-cestos1.jpg" },
  { title: 'Organización', text: 'Cajas, cajones, canastos y percheros.', image: "/img/colombraro-articulo4.webp" },
  { title: 'Limpieza', text: 'Secadores, escobillones, cubetas y más.', image: "/img/colombraro-articulo3.webp" },
  { title: 'Jardín y exterior', text: 'Macetas, regaderas, sillas y mesas.', image: "/img/colombraro-articulo2.webp" },
  { title: 'Todo para el hogar', text: 'Mucha variedad de artículos para tu casa.', image: "/img/colombraro-articulo5.webp" },
];
export const benefits = [
  ['Mucho surtido', 'Variedad de productos de buena calidad para el hogar, en un solo lugar.'],
  ['Buenos precios', 'Precios razonables que nuestros clientes destacan en sus opiniones.'],
  ['Atención amable', 'Te asesoramos en el local o por WhatsApp, sin vueltas.'],
  ['Entrega a domicilio', 'Pedí lo que necesitás y coordinamos la entrega en tu casa.'],
];
export const steps = [
  ['Elegí', 'Mirá las categorías y anotá lo que necesitás.'],
  ['Escribinos', 'Mandanos tu pedido por WhatsApp con fotos o medidas.'],
  ['Recibí o retirá', 'Coordinamos la entrega a domicilio o el retiro en el local.'],
];
export const faqs = [
  ['¿Hacen entrega a domicilio?', 'Sí. Escribinos por WhatsApp con tu dirección y coordinamos la entrega.'],
  ['¿Dónde están y en qué horario atienden?', 'Estamos en Calle 79 N° 1390, Mar del Tuyú. Atendemos de lunes a sábados de 9:30 a 13:30.'],
  ['¿Cómo hago un pedido?', 'Escribinos por WhatsApp con lo que necesitás y te respondemos con precios y stock.'],
  ['¿Puedo consultar antes de ir al local?', 'Claro. Mandanos una foto o el nombre del producto y te decimos si lo tenemos.'],
];
