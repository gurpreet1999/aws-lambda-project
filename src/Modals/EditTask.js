import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({isEditModalOpen,editModalToggle,updateTask,taskObj }) => {
  const [taskName, setTaskName] = useState(taskObj.taskName);
  const [description, setDescription] = useState(taskObj.description);




  const handleUpdate = (e) => {

    updateTask({id:taskObj.id,taskName,description})

}


  return (
    <Modal isOpen={isEditModalOpen} toggle={editModalToggle}>
    <ModalHeader toggle={editModalToggle}>Update Task</ModalHeader>
    <ModalBody>
    
            <div className = "form-group">
                <label>Task Name</label>
                <input type="text" className = "form-control" value = {taskName} onChange ={(e)=>setTaskName(e.target.value)}  name = "taskName"/>
            </div>
            <div className = "form-group">
                <label>Description</label>
                <textarea rows = "5" className = "form-control" value = {description} onChange = {(e)=>setDescription(e.target.value)} name = "description"></textarea>
            </div>
        
    </ModalBody>
    <ModalFooter>
    <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
    <Button color="secondary" onClick={editModalToggle}>Cancel</Button>
    </ModalFooter>
</Modal>
  )
}

export default EditTask