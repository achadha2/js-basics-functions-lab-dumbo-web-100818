// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  let distance = someValue - 42
  return Math.abs(distance)

}

function distanceTravelledInFeet(start, end){
  let streets = start - end
  let distance = Math.abs(streets)*264
  return distance

}

function distanceFromHqInFeet(value){
  let blocks = distanceFromHqInBlocks(value)
  let distance = blocks * 264
  return distance
}

function calculatesFarePrice(start, end){
  if(distanceTravelledInFeet(start, end) < 400){
    return 0
  }

  else if (distanceTravelledInFeet(start, end)-400 < 1600) {
    let fare = (distanceTravelledInFeet(start, end)-400)*0.02
    return fare
  }

  else if (distanceTravelledInFeet(start,end) > 2500){
    return 'cannot travel that far'
  }

  else {
    return 25
  }

}
