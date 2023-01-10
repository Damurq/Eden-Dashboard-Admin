import React from 'react'
import Message from '../../common/texts/Message/Message'
import InternalLinks from '../../common/links/InternalLinks/InternalLinks'
import "./LoginFormFooter.css"

const LoginFormFooter = () => {
  return (
    <div className="footer-form">
                <Message type="l-gray" >¿No recuerdas alguno de tu datos?</Message>
                <Message type="l-gray" >No te preocupes, {<InternalLinks to="/" type="light" >ingresa aquí</InternalLinks>} </Message>
                <div className="line"></div>
                <Message type="l-gray" >¿No tienes cuenta? {<InternalLinks to="/" type="light" >Regístrate aquí</InternalLinks>} </Message>
            </div>
  )
}

export default LoginFormFooter