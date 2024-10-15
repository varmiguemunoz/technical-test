function manufacture(gifts, materials) {
  const splitMaterials = materials.split("");

  let fabricateGifts = []

  for (let index = 0; index < gifts.length; index++) {
    const element = gifts[index];

    const splitItems = element.split("");

    const isGift = splitItems.every((item) => splitMaterials.includes(item));

    if (isGift) {
      fabricateGifts.push(element)
    }
  }

  return fabricateGifts;
}

const gift = ["olas", "oso", "tren"];
const material = "tronesa";

console.log(manufacture(gift, material)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
