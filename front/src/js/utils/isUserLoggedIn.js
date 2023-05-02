const isUserLoggedIn = (handler, fetch) => {
   
    //return localStorage.getItem("jwt-token") ? true : false;
    if (window.localStorage.getItem("jwt-token")) {
        fetch()
        .then(res => {
            handler(true);
        })
        .catch(err => {
            handler(false);
        })            
    }


};

export default isUserLoggedIn;