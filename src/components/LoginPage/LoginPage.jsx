import React from 'react'
import {useForm} from 'react-hook-form';
import Cookies from 'js-cookie'
import {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {ErrorHelper} from "../common/ErrorHepler/ErrorHelper";
import {emailPattern, pageDomain, passwordPattern} from "../../bll/config";
import {generateToken} from "../../bll/checkDays";

export const LoginPage = () => {
    const history = useHistory()
    useEffect(() => {
        if (!!Cookies.get('tokenUser')) {
            history.push(pageDomain)
        }
    }, [])

    const onSubmit = () => {
        Cookies.set('tokenUser', generateToken(), {expires: 1})
        history.push(pageDomain)
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onBlur'
    });

    return (
        <div className='LoginPage'>
            <form className='Hotel__form text-center' onSubmit={handleSubmit(onSubmit)}>
                <h3>Simple Hotel Check</h3>
                <div className="input-group">
                    <label className='form-label' htmlFor="username">Логин</label>
                    <input
                        {...register(
                            'login', {
                                required: 'Логин обязателен',
                                pattern: {
                                    value: emailPattern,
                                    message: 'Email pattern be like: example@test.com'
                                }
                            })}
                        defaultValue='example@test.com'
                        className='form-control'
                        type="email"
                    />
                    <ErrorHelper type={errors?.login}></ErrorHelper>
                </div>

                <div className="input-group">
                    <label className='form-label' htmlFor="password">Пароль</label>
                    <input
                        {...register('password', {
                            required: 'Пароль обязателен',
                            pattern: {
                                value: passwordPattern,
                                message: 'Минимум 8 символов'
                            }
                        })}
                        defaultValue='12345678'
                        className='form-control'
                        type="password"
                        id="password"
                    />
                    <ErrorHelper type={errors?.password}></ErrorHelper>
                </div>

                <button
                    className='btn btn-hotel btn-w100'
                    type='submit'
                >
                    Войти
                </button>
            </form>
            <div className="LoginPage__bg"></div>
        </div>
    )
}
