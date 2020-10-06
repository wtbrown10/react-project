const hotel = []
let newArr = []

function roomCreator(numFloors, numRooms) {

    for (let i = 1; i <= numFloors; i++) {
        for (let j = 1; j <= numRooms; j++) {
            newArr.push(i * 100 + j) 
    }
        hotel.push(newArr)
        newArr = []
}
console.log(hotel)
}

roomCreator(4,4)