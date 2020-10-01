let total = 0;

const verifyTypeElement = array => array.some((element) => {
  if (typeof element !== 'number') {
    return true;
  }
  total += element;
  return false;
});

function result(array) {
  const anyNan = verifyTypeElement(array);
  if (anyNan) {
    return undefined;
  }
  return Math.floor(total / array.length);
}

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  return result(array);
};

module.exports = average;

