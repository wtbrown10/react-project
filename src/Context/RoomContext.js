import React, {createContext, useState, useEffect} from 'react'
import roomCreator from '../Utilities/roomcreator'

export const RoomContext = createContext()

export const RoomContextProvider = ({children}) => {

    const currentLocalStorage = localStorage.getItem(`hotel-rooms`)
    const initialState = currentLocalStorage === null ? roomCreator(4,4) : JSON.parse(currentLocalStorage)
    const [room, setRoom] = useState(initialState)

    const rentRoom = () => {
        return room
    }

    useEffect(() => {
        localStorage.setItem('hotel-rooms', JSON.stringify(room) )
    }, [room])


    return (
            <RoomContext.Provider value={{room, setRoom}}>
                {children}
            </RoomContext.Provider>
    )
}