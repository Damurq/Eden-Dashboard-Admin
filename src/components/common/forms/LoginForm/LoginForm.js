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
                initialValues={{ email: '', project: '', name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Requerido'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Email invalido'
                    }
                    if (!values.project) {
                        errors.project = 'Requerido'
                    }
                    if (!values.name) {
                        errors.name = 'Requerido'
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
                    <form onSubmit={handleSubmit} className="contact__form grid">
                        <div className="contact__inputs grid">
                            <div className="contact__content theme--3">
                                <label htmlFor="name" className="contact__label">Nombre</label>
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    type="text"
                                    className="contact__input theme--3" id='name' />
                                <p className="error">
                                    {errors.name && touched.name && errors.name}
                                </p>
                            </div>
                            <div className="contact__content theme--3">
                                <label htmlFor="email" className="contact__label">Email</label>
                                <input
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    type="email"
                                    className="contact__input theme--3" />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
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