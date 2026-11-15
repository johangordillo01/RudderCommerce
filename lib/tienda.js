// Tienda ficticia "Casa Ocre" para la demo de Timonel.
// Todo el inventario es inventado; no representa a ninguna marca real.

export const TIENDA = {
  nombre: 'Casa Ocre',
  ciudad: 'Bogotá',
  descripcion: 'Marca colombiana de ropa y accesorios con diseño atemporal, hecha en Bogotá.',
  horarioAsesores: 'lunes a sábado de 8:00 a. m. a 6:00 p. m.',
};

const T = (tallas) => Object.entries(tallas).map(([talla, stock]) => ({ talla, stock }));

// variantes: [{ color, talla, stock }]
function prod(id, nombre, categoria, precio, descripcion, colores) {
  const variantes = [];
  for (const [color, tallas] of Object.entries(colores)) {
    for (const { talla, stock } of T(tallas)) variantes.push({ color, talla, stock });
  }
  return { id, nombre, categoria, precio, descripcion, variantes };
}

export const PRODUCTOS = [
  prod('CO-101', 'Chaqueta de jean clásica', 'chaquetas', 189900, 'Denim 100% algodón, corte recto, lavado medio.', { 'azul medio': { S: 2, M: 3, L: 0, XL: 1 } }),
  prod('CO-102', 'Chaqueta sintética negra', 'chaquetas', 229900, 'Cuero sintético suave, forro interno, cierre metálico.', { negro: { S: 1, M: 3, L: 2 } }),
  prod('CO-103', 'Camisa de lino', 'camisas y blusas', 129900, 'Lino fresco de manga larga, ideal para clima cálido.', { blanco: { S: 4, M: 5, L: 3, XL: 2 }, arena: { S: 1, M: 0, L: 2, XL: 0 } }),
  prod('CO-104', 'Blusa de satín', 'camisas y blusas', 99900, 'Satín con caída, cuello en V.', { champaña: { S: 3, M: 2, L: 2 }, negro: { S: 0, M: 1, L: 1 } }),
  prod('CO-105', 'Vestido midi', 'vestidos y faldas', 179900, 'Largo midi, tiras ajustables, tela fluida.', { terracota: { XS: 2, S: 3, M: 0, L: 1 } }),
  prod('CO-106', 'Falda plisada', 'vestidos y faldas', 109900, 'Plisado permanente, pretina elástica.', { negro: { XS: 1, S: 2, M: 3 } }),
  prod('CO-107', 'Jean recto tiro alto', 'pantalones', 149900, 'Denim rígido, tiro alto, bota recta.', { 'azul oscuro': { '6': 3, '8': 4, '10': 2, '12': 0, '14': 1 } }),
  prod('CO-108', 'Jean wide leg', 'pantalones', 159900, 'Bota ancha, tiro alto, lavado claro.', { 'azul claro': { '6': 1, '8': 2, '10': 3, '12': 2 } }),
  prod('CO-109', 'Pantalón sastre', 'pantalones', 159900, 'Corte sastre con pinzas, tela que no se arruga.', { gris: { S: 2, M: 3, L: 1 } }),
  prod('CO-110', 'Buzo oversize', 'buzos y camisetas', 119900, 'Algodón perchado, capota, ajuste amplio.', { ocre: { S: 2, M: 4, L: 5, XL: 3 }, negro: { S: 0, M: 2, L: 1, XL: 0 } }),
  prod('CO-111', 'Camiseta básica de algodón', 'buzos y camisetas', 49900, 'Algodón peinado, cuello redondo.', { negro: { S: 10, M: 12, L: 8 }, blanco: { S: 6, M: 0, L: 4 }, oliva: { S: 3, M: 5, L: 2 } }),
  prod('CO-112', 'Chaleco tejido', 'buzos y camisetas', 119900, 'Tejido de punto grueso, cuello en V.', { crudo: { S: 1, M: 2, L: 2 } }),
  prod('CO-113', 'Tenis blancos de cuero', 'calzado', 219900, 'Cuero liso, suela de caucho cosida.', { blanco: { '36': 2, '37': 3, '38': 1, '39': 0, '40': 2, '41': 2, '42': 1 } }),
  prod('CO-114', 'Botines chelsea', 'calzado', 259900, 'Cuero, elástico lateral, tacón de 3 cm.', { café: { '36': 1, '37': 2, '38': 2, '39': 1, '40': 0 } }),
  prod('CO-115', 'Bolso tote de cuero', 'accesorios', 189900, 'Cuero curtido, bolsillo interno con cierre.', { miel: { 'única': 4 } }),
  prod('CO-116', 'Riñonera', 'accesorios', 79900, 'Lona resistente al agua, correa ajustable.', { negro: { 'única': 6 } }),
  prod('CO-117', 'Gorra bordada', 'accesorios', 59900, 'Algodón, bordado tono a tono, ajuste trasero.', { ocre: { 'única': 8 } }),
  prod('CO-118', 'Aretes de argolla', 'accesorios', 45900, 'Acero inoxidable con baño dorado, hipoalergénicos.', { dorado: { 'única': 10 } }),
];

