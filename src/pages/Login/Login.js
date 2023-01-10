import React from "react"
import login_IMG from '../../assets/images/login_IMG.png'
import logo_dark_IMG from '../../assets/images/logo_dark_IMG.png'
import LoginForm from "../../components/common/forms/LoginForm/LoginForm"
import './Login.css'
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-page-left">
          <LoginForm />
        </div>
        <div className="login-page-right">
          <img src={login_IMG} alt="" className="login-page__front" />
          <div className="login-page__logo">
            <img src={logo_dark_IMG} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login