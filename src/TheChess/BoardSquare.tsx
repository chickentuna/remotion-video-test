import React, { useEffect, useState } from 'react'
import { Square } from './Square'

export interface BoardSquareProps {
  black: boolean
}
export const BoardSquare = ({
  black,
}: BoardSquareProps) => {
  return (
    <div className="board-square">
      <Square black={black} />
    </div>
  )
}
