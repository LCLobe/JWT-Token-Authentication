import React, { useMemo, useEffect } from 'react';
import useAppContext from '../context/Context.js';

const UserPrivateView = () => {
    
    const {actions} = useAppContext();
    const {fetchPrivate} = actions;

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