import React, { useState } from "react"

function ToyCard({ toy: { id, name, image, likes }, onDeleteToy }) {
  const [toyLikes, setToyLikes] = useState(likes)

  function handleLikes() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toyLikes + 1 }),
    })
      .then((response) => response.json())
      .then((likeData) => setToyLikes(likeData.likes))
      .catch((error) => console.error("Fetch error:", error))
  }

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
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleToyDelete}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
