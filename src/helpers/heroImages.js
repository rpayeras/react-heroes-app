// function importAll(r) {
//   const images = {};

//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });

//   return images;
// }

// export const heroImgs = importAll(
//   require.context("../assets", false, /\.(png|jpe?g|svg)$/)
// );

// console.log(heroImgs);
