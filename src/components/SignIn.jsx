import React from 'react'

const SignIn = () => {
    return (
        <div className="login-page singInForm"> 
            <div className="form">
                <form className="register-form" >
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p class="message">Already registered? <button>Sign In</button></p>
                </form>
            </div>
        </div>
    )
}


export default SignIn