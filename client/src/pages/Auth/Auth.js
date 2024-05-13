import React, {useContext, useState} from 'react';
import styles from './Auth.module.css'
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import backgroundImage from '../../assets/images/cones_bg.jpg'
import closeIcon from '../../assets/icons/black/close.svg'
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../router/consts";
import {Context} from "../../index";

const emptyUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = ({action}) => {

    const {userStore} = useContext(Context)

    const [user, setUser] = useState(emptyUser)

    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault()
        navigate(LOGIN_ROUTE)
    }

    const registrationHandler = (e) => {
        e.preventDefault()
        navigate(REGISTRATION_ROUTE)
    }

    const registration = (e) => {
        e.preventDefault()
        console.log(user)
        userStore.registration(user.name, user.surname, user.email, user.password)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    switch (action) {
        case 'login':
            return (
                <div className={styles.page}>
                    <div className={styles.content_side}>
                        <div className={styles.close}>
                            <img src={closeIcon} alt=""/>
                        </div>
                        <form>
                            <h1>Войти</h1>
                            <p>Для продолжения войдите в аккаунт</p>
                            <Input
                                type={'email'}
                                label={'Почта'}
                                placeholder={'ivan@mail.ru'}
                                state={user.email}
                                setState={(e) => setUser({...user, email: e.target.value})}
                            />
                            <Input
                                type={'password'}
                                label={'Пароль'}
                                placeholder={'********'}
                                state={user.password}
                                setState={(e) => setUser({...user, password: e.target.value})}
                            />
                            <div className={styles.box}>
                                <button className={styles.button}>
                                    Продолжить
                                </button>
                                <button className={styles.outer_button} onClick={registrationHandler}>
                                    Создать аккаунт
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.image_side} style={{background: `url(${backgroundImage})`}}/>
                </div>
            );
        case 'registration':
            return (
                <div className={styles.page}>
                    <div className={styles.content_side}>
                        <div className={styles.close}>
                            <img src={closeIcon} alt=""/>
                        </div>
                        <form>
                            <h1>Регистрация</h1>
                            <p>Для продолжения создайте аккаунт</p>
                            <div className={styles.inputs_box}>
                                <Input
                                    type={'text'}
                                    label={'Имя'}
                                    placeholder={'Иван'}
                                    state={user.name}
                                    setState={(e) => setUser({...user, name: e.target.value})}
                                />
                                <Input
                                    type={'text'}
                                    label={'Фамилия'}
                                    placeholder={'Иванович'}
                                    state={user.surname}
                                    setState={(e) => setUser({...user, surname: e.target.value})}
                                />
                            </div>
                            <Input
                                type={'email'}
                                label={'Почта'}
                                placeholder={'ivan@mail.ru'}
                                state={user.email}
                                setState={(e) => setUser({...user, email: e.target.value})}
                            />
                            <Input
                                type={'password'}
                                label={'Пароль'}
                                placeholder={'********'}
                                state={user.password}
                                setState={(e) => setUser({...user, password: e.target.value})}
                            />
                            <Input
                                type={'password'}
                                label={'Подтверждение пароля'}
                                placeholder={'********'}
                                state={user.confirmPassword}
                                setState={(e) => setUser({...user, confirmPassword: e.target.value})}
                            />
                            <div className={styles.box}>
                                <button className={styles.button} onClick={registration}>
                                    Создать аккаунт
                                </button>
                                <button className={styles.outer_button} onClick={loginHandler}>
                                    Войти
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.image_side} style={{background: `url(${backgroundImage})`}}/>
                </div>
            );
    }

};

export default Auth;