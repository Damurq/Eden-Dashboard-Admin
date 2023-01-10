import React from 'react'
import logo_light_IMG from "../../../assets/images/logo_light_IMG.png"
import "./LoginFormHeader.css"

const LoginFormHeader = () => {
    return (
        <>
            <p className="login-form__description-text--start">Bienvenido a</p>
            <div className="login-form-container-image">
                <img src={logo_light_IMG} alt="" className="" />
            </div>
            <p className="login-form__description-text">Ingresa tu usuario y contraseña para entrar a tu perfil</p>
        </>
    )
}

export default LoginFormHeader