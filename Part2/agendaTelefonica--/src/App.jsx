import { useState } from 'react'
import Name from './Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    //checks if the name already exists | Case sensitive
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject)) // concat creates a new copy of the array with the new element added at the end
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> {persons.map(person =>
        <Name key={person.name} name={person.name} />)}
      </ul>

      ...
    </div>
  )
}

export default App