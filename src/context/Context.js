import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUser } from '../helpers/user';
import { ApiGet } from '../helpers/axios';


const AppContext = createContext();

export default function AppProvider({ children }) {


    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState({});


    useEffect(() => {    //MOVER PARA O COMPONENTE PRINCIPAL E ARMAZENAR COM REDUX

        ApiGet('/usuarios').then(res => {
            setPlayers(res.data.usuarios)
        })

        const userCookie = getUser()
        setPlayer({ id: userCookie.id, email: userCookie.email })

    }, []);


    return (
        <AppContext.Provider
            value={{
                player,
                players,
                setPlayers,
                count,
                setCount
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useCount() {
    const { count, setCount } = useContext(AppContext);
    return { count, setCount }
}

export function useListUsers() {
    const { user, users, setUsers } = useContext(AppContext);
    return { user, users, setUsers }
}