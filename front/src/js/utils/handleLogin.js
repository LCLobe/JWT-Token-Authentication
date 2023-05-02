const handleLogin = async (username, password, handleLoginOk ) => { //handleLoginError
    
    const myObject = { username, password};
    console.log(myObject);

    const resp = await fetch(`http://127.0.0.1:5000/token`, { 
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ username, password }) 
    })

    if(!resp.ok) throw Error("There was a problem in the login request")

    if(resp.status === 401){
         throw("Invalid credentials")
    }
    else if(resp.status === 400){
         throw ("Invalid email or password format")
    }
    const data = await resp.json()
    // save your token in the localStorage
   //also you should set your user into the store using the setStore function
    localStorage.setItem("jwt-token", data.token);

    await handleLoginOk("/dashboard");
    return data
}

export default handleLogin