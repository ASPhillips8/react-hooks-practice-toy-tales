import React from "react"

function ToyCard({ toy: { id, name, image, likes }, onDeleteToy }) {
  function handleToyDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => console.error("Fetch error:", error))
    onDeleteToy(id)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleToyDelete}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
