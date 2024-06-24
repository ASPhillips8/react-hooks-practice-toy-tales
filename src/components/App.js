import React, { useEffect, useState } from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((toyData) => setToys(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  function handleNewToySubmit(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmitToy={handleNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  )
}

export default App
