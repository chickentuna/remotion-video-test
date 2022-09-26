import React, { useEffect, useState } from 'react'
import { BoardSquare } from './BoardSquare'

export const Chessboard = () => {
  const currBoard = [...Array(8*8)]
  
  function getXYPosition(i:number) {
    const x = i % 8
    const y = Math.abs(Math.floor(i / 8) - 7)
    return { x, y }
  }

  function isBlack(i:number) {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
  }

  function getPosition(i: number) {
    const { x, y } = getXYPosition(i)
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][
      x
    ]
    return `${letter}${y + 1}`
  }
  return (
    <div className="board">
      {currBoard.map((piece, i) => (
        <div key={i} className="square">
          <BoardSquare
            black={isBlack(i)}
          />
        </div>
      ))}
    </div>
  )
}
