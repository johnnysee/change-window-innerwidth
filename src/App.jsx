import React, { useState, useEffect } from 'react'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div>
    <h1>Your inner window width is:</h1>
      <h2>
      {windowWidth}
      </h2>
    </div>
  )
}

export default App
