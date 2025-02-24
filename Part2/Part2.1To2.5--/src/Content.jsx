const Part = (props) => {
  console.log(props)
 return (
     <p>
        {props.name} {props.exercises}
     </p>
 )

}

const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
          {/* props de Content
          parts del array en app 
          map para iterar sobre cada parte del array, que son 3 y por cada uno crea una copia del componente */}
      </div>
    )
  }
  
  export default Content