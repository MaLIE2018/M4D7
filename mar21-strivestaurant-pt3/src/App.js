import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'
import React, {useState, useEffect} from 'react'


const App = () => {
  const [seconds,setIndex] = useState(1)


  useEffect(() =>{
    const timer  = setInterval(() => setIndex(seconds+1),3000)

    return () => clearInterval(timer)
  }
  )

  return (
    <div>
      {}
      <MyNavBar title={seconds%2?"Strivestaurant":null}/>
      <Home />
    </div>
  )
}
export default App
