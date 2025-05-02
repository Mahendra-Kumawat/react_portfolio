import React from 'react'

const Wrapper = ({children , className}) => {
  return (
    <main className={`max-w-[1200px] w-full mx-auto px-4 ${className}`}>
      {
        children
      }
    </main>
  )
}

export default Wrapper