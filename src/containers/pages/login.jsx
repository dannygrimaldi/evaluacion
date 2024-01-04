import Footer from '../../components/footer';
import React, { useContext, useState } from 'react';
import Header from '../../components/header';
import Layout from '../../hocs/layouts/Layout';
import AuthContext from '../../context/AuthContext';
import { useTheme } from 'next-themes';



/* function Login() {
  const [activeForm, setActiveForm] = useState('login');

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const switchToRegister = () => {
    setActiveForm('register');
  }; */


  const Login = () => {

  const [activeForm, setActiveForm] = useState('login');

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const switchToRegister = () => {
    setActiveForm('register');
  };
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
       <Header />
       <Layout>
      <main className="flex-grow overflow-auto">
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="container">
            <div className="login-register">
              <div className="nav-buttons">
                <button onClick={switchToLogin} className={activeForm === 'login' ? 'active' : ''}>Login</button>
                <button onClick={switchToRegister} className={activeForm === 'register' ? 'active' : ''}>Register</button>
              </div>
              <div className="form-group">
                {activeForm === 'login' && (
                  <form action="" id="loginform" onSubmit={handleLogin}>
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                    <input type="submit" value="Submit" className="submit" />
                  </form>

)}
{error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                {activeForm === 'register' && (
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
                )}

              </div>
              <div id="forgot">
                <a href="">forgot password?</a>
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