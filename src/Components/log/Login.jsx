import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/MainContext';

const Login = () => {
  const { handelSignin, googleSign } = useContext(AuthContext)
  const navg = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    background: '#BD0507',
    color: 'black',
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    if (email === '' || password === '') {
      Toast.fire({
        icon: "error",
        title: 'All fields must be filled out.'
      });
      return
    }
    handelSignin(email, password)
      .then(user => {

        Toast.fire({
          icon: "success",
          title: `WelCome ${user.user.displayName} `
        });
        navg(location.state ? location.state : '/')

      })
      .catch(error => {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: error.code
        });
      })

  }
  const handelgoogle = () => {
    googleSign()
      .then((user) => {
        Toast.fire({
          icon: "success",
          title: `WelCome ${user.user.displayName} `
        });
        navg(location.state ? location.state : '/')

      })
      .catch(error => {
        Toast.fire({
          icon: "error",
          title: error.code
        });
      })
  }
  return (
    <div
      className="h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/b3.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <div className="text-center mb-6">
          <img
            src="https://img.icons8.com/ios-filled/100/joystick.png"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-title text-white font-semibold">
            Log In
          </h2>
        </div>
        <form onSubmit={handelSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-200 mb-2"
            >
              User Name or Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-200 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2  bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-opacity-80 text-white  font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>
        <button onClick={handelgoogle} aria-label="Login with Google" type="button" className="flex mt-5 items-center justify-center w-full p-2 space-x-4 border-[2px] border-primary ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
        <p className="text-center text-gray-300 mt-6 text-sm">
          Didnt have a Account  <Link to={'/register'} className='hover:text-primary duration-200 underline pl-1'> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;