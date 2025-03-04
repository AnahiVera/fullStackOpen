import { useState, useEffect } from 'react'
import Name from './Name'
import Filter from './Filter'
import PersonForm from './PersonForm'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'contacts')


  const addContact = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }
    //checks if the name already exists | Case sensitive
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newObject)) // concat creates a new copy of the array with the new element added at the end
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
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
        <Name key={person.name} name={person.name} number={person.number} />)}
      </ul>

      ...
    </div>
  )
}

export default App