export const POLITICAS = `
Envíos (transportadora aliada):
- Bogotá: 1 a 2 días hábiles, $9.900.
- Ciudades principales (Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Pereira, Manizales, Armenia, Ibagué, Villavicencio, Santa Marta, Cúcuta, Neiva, Pasto, Montería, Tunja, Chía, Soacha, Zipaquirá, Cajicá, Funza, Mosquera, Envigado, Bello, Itagüí, Sabaneta, Soledad, Floridablanca, Palmira, Dosquebradas): 2 a 3 días hábiles, $14.900.
- Resto del país: 3 a 6 días hábiles, $18.900.
- Envío gratis en compras desde $250.000.
- Pedidos confirmados antes de las 2:00 p. m. de un día hábil salen ese mismo día.

Pago:
- Contraentrega (efectivo al recibir) en todo el país, excepto San Andrés, Providencia, Leticia y zonas rurales sin cobertura.
- Link de pago seguro (tarjeta débito o crédito, PSE, Nequi o Daviplata).

Cambios y devoluciones:
- Cambios de talla o producto hasta 30 días después de recibir, con la prenda sin uso y con etiquetas. El primer cambio de talla no tiene costo de envío.
- Derecho de retracto: 5 días hábiles desde la entrega para devolver el dinero (Ley 1480 de 2011).
- Garantía de 30 días por defectos de fabricación.

Guía de tallas (prendas superiores): S busto/pecho 86-90 cm; M 90-96 cm; L 96-102 cm; XL 102-108 cm. Jeans en tallas colombianas (6 a 14). Los buzos oversize son amplios: si está entre dos tallas, la menor.
`;

const CIUDADES_PRINCIPALES = ['medellin', 'cali', 'barranquilla', 'cartagena', 'bucaramanga', 'pereira', 'manizales', 'armenia', 'ibague', 'villavicencio', 'santa marta', 'cucuta', 'neiva', 'pasto', 'monteria', 'tunja', 'chia', 'soacha', 'zipaquira', 'cajica', 'funza', 'mosquera', 'envigado', 'bello', 'itagui', 'sabaneta', 'soledad', 'floridablanca', 'palmira', 'dosquebradas'];
const SIN_CONTRAENTREGA = ['san andres', 'providencia', 'leticia'];

export const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

export function cotizarEnvio(ciudad, subtotal = 0) {
  const c = norm(ciudad);
  let zona, costo, dias;
  if (c.includes('bogota')) { zona = 'Bogotá'; costo = 9900; dias = '1 a 2 días hábiles'; }
  else if (CIUDADES_PRINCIPALES.some((x) => c.includes(x))) { zona = 'ciudad principal'; costo = 14900; dias = '2 a 3 días hábiles'; }
  else { zona = 'resto del país'; costo = 18900; dias = '3 a 6 días hábiles'; }
  const gratis = subtotal >= 250000;
  return {
    ciudad,
    zona,
    costo_envio: gratis ? 0 : costo,
    envio_gratis: gratis,
    tiempo_entrega: dias,
    contraentrega_disponible: !SIN_CONTRAENTREGA.some((x) => c.includes(x)),
  };
}

export function buscar({ consulta, categoria, precio_max }) {
  const q = norm(consulta);
  const palabras = q.split(/\s+/).filter((w) => w.length > 2);
  const base = PRODUCTOS.filter((p) => {
    if (categoria && !norm(p.categoria).includes(norm(categoria))) return false;
    if (precio_max && p.precio > precio_max) return false;
    return true;
  });
  const lista = base.filter((p) => {
    if (!palabras.length) return true;
    const texto = norm(`${p.nombre} ${p.categoria} ${p.descripcion} ${p.variantes.map((v) => v.color).join(' ')}`);
    return palabras.some((w) => texto.includes(w.replace(/s$/, '')));
  });
  // Sin coincidencia exacta: devuelve opciones dentro del filtro de categoría o precio.
  return (lista.length ? lista : base).slice(0, 8).map(resumen);
}

export function resumen(p) {
  const disponibles = p.variantes.filter((v) => v.stock > 0);
  return {
    producto_id: p.id,
    nombre: p.nombre,
    precio: p.precio,
    categoria: p.categoria,
    descripcion: p.descripcion,
    colores: [...new Set(p.variantes.map((v) => v.color))],
    tallas_disponibles: [...new Set(disponibles.map((v) => `${v.talla} (${v.color})`))],
    agotado: disponibles.length === 0,
  };
}

export const porId = (id) => PRODUCTOS.find((p) => norm(p.id) === norm(id));
