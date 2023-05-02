// assuming "/protected" is a private endpoint
export const fetchPrivate = async () => {

    // retrieve token form localStorage
    const token = localStorage.getItem('jwt-token');

    const resp = await fetch(`http://127.0.0.1:5000/protected`, {
       method: 'GET',
       headers: { 
         "Content-Type": "application/json",
         'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
       } 
    });


    if(!resp.ok) throw Error("There was a problem in the login request");

    if(resp.status === 403){
        throw Error("Missing or invalid token");
    }

    const data = await resp.json();
    console.log("This is the data you requested", data);
    return data

};

