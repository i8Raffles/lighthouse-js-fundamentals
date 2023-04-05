const carPassing = function (cars, speed) {
  let time = Date.now()
  let driver = {
    time: time,
    speed: speed
  }
  cars.push(driver)
  return cars
}
