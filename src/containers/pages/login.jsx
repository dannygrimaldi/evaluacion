import Footer from '../../components/footer';
import React, { useState } from 'react';
import Header from '../../components/header';
import Layout from '../../hocs/layouts/Layout';


function Login() {
  const [activeForm, setActiveForm] = useState('login');

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const switchToRegister = () => {
    setActiveForm('register');
  };

  return (
    <div className="flex flex-col min-h-screen">
       <Header />
       <Layout>
      <main className="flex-grow overflow-auto">
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="container">
            <div className="login-register">
              <div className="nav-buttons">
                <button onClick={switchToLogin} className={activeForm === 'login' ? 'active' : ''}>Inicio de sesión</button>
                {/*<button onClick={switchToRegister} className={activeForm === 'register' ? 'active' : ''}>Register</button> */}
              </div>
              <div className="form-group">
                {activeForm === 'login' && (
                  <form action="" id="loginform">
                    <label htmlFor="username">usuario</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">contraseña</label>
                    <input type="text" id="password" />
                    <input type="submit" value="Submit" className="submit" />
                  </form>
                )}
                {/*{activeForm === 'register' && (
                  <form action="" id="registerform">
                    <label htmlFor="fullname">fullname</label>
                    <input type="text" id="fullname" />
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" />
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" />
                    <label htmlFor="confirmpassword">confirm password</label>
                    <input type="text" id="confirmpassword" />
                    <input type="submit" value="Submit" className="submit" />
                  </form>   
                )} */} 

              </div>
              <div id="forgot">
                <a href="">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Layout>
      <Footer />
    </div>
  );
}

export default Login;
