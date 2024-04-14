import React from 'react'
import { useState } from 'react'

const CategoryButtons = ({categoryElement, category, setCategory}) => {

  const [active, setActive] = useState(false)

    return(
        <div>
          <input type="radio" name={categoryElement.category} checked={category === categoryElement.category} id={categoryElement.category} value={categoryElement.category} className='hidden' onClick={()=>setCategory(categoryElement.category)}/>
         <label htmlFor={categoryElement.category} onClick={()=>setActive(!active)}>
           <div className={` ${active ? 'text-[#eee] bg-[#090909]' : 'bg-[#eee]'} w-[100px] aspect-square rounded-3xl hover:text-[#eeeeee] hover:bg-[#090909]`}>
             <div className=' relative top-4'>
                 <div className=' text-5xl mt-4 w-fit mx-auto'>{categoryElement.icon}</div>
                 <p className=' text-center font-[600]'>{categoryElement.category} </p>
             </div>
         </div>
         </label>
       </div>
       )
}

export default CategoryButtons