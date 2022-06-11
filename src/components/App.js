// create your App component here
import React, { useEffect, useState } from "react"

export default function App() {
  const [image, setImage] = useState("")
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => [console.log(data), setImage(data.message)])
  }, [])
  return (
    <>{image === "" ? <p>Loading...</p> : <img src={image} alt="Cute Dog" />}</>
  )
}
