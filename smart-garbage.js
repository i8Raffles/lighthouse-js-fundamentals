const smartGarbage = function (trash, bins) {
  trash = "recycling", "waste", "compost",
  bins = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  }
  if(trash === "waste") {
    bins.waste += 1;
  }
  else if(trash === "recycling") {
    bins.recycling += 1;
  }
  else if(trash === "compost") {
    bins.compost += 1;
  }
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });



