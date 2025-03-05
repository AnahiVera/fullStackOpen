import { useState, useEffect } from 'react'
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
          })
    } else {
      contactService
        .create(newObject)
        .then(createdContact => {
          setPersons(persons.concat(createdContact))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDelete = (id) => {
    console.log('delete', id)
    contactService
      .deleteContact(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
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
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />


      <h2>Add a new contact</h2>
      <PersonForm addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />


      <h2>Numbers</h2>

      <ul> {personsToShow.map(person =>
        <Name key={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id)} />)}
      </ul>



      ...
    </div>
  )
}

export default App