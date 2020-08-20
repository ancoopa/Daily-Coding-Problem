const MAX = 10000
const POSSIBLE_DATA = ['a', 'b', 'c', 'd'];
const FAKE_MEMORY_ADDRESS = (() => {
  const result = {};
  POSSIBLE_DATA.forEach(dataSample => {
    result[dataSample] = getRandomInt(MAX);
  })
  return result;
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getDataPointer(data) {
  return FAKE_MEMORY_ADDRESS[data];
}

module.exports = {
  POSSIBLE_DATA,
  getDataPointer
};
