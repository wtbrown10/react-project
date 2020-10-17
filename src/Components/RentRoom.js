import React, { useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'
import Button from './Button'

export default function RentRoom() {

    const homeLink = window.location.origin + '/'
    const {room , setRoom} = useContext(RoomContext)
    const arr = room.flat()
    
    const rentRoom = (e) => {
        
        const id = e.target.id
        const name = document.getElementById('renterName').value.trim()
        if(name == '') return alert('Please Enter A Name!')
        
        const newRoom = room.map(floor => {
            return floor.map(singleRoom => {
                
                if(singleRoom.room == id){
                    return {...singleRoom, renter: name }
                
                }else {
                    return singleRoom
                }
                
            })
        })
        setRoom(newRoom)
        document.getElementById('renterName').value = ''
    }

return ( 
    <div>
            <h1>Rent Rooms here!</h1>
            <h4>There are {arr.length} rooms available!</h4>
            <div className='rent-room-body'>
            <input id='renterName' type='text' placeholder='Name'></input>
            
            <ul>
                {arr.filter(elm => elm.renter == null).map(arrs => {
                    return  <li className='list'>Room {arrs.room} available for ${arrs.price}/Day 
                                <button id={arrs.room} onClick={rentRoom}>
                                    Rent Room!
                                </button>
                            </li>
                })}
            </ul>            
            </div>
            <div>
            <Button 
            onClick={ () => {window.location = homeLink}} 
            text='Home'
            />
    
        </div>
    </div>
    )
}
