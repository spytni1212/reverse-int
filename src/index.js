module.exports = function reverse(n) {
  let Arr = n.toString().split('');
  let newArr = [];
  for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] !== "-") {
          newArr.push(Arr[i]);
      }
  }
  newArr = newArr.reverse().join('');
  return newArr;
}
