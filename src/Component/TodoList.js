import React, { useEffect, useState } from 'react'
import CreateTask from '../Modals/CreateTask'
import axios from 'axios';
import Card from './Card';

const TodoList = () => {

    const [isModalOpen, setisModalOpen] = useState(false);
    const [taskList, setTaskList] = useState([])

    const CreateTskmodalToggle = () => {
        setisModalOpen(!isModalOpen);
    }

    const fetchData=async()=>{
        const {data}= await axios.get('https://ub7borqbe2.execute-api.ap-south-1.amazonaws.com/dev/users')
       
     setTaskList(data.users.Items)
       }

    useEffect(()=>{


      fetchData()



    },[])


   
  
    const deleteTask=async(id)=>{

      const idd={
        id:id
      }
    const {data}=await axios.delete("https://ub7borqbe2.execute-api.ap-south-1.amazonaws.com/dev/users/",{
      data:idd
    })
console.log(data)

    }

    const updateListArray=async(obj)=>{

      
const updatedData={
  id:obj.id,
  updateKey1:"taskName",
  updateKey2:"description",
 updateValue1:obj.taskName,
  updateValue2:obj.description
}

const {data}=await axios.put("https://ub7borqbe2.execute-api.ap-south-1.amazonaws.com/dev/users/",updatedData)
console.log(data)
    }

const createTask=async(id,taskName,description)=>{
const body={
  id,
  taskName,
  description
}

 const {data}= await axios.post('https://ub7borqbe2.execute-api.ap-south-1.amazonaws.com/dev/users',body)
  setTaskList((prev)=>{
    return [...prev,data.Item]
  })
}

const saveTask=(id,taskName,description)=>{

createTask(id,taskName,description)




}

console.log(taskList.length)
  return (
    <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() =>  setisModalOpen(true)} >Create Task</button>
            </div>
            <div className = "task-container">
            {taskList.length > 0 && taskList.map((obj , index) => <Card  taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask  CreateTskmodalToggle={ CreateTskmodalToggle} isModalOpen = {isModalOpen} save = {saveTask}/>
        </>
  )
}

export default TodoList