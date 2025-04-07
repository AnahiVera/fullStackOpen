
const PersonForm = ({ addContact, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addContact}>
        <div>
          
          <input
            value={newName}
            onChange={handleNameChange} 
            placeholder="Contact name"/>
            
        </div>
        <div>
          
          <input
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="Phone Number:"/>
            
        </div>
        <div className="d-grid gap-2"> 
          <button type="submit">Add</button>
        </div>
      </form>
  )
}

export default PersonForm