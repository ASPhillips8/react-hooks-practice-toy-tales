import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys }) {
  const displayedToys = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} />
  })
  return <div id="toy-collection">{displayedToys}</div>
}

export default ToyContainer
