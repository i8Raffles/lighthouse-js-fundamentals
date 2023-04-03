const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  let posx = 0
  let posy = 0

  for (let move of moves) {
    if (move === "east") {
      posx++
    }
    else if (move === "west") {
      posx--
    }
    else if (move === "north") {
      posy++
    }
    else posy--
  }
  return [posx, posy]
};

finalPosition(moves);