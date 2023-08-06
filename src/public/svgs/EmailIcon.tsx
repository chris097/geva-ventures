import React from 'react'

interface EProps {
  width: string
  height: string
  fillColor: string
}

const EmailIcon = ({width, height, fillColor}: EProps) => {
  return (
      <div>
          <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 0.862549H3C1.3425 0.862549 0.015 2.26442 0.015 3.99521L0 22.7912C0 24.522 1.3425 25.9238 3 25.9238H27C28.6575 25.9238 30 24.522 30 22.7912V3.99521C30 2.26442 28.6575 0.862549 27 0.862549ZM27 7.12787L15 14.9595L3 7.12787V3.99521L15 11.8269L27 3.99521V7.12787Z" fill={fillColor} />
</svg>

    </div>
  )
}

export default EmailIcon;