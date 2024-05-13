import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "./routes";
import {InfinitySpin} from "react-loader-spinner";

const AppRouter = () => {
    const {userStore} = useContext(Context)
    const isAuth = userStore.isAuth
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        userStore.checkAuth()
            .then((res) => {
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setInterval(() => {
                    setLoading(false)
                }, 100)
            })
    }, [])

    if (loading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <InfinitySpin
                    width='200'
                    color="#5B9179"
                />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                {isAuth && authRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} exect/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} exect/>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;