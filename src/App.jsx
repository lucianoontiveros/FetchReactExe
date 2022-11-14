import { useCallback, useEffect, useState } from "react"

const App = () => {

  const [ counter, setCounter] = useState(0)
  const [user , setUser]= useState([])

  /* useEffect toma una funcion callback */

 const fetchData = useCallback(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  
  setUser(data)
 }, [])

 useEffect(() => {
  console.log('useEffect')
  fetchData()
 }, [])

  return(
    <>
      <button onClick={() => setCounter( counter + 1) }> click: {counter}</button>
      <ul>
        {
          user.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    </>
  )

 }    

 export default App