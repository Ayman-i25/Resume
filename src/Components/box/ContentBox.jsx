import React from 'react'

const ContentBox = ({children}) => {
  return (
    <div style={{padding:'20px', background:'white', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius:'6px'}}>
      {children}
    </div>
  )
}

export default ContentBox
