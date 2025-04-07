import { useState, useEffect } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Name from './Name'
import Filter from './Filter'
import PersonForm from './PersonForm'
import contactService from './services/contacts'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  useEffect(() => {
    console.log('effect')
    contactService
      .getAll()
      .then(initialContacts => {
        console.log('promise fulfilled')
        setPersons(initialContacts)
      })
      .catch(() => {
        toast.error('Error fetching contacts')
      })
  }, [])
  console.log('render', persons.length, 'contacts')




  const addContact = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }
    const existingContact = persons.find(person => person.name === newName)
    //checks if the name already exists | Case sensitive
    if (existingContact) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        contactService
          .update(existingContact.id, newObject)
          .then(updatedContact => {
            setPersons(persons.map(person => person.id !== existingContact.id ? person : updatedContact))
            setNewName('')
            setNewNumber('')
            toast.success(`Updated contact ${newName}`)
          })
          .catch(() => {
            toast.error(`Information of ${newName} has already been removed from server`)
          })        
    } else {
      contactService
        .create(newObject)
        .then(createdContact => {
          setPersons(persons.concat(createdContact))
          setNewName('')
          setNewNumber('')
          toast.success(`Added contact ${newName}`)
        })
        .catch(error => {
          console.log(error.response.data.error)
          toast.error('Number must be at least 8 digits')
        })  
    }
  }

  const handleDelete = (id) => {
    console.log('delete', id)
    contactService
      .deleteContact(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        toast.success(`Deleted contact`)
      })
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

    return (
      <div className="container">
        <h1>Phonebook</h1>
        
        <ToastContainer />
        
        
        
        <div className="section">
          <h2>Add a new contact</h2>
          <PersonForm 
            addContact={addContact} 
            newName={newName} 
            handleNameChange={handleNameChange} 
            newNumber={newNumber} 
            handleNumberChange={handleNumberChange} 
          />
        </div>

        <div className="section">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        
        <div className="section">
  <h2>Contacts</h2>
  <ul className="contact-list">
    {personsToShow.map(person => (
      <li key={person.id} className="contact-item d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center p-3 border-bottom">
        {/* Name with icon */}
        <div className="d-flex flex-column align-items-center align-items-md-start mb-2 mb-md-0">
          <div className="d-flex align-items-center gap-2">
            <IoMdContact className="contact-icon" />
            <span className="contact-info text-center text-md-start">{person.name}</span>
          </div>
          {/* Number - shown below name on mobile */}
          <span className="contact-number mt-1 ms-4 ms-md-0">{person.number}</span>
        </div>
        
        {/* Delete button - centered on mobile, aligned right on desktop */}
        <button 
          type="button" 
          className="delete-btn mt-2 mt-md-0"
          onClick={() => handleDelete(person.id)}
        >
          <FaTrashAlt />
        </button>
      </li>
    ))}
  </ul>
</div>
      </div>
    )
}

export default App