//this context will help to access current user anywhere 
//adobted from cybersecurity course https://github.com/shibinjohn88/rest-rant-monorepo/tree/jwt-authentication

import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)

    //get logged in user from backend and set as current user
    useEffect( () => {
        async function getLoggedUser() {
            let resposnse = await fetch ('/api/auth', {
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
