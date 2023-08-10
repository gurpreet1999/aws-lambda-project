import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ CreateTskmodalToggle, isModalOpen, save}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {}

  const handleSave = (e) => {
    
    const numericId = Date.now()
    console.log(numericId)
    console.log(typeof numericId)
save(numericId,taskName,description)
CreateTskmodalToggle(false)


  }
  return (
    <Modal isOpen={ isModalOpen} toggle={ CreateTskmodalToggle}>
            <ModalHeader toggle={ CreateTskmodalToggle
            }>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {(e)=>setTaskName(e.target.value)} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {(e)=>setDescription(e.target.value)} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={ CreateTskmodalToggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
  )
}

export default CreateTask