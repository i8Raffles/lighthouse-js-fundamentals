// function merge(a1, a2) {
//   let merged = a1.concat(a2);
//   return merged.sort(function (a, b) {
//       return a > b;
//   });
// }

function merge(a1, a2) {
  let sortedArray = [...a1,...a2].sort();
  return sortedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
