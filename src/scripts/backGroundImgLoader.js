function importAll(r) {
  let imgs = {};
  r.keys().map((item, index) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
}

const bgImages = importAll(require.context('../imgs/ships', false, /\.svg$/));

export { bgImages };