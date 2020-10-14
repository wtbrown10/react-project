import React from 'react'
import Button from '../Components/Button'

export default function NavBar() {

const bookRoomLink = window.location.origin + '/RentRoom'
const returnRoomLink = window.location.origin + '/ReturnRoom'

    return (
        <div>
            <h1>Welcome To Hotel React</h1>
            <Button 
            onClick={ () => {window.location = bookRoomLink}} 
            text='Rent Room'
            />
        

        <Button 
            onClick={ () => {window.location = returnRoomLink}} 
            text='Return Room'
            />
        </div>
    )
}
