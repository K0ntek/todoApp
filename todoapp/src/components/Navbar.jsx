import React from 'react'
import toggleForm from './TodoList'
import { VscGraphLine } from "react-icons/vsc";
import { GrHomeOption } from "react-icons/gr";

const Navbar = ({toggleForm}) => {
  const navBar = [
    {
      icon: <GrHomeOption/>,
      name: 'home'
    },
    {
      icon: <VscGraphLine/>,
      name: 'statistics'
    },
  ]
  return (
   <div className=' sticky top-[5%]'>
     <div className=' space-y-4'>
      <h1 className=' text-center text-[#555] text-3xl'>To-do list</h1>

      <ul>
        {navBar.map((nav, i)=>{
          return(
            <div className=' py-2 text-white px-3 hover:bg-white/40 cursor-pointer'>
              <li className='flex text-2xl w-fit ml-8'><span className=' mx-1 bg-white/20 p-2 text-xl rounded-full'>{nav.icon}</span> {nav.name}</li>
            </div>
          )
        })}
      </ul>

      <h1 className='text-black px-5 py-2 bg-[#20ff7d] font-[600] text-xl mx-auto rounded-full w-fit cursor-pointer' onClick={()=>toggleForm()}> + Add task</h1>
      <div className=' flex space-x-3 text-white hover:bg-white/20 py-2 ps-3 w-full cursor-pointer'>
      <div className=' w-[45px] h-[45px] bg-[#fafafa] rounded-full'></div>
          <h1 className=' text-lg mt-1'>user</h1>
    </div>
    </div>
   </div>
  )
}

export default Navbar