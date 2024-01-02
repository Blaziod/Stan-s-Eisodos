import React from 'react'

function UpcomingItem({eventName, image, date, description}) {
  return (
    <div className='ueItem'>
    <div style={{backgroundImage: `url(${image})`}}></div>
    <h3>{eventName}</h3>
    <h4>{date}</h4>
    <p>{description}</p>
      </div>
  )
}

export default UpcomingItem