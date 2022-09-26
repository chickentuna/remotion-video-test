import React from 'react'
import { Img } from 'remotion'
import { svgPieces } from './media/pieces'

export const  Piece = ({
  type, color, x, y
}:{
  type: string 
  color: string
  x: number
  y: number
}) =>  {
  const pieceImg = require(`./assets/${type}_${color}.png`)
  return (
    <>
      <div
        className="piece-container"
        style={{
          position: 'absolute',
          top: y * 75,
          left: x * 75
        }}
      >
        <Img src={pieceImg} className="piece" />
      </div>
    </>
  )
}
