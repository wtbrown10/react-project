import React from 'react'


export default function roomcreator(numFloors, numRooms) {
    
const hotel = []
let newArr = []


    for (let i = 1; i <= numFloors; i++) {
        for (let j = 1; j <= numRooms; j++) {
           let roomNum = i * 100 + j
           let renter = null
        let cost = (50 * i) + ((10 * j) - 10) + 45
            newArr.push({
                room: roomNum,
                renter: null,
                price: cost}) 
    }
        hotel.push(newArr)
        newArr = []
}
console.log(hotel)



    return hotel
}
