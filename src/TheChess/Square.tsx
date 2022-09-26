import React from 'react'

export const Square = ({ black }: {black:boolean}) => {
  const bgClass = black ? 'square-black' : 'square-white'

  return (
    <div className={`${bgClass} board-square`} />
  )
}
