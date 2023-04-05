const judgeVegetable = function (vegetables, metric) {
  return vegetables.reduce((best, other) =>
  other[metric] > best[metric] ? other : best).submitter
}