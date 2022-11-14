import { useCallback, useEffect, useState } from "react"
import useFetch from "./Hoot/useFetch"

const App = () => {

  const [ counter, setCounter] = useState(0)
  const [user , setUser]= useState([])

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')

  if(loading) return <div>cargando....</div> 
  if(error) return <div>{error}</div>

  return(
    <>
      <button onClick={() => setCounter( counter + 1) }> click: {counter}</button>
      <ul>
        {
          data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    </>
  )

 }    

 export default App