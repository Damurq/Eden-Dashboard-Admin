import React from 'react'
import { Formik } from 'formik';
import { AiOutlineSend } from 'react-icons/ai'
import logo_light_IMG from '../../../../assets/images/logo_light_IMG.png'

// Style
import './LoginForm.css'

const LoginForm = () => {

    return (
        <div className="login-form">
            <p className="login-form__description-text--start">Bienvenido a</p>
            <div className="login-form-container-image">
                <img src={logo_light_IMG} alt="" className="" />
            </div>
            <p className="login-form__description-text">Ingresa tu usuario y contraseña para entrar a tu perfil</p>
            <Formik
                initialValues={{ password: '', project: '', user: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.password) {
                        errors.password = 'Requerido'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                    ) {
                        errors.password = 'Email invalido'
                    }
                    if (!values.project) {
                        errors.project = 'Requerido'
                    }
                    if (!values.user) {
                        errors.user = 'Requerido'
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    alert("Enviado")
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-inputs grid">
                            <div className="input-box">
                                <input
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
                                    type="text"
                                    className="contact__input" id='name' />
                                <label htmlFor="name" className="contact__label">Usuario</label>
                                <p className="error">
                                    {errors.user && touched.user && errors.user}
                                </p>
                            </div>
                            <div className="input-box">
                                <input
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    type="password"
                                    required
                                    className="contact__input" />
                                <label htmlFor="email" className="contact__label">Contraseña</label>
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                            </div>
                            <div className='container-button--contact'>
                                <button type="submit" className='button button--flex button--contact' disabled={isSubmitting}>
                                    Enviar mensaje
                                    <AiOutlineSend className="uil button__icon" />
                                </button>
                            </div>
                        </div>

                    </form>
                )}
            </Formik>
        </div>)

}

export default LoginForm