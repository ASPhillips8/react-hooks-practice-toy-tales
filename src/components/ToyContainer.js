import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, onDeleteToy }) {
  const displayedToys = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} />
  })
  return <div id="toy-collection">{displayedToys}</div>
}

export default ToyContainer
