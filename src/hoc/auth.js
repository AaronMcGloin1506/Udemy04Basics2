import React from 'react'



const Auth = (props) => {
    const password = 'password12345';

    if(password != "password1234"){
        return (
            <h1>Incorrect Password</h1>
        )
    }
    else {
        return(
            <>
                {props.children}
            </>
        )
        
    }
    
}
export default Auth;