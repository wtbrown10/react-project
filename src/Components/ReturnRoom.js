import React, { useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'
import Button from './Button'

export default function ReturnRoom() {
    const homeLink = window.location.origin + '/'
    const {room, setRoom} = useContext(RoomContext)
    const arr = room.flat()

const returnRoom = (e) => {
    const id = e.target.id
    const name = document.getElementById('returnRenterName').value.trim()
    console.log(arr)
        if(name == '') {
            return alert('Please Enter The Name Room was Rented Under')
        }
        const returnRoom = room.map(floor => {
            return floor.map(singleRoom => {
                
                if(singleRoom.renter == name){
                    return {...singleRoom, renter: null }
                
                }else {
                    document.getElementById('returnRenterName').value = ''
                    return singleRoom
                }
                
            })
        })
        setRoom(returnRoom)
        document.getElementById('returnRenterName').value = ''
}

    return (
        <div>
            <h1>Return Rooms here!</h1>
            <input id='returnRenterName' type='text' placeholder='Enter Name'></input>
            <br/>
    <p>Rented Rooms</p>

            <ul>
            {arr.filter(elm => elm.renter !== null).map(arrs => {
                    return  <li>Room {arrs.room} Booked 
                                <button id={arrs.room} onClick={returnRoom}>
                                    Return Room
                                </button>
                            </li>
                })}

            </ul>
            <div>
            <Button 
            onClick={ () => {window.location = homeLink}} 
            text='Home'
            />
    
        </div>

        </div>
    )
}
