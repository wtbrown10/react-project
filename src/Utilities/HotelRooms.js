import React from 'react'

export default function HotelRooms() {
    const availableRooms = localStorage.getItem('hotel-rooms')

let dropDown = '<select>'

for(let i = 0; i < availableRooms.length; i++) {
    for(let j = 0; j < availableRooms[i].length; j++) {

        dropDown = dropDown + `<option value'${availableRooms[i][j]}'>${availableRooms[i][j]}</option>`
    }
    dropDown = dropDown + '</select>'

    document.getElementById('available-rooms').innerHTML = dropDown
}
    return (
        <div>
            <h1>Rent Rooms here!</h1>
        <input type='text' placeholder='Name'></input>
        
     <button>Book Room</button> <br/>
        <p>Rented Rooms</p>
        <p id='available-rooms'>
            {dropDown}
        </p>

       
            
        </div>
    )
}


