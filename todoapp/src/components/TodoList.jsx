import React from 'react'
import { useState, useEffect } from 'react'
import Todo from './Todo'
import gsap from 'gsap/all';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { IoClose } from "react-icons/io5";
import { WiTime8 } from "react-icons/wi";
import { LiaTasksSolid} from "react-icons/lia";
import { MdOutlineWork, MdPerson, MdSportsVolleyball,  MdDone } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { RiFilePaperFill } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import CategoryButtons from './CategoryButtons';

function TodoList () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [time, setTime] = useState('')
  const [watch, setWatch] = useState();
  const [currentDate, setCurrentDate] = useState(new Date())

  // const [active, setActive] = useState(false)

function taskChange(e){
  setTask(e.target.value)
}

function timeChange(e){
  setTime(e.target.value)
}


function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, task + ' • ' + time + ' • ' + category])
  setTask('')
  setTime('')
  setCategory('')
  // setActive(false)
  hideForm()
}

function handleDelete(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const toggleForm =()=>{
    gsap.to('.form', {display: 'block', duration:.1})
  }

  const hideForm =()=>{
    gsap.to('.form', {display: 'none', duration:.1})
  }

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setWatch(date.toLocaleTimeString());
      }, 1000);
    }, []);

      const date = new Date()
      let hours = date.getHours()
      let greetingText
        if(hours >= 15){
          greetingText = "Good afternoon !"
        }
        if(hours >= 0 && hours <6){
          greetingText = "Good evening !"
        }
        if(hours >= 19){
          greetingText = "Good evening !"
        }
        if (hours>=6 && hours<15){
          greetingText = "Good morning !"
        }


    const categories =[
      {
        icon: <MdPerson/>,
        category: 'life'
      },
      {
        icon: <MdSportsVolleyball/>,
        category: 'sport'
      },
      {
        icon: <MdOutlineWork/>,
        category: 'work'
      },
      {
        icon: <RiFilePaperFill/>,
        category: 'education'
      },
    ]

  return (
    <div className=' font-inter bg-[#e6e6e6] rounded-3xl min-h-screen w-full relative'>

<div className=' form absolute z-[99] bg-gradient-to-r from-[#00ff6a] to-[#25ff80] rounded-3xl w-[80%] sm:w-[600px] hidden left-[50%] translate-x-[-50%] top-[10%]'>
      <div className=' relative'>
        <h1 className=' text-center text-4xl relative top-4'>Create a new task</h1>
          <IoClose className=' absolute right-4 top-4 text-xl' onClick={hideForm}/>
              <form className='mx-auto text-center w-[90%] sm:w-[500px] relative space-y-3 py-[50px]'>
                <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><LiaTasksSolid className=' absolute top-[50%] translate-y-[-50%]'/><input type='text' value={task} onChange={taskChange} placeholder='task' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><WiTime8 className=' absolute top-[50%] translate-y-[-50%]'/><input type='text' value={time} onChange={timeChange} placeholder='time' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                <h2 className=' text-2xl font-[600]'>Choose a category</h2>
                <div className=' flex flex-wrap gap-4 mx-auto justify-center'>
                    {categories.map((categoryElement, i) => <CategoryButtons category={category} setCategory={setCategory} categoryElement={categoryElement}/>)}
                </div>
                <button onClick={handleSubmit} className=' bg-black text-xl px-4 py-2 rounded-full text-white z-[99]'>+ Add</button>
              </form>
      </div>
      </div>
      <TypeAnimation
      sequence={[
        `${greetingText}`,
      ]}
      speed={50}
      className='text-5xl font-[600] mt-6 ml-6'
      cursor={0}
    />

      <div className='text-white bg-[#111] hover:bg-[#222] rounded-3xl cursor-pointer w-fit px-6 py-3 ml-6 relative mt-3' onClick={toggleForm}>
          <h1 className=' text-xl font-[200] text-center'> + Add task</h1>
      </div>

      <div className=' absolute top-0 right-5 font-[200]'>
        <h1>{currentDate.toLocaleDateString()}</h1>
      </div>

        <div className=' mx-auto rounded-2xl text-black mt-10 justify-center'>
            <div className=' flex flex-wrap gap-5 justify-center w-[98%] mx-auto'>
                <div className='bg-[#fafafa] rounded-3xl aspect-video relative sm:w-[30%] min-w-[300px] hover:bg-[#f0f0f0] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                  <CiClock2 className=' absolute right-5 top-2 text-3xl bg-[#111] text-white p-1 rounded-lg'/>
                  <div className='text-center  relative top-[50%] translate-y-[-50%]'>
                    <h1 className='text-3xl xl:text-4xl font-[300]'>Current time:</h1>
                    <h1 className=' text-4xl lg:text-5xl font-[100] py-3'>{watch}</h1>
                  </div>
                </div>

                <div className='text-black bg-[#00ff6a] p-4 aspect-video rounded-3xl cursor-pointer relative sm:w-[30%] min-w-[300px] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                <LiaTasksSolid className=' absolute right-5 top-2 text-4xl text-[#111] p-1 rounded-lg'/>
                  <div className=' relative top-[50%] translate-y-[-50%] space-y-3'>
                    <h1 className=' text-3xl xl:text-4xl text-center mt-4'> Total tasks</h1>
                    <h1 className=' text-center text-7xl rounded-lg w-fit px-5 py-2 mx-auto'>{todos.length}</h1>
                  </div>
                </div>

                <div className='text-black bg-[#fff] p-4 aspect-video rounded-3xl relative sm:w-[30%] min-w-[300px] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                <MdDone  className=' absolute right-5 top-2 text-4xl text-[#111] p-1 rounded-lg'/>
                  <div className=' relative top-[50%] translate-y-[-50%] space-y-3'>
                    <h1 className=' text-3xl xl:text-4xl text-center mt-4'> Tasks complited</h1>
                    <h1 className=' text-center text-7xl rounded-lg w-fit px-5 py-2 mx-auto'>{0}</h1>
                  </div>
                </div>
            </div>

        <div className=' text-black py-10 rounded-2xl relative top-[-20px] w-[96%] mx-auto grid grid-cols-2 gap-6 '>
          <div className=' bg-[#fafafa] rounded-3xl h-[500px]'>
            <h1 className=' text-5xl font-[500] m-4'>Tasks</h1>
             <div className=' space-y-4 overflow-y-scroll h-[400px] pb-3 tasksWrapper'>
             {todos.map((todo, index) => (
                <>
                    <div key={index} className={` bg-[#111] text-white rounded-2xl p-4 w-4/5 relative mx-auto hover:text-[#090909] hover:bg-[#20ff7d]`}>
                        <p className='font-[600]'>{todo}</p>
                        <div className='absolute right-2 text-xl top-[50%] translate-y-[-50%] flex'>
                        {/* <button onClick={() =>handleUpdate(index)} className=' hover:text-black'><MdModeEdit/></button> */}
                            <button onClick={() =>handleDelete(index)} className=' hover:text-red-600'><IoClose/></button>
                      </div>
                    </div>
                </>
            ))}
             </div>
          </div>
          <div className=' bg-[#090909] aspect-video rounded-3xl w-full mx-auto p-4 h-[500px]'>
          <h1 className=' text-5xl font-[500] m-4 text-white'>Choose date</h1>
          <Calendar />
          </div>
        </div>

        <div className=' w-full mx-auto bg-[#02ff6c] aspect-video rounded-b-2xl rounded-t-3xl'>
            <h1 className=' text-5xl font-[400] p-5'>Statistics</h1>
        </div>
    </div>
    </div>
  )
}

export default TodoList;