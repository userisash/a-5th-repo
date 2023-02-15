import { useState } from 'react'
import reactLogo from './assets/react.svg'
import data from './Data'
import { getAllNames, getBefore1990 } from './Utils'
import Name from './Name'
import Card from './Card'
import './App.css'

function App() {
  const [names, setnames] = useState(getAllNames(data))
  const [before1990,setbefore1990] = useState(getBefore1990(data))
  return (
    <div className="App">
      <Name names={names} />
      <Card before1990={before1990} />
    </div>
  )
}

export default App
