export const productos = [
  {
    name: "LABIAL LIP GLOSS JIRAFA MINI TANGO 💋",
    description:
      "Labial mate de larga duración con acabado aterciopelado. Ideal para un look sofisticado.",
    stock: 50,
    price: 1792,
    category: "labios",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzqirlmbclmz62.jpeg",
  },
  {
    name: "SERUM KITTY FLOWER ROCOCO 💕",
    description: "Unifica el tono de la piel y ofrece un acabado no grasoso.",
    stock: 30,
    price: 3500,
    category: "rostro",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzqh17mbbnj662.jpeg",
  },
  {
    name: "DELINEADOR ILUMINADOR RETRÁCTIL KAKASAHOW ✨",
    description:
      "Delineador resistente al agua, ideal para delineados duraderos.",
    stock: 75,
    price: 2048,
    category: "ojos",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzqizjmb2hp3b8.webp",
  },
  {
    name: "PALETA SOMBRAS X6 TONOS CORAZÓN KAKASHOW 💖",
    description:
      "Paleta de sombras en tonos nude y tierra para looks naturales.",
    stock: 40,
    price: 5000,
    category: "ojos",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzq7mgmaoggniy.webp",
  },
  {
    name: "RUBOR SELLO CORAZÓN MOCALLURE ❤",
    description:
      "Rubor en polvo con pigmento sedoso para un acabado fresco y natural.",
    stock: 60,
    price: 2560,
    category: "rostro",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzqitlmbcmbwrn.jpeg",
  },
  {
    name: "LABIAL GLOSS HIDRATANTE CLICK NINI SOSO 👄",
    description:
      "Brillo labial con efecto volumen y acabado cristalino. Apto para usar solo o sobre labial.",
    stock: 80,
    price: 1750,
    category: "labios",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_z3abcshmbjzx55c.webp",
  },
  {
    name: "ILUMINADOR EN POLVO MARIPOSA MINI TANGO 🎇",
    description:
      "Iluminador en polvo con acabado luminoso y brillante. Ideal para resaltar puntos altos del rostro y lograr un glow natural.",
    stock: 15,
    price: 1792,
    category: "rostro",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzqis2mbclyp6o.jpeg",
  },
  {
    name: "LABIAL LÍQ OSITO ROSA GEGE BEAR 🧸",
    description:
      "Labial líquido de larga duración con acabado mate. Fórmula hidratante y empaque en forma de osito para un toque divertido y kawaii.",
    stock: 30,
    price: 2240,
    category: "labios",
    img: "https://cdn.v2.tiendanegocio.com/gallery/37075/img_37075_hzzq2v3man0rmyr.webp",
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        resolve(productos);
      }
    }, 2000);
  });
};
export const getOneProduct = (id) => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        let product = productos.find((prod) => prod.id === id);
        resolve(product);
      }
    }, 2000);
  });
};

export const getCategories = () => {
  const categories = [...new Set(productos.map((prod) => prod.category))];
  return categories;
};
