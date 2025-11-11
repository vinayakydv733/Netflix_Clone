import React from 'react';
import logo from '../assets/logo.png';
import bg from '../assets/background_banner.jpg';
import { useState } from 'react';
import { login, signup } from '../firebase'


const Login = () => {

    const [SignState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async (event)=>{
        event.preventDefault();
        if(SignState==="Sign In"){
            await login(email, password);
        }else{
            await signup(name,email,password);
        }
    }

    return (
        <div className="relative h-screen w-screen">
            <img
                src={bg}
                alt="Netflix Background"
                className="absolute inset-0 h-full w-full object-cover -z-10 opacity-50"
            />
            <header className="px-12 py-6">
                <img src={logo} alt="Netflix Logo" className="h-8" />
            </header>
            <div className="flex justify-center">
                <div className="bg-black/75 p-16 self-center mt-2 rounded-md w-full max-w-md">
                    <h1 className="text-white text-3xl mb-6 font-bold">{SignState}</h1>
                    <form className="flex flex-col gap-4">
                        {SignState === "Sign Up" ? <input
                            value={name} onChange={(e) => {setName(e.target.value)}}
                            type="text" placeholder='Enter Your Name'  className="p-4 bg-neutral-700 rounded-md text-white w-full focus:outline-none" /> : <></>}
                        <input
                            value={email} onChange={(e) => {setEmail(e.target.value)}}
                            type="email"
                            placeholder="Email or phone number"
                            className="p-4 bg-neutral-700 rounded-md text-white w-full focus:outline-none"
                        />
                        <input
                            value={password} onChange={(e) => {setPassword(e.target.value)}}
                            type="password"
                            placeholder="Password"
                            className="p-4 bg-neutral-700 rounded-md text-white w-full focus:outline-none"
                        />
                        <button
                        onClick={user_auth}
                            type="submit"
                            className="bg-red-600 py-3 text-white rounded-md w-full mt-6 font-bold hover:bg-red-700 transition"
                        >
                            {SignState}
                        </button>
                        <div className="flex justify-between items-center text-sm text-neutral-500 mt-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-1" defaultChecked />
                                Remember me
                            </label>
                            <a href="#" className="hover:underline">Need help?</a>
                        </div>
                    </form>

                    <div className="text-neutral-500 mt-12">
                        {SignState === "Sign In" ? <p>New to Netflix? <span className='text-white font-bold cursor-pointer' onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
                            : <p>Already have an account? <span  className='text-white font-bold cursor-pointer' onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
                    </div>
                    <p className="text-neutral-500 text-xs mt-4">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Learn more.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;