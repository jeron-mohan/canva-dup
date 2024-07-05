// import React from 'react';

import {  useState } from "react";
import {RxCross2} from "react-icons/rx"
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";




const Index = () => {
    const [show, setShow] = useState(false)
    const [type, setType] = useState('')
    const [state, setState] = useState({
        name:'',
        email:'',
        password:''
    })

    console.log(state);

    const inputHandle = (e) =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }
    return (
        <div className="bg-[#18191b] min-h-screen w-full">


            <div className={`w-screen ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627] flex justify-center items-center`}>
                <div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
                    <div onClick={() => setShow(false)} className="absolute right-4 top-4 text-xl cursor-pointer text-white"><RxCross2 /></div>

                   
                   {
                    type === 'login' && 
                    <>
                    <h2 className="text-white pb-4 text-center text-xl">Login</h2>

                    <form>
                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={inputHandle} value={state.email} name="email" id="email" placeholder="email" className=" bg-transparent px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500"  />
                        </div>

                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={inputHandle} value={state.password} name="password" id="password" placeholder="password" className=" bg-transparent px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500"  />
                        </div>

                        <div>
                            <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">Login</button>
                        </div>

                        <div className="flex py-4 justify-between items-center px-3">
                            <div className="w-[45%] h-[1px] bg-slate-500 "></div>
                            <div className=" w-[6%] text-center flex pb-1 px-1  text-white">or </div>
                            <div className=" w-[45%] h-[1px] bg-slate-500 ml-2 "></div>

                        </div>

                        <div className="pb-4">

                        <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white">
                            <span> <BiLogoGmail/></span>
                            <span>Login with gmail</span>
                            
                            
                            </button>

                        </div>

                        <div className="pb-4">

                        <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
                            <span> <FaFacebookF/></span>
                            <span>Login with facebook</span>
                            
                            
                            </button>

                        </div>
                    </form>
                    </>
                   }


                   {
                    type === 'signup' && 
                    <>
                    <h2 className="text-white pb-4 text-center text-xl">Signup</h2>

                    <form>
                    <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={inputHandle} value={state.name} name="name" id="name" placeholder="name" className=" bg-transparent px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500"  />
                        </div>
                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={inputHandle} value={state.email} name="email" id="email" placeholder="email" className=" bg-transparent px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500"  />
                        </div>

                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={inputHandle} value={state.password} name="password" id="password" placeholder="password" className=" bg-transparent px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500"  />
                        </div>

                        <div>
                            <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">Signup</button>
                        </div>

                        <div className="flex py-4 justify-between items-center px-3">
                            <div className="w-[45%] h-[1px] bg-slate-500 "></div>
                            <div className=" w-[6%] text-center flex pb-1 px-1  text-white">or </div>
                            <div className=" w-[45%] h-[1px] bg-slate-500 ml-2 "></div>

                        </div>

                        <div className="pb-4">

                        <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white">
                            <span> <BiLogoGmail/></span>
                            <span>Signup with gmail</span>
                            
                            
                            </button>

                        </div>

                        <div className="pb-4">

                        <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
                            <span> <FaFacebookF/></span>
                            <span>Signup with facebook</span>
                            
                            
                            </button>

                        </div>
                    </form>
                    </>
                   }
                   
                    
                </div>

            </div>


           <div className="bg-[#212223] shadow-md">
                <div className="w-[93%] m-auto py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[80px] h-[48px]">
                            <img className="w-full h-full" src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
                        </div>
                        <div className="flex gap-4">
                            <button onClick={()=> {setType('login'); setShow(true)}} className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium" >Signin</button>
                            <button onClick={()=> {setType('signup'); setShow(true)}} className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium" >Signup</button>

                        </div>
                    </div>
                </div>
           </div>

        <div className="w-full h-full justify-center items-center p-4">
            <div className="py-[170px] flex justify-center items-center flex-col gap-6">
                <h2 className="text-5xl text-[#c7c5c5] font-bold">What will you design today</h2>

                <span className=" text-[#aca9a9] text-2xl font-medium">Design easy designs</span>

                <button onClick={()=> {setType('signup'); setShow(true)}} className="py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium" >Signup for free</button>

            </div>

        </div>

        </div>
    );
};

export default Index;