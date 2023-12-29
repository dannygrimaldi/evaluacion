import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Button } from "@nextui-org/react";
import Layout from '../hocs/layouts/Layout';
import { useTheme } from 'next-themes';

import '../styles/index.css';

const LoginPage = () => {
    const { theme } = useTheme();
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Resetear el mensaje de error en cada intento de inicio de sesión
        setError(null);

        try {
            await loginUser(e);
        } catch (error) {
            setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Layout>
                <main className="flex-grow overflow-auto">
                    <div className="relative max-w-7xl mx-auto z-10">
                        <div className="container">
                            <div className={`login-register ${
theme === 'dark'? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'
        : 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200'
    } transition duration-400   items-center   `}>
  
                            
                            
                            
     
                                <div className="nav-buttons"></div>
                                <div className="form-group">
                                    <form id="linform" onSubmit={handleLogin}>
                                        <label htmlFor="username" className={`${theme === 'dark'? 'text-white': 'text-black'}`}>usuario</label>
                                        <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" className="text-black" />
                                        <label htmlFor="password" className={`${theme === 'dark'? 'text-white': 'text-black'}`}>contraseña</label>
                                        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" className="text-black" />
                                        <Button type="submit" color="primary" >Enviar</Button>
                                    </form>
                                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export default LoginPage;
