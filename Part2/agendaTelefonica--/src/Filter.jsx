import { IoSearchSharp } from "react-icons/io5";

const Filter = ({ filter, setFilter }) => {

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
  return (
    <div> 
      <h2>Filter Contact</h2> 
      <div className="input-group ">
      <span className="input-group-text" id="basic-addon1"><IoSearchSharp /></span>
      <input  type="text" className="form-control m-0" value={filter} onChange={handleFilter} placeholder="Search contact" />
    </div>
    </div>
    


  )
}
export default Filter