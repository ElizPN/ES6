// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// };

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 1, 2));
// no matter how many parametrs our function has. We can use "...rest"
// and transmit any amount of arguments into the function.
