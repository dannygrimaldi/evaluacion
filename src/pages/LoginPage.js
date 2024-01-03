import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Button } from "@nextui-org/react";

import '../styles/index.css'



const LoginPage = () => {

    let { loginUser } = useContext(AuthContext)

    return (
        <div className="flex flex-col min-h-screen">
           
            <main className="flex-grow overflow-auto">
                <div className="relative max-w-7xl mx-auto z-10">
                    <div className="container">
                        <div className="login-register">
                            <div className="nav-buttons">
                            </div>
                            <div className="form-group">
                                <form id="linform" onSubmit={loginUser} >
                                    <label htmlFor="username">usuario</label>
                                    <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" class="text-black" />
                                    <label htmlFor="password">contraseña</label>
                                    <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" class="text-black" />
                                    <Button type="submit" color="primary" >Enviar</Button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
        </div>
    )
}

export default LoginPage