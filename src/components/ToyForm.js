import React, { useState } from "react"

function ToyForm({ onSubmitToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  })

  function handleFormChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFromSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newToyData) => onSubmitToy(newToyData))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFromSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
