//this context will help to access current user anywhere in the react from cybersecurity course
import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)

    //get logged in user from backend and set as current user
    useEffect( () => {
        async function getLoggedUser() {
            let resposnse = await fetch ('http://localhost:3001/api/auth', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await resposnse.json ()
            setCurrentUser(user)
        }

        getLoggedUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider
