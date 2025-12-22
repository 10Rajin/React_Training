import React from 'react'

export const ParentComponent = ({children}) => {
  return (
    <div>
        <h1>Nav Bar</h1>
        {children}
        <footer>Footer</footer> 
    </div>
  )
}
export default ParentComponent
