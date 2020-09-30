const average = (array) => {
  let med = 0;
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }
    sum += array[index];
  }
  med = Math.round(sum / array.length);
  return med;
};
console.log(average([2, 3]));
