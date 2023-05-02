import React, { useMemo, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import useAppContext from '../context/Context.js';

const UserPrivateView = () => {
    
    const {store, actions} = useAppContext();
    const {fetchPrivate} = actions;
    const {userIsLoggedIn} = store;

    const navigate = useNavigate();

    useEffect(() => {
        if (!userIsLoggedIn) {
            navigate('/Login');
        }
    }, []);

    const myData = useMemo(async ()=>fetchPrivate(),[])
    const myListOfData = [];

    useEffect(()=>{console.log(myData)},[myData]);
        //Guarda?
    for (let key in myData) { 
        myListOfData.push(<li> {key}: {myData[key]}</li>);
    };

    return (
        <div>
            <p>UserPrivateView</p>
            <p>My super secret info</p> 
            <ul>
                { myListOfData
                ? myListOfData.map(item => item)
                : null}
            </ul>
        </div>
    )
       
}

export default UserPrivateView;

// Mostrar la info de usuario