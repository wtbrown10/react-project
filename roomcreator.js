const hotel = []
let newArr = []

function roomCreator(numFloors, numRooms) {

    for (let i = 1; i <= numFloors; i++) {
        for (let j = 1; j <= numRooms; j++) {
            roomNum = i * 100 + j
            renter = null
            cost = (50 * i) + ((10 * j) - 10) + 45
            newArr.push({
                room: roomNum,
                renter: null,
                price: cost}) 
    }
        hotel.push(newArr)
        newArr = []
}
console.log(hotel)
}

roomCreator(4,4)