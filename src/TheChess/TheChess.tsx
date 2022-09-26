import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion"
import { Chessboard } from "./Chessboard"
import { Piece } from './Piece'
import './TheChess.css'


export const TheChess = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig()
  const frame = useCurrentFrame()

  const px = interpolate(
    frame,
    [0, 30, 60, 90],
    [0, 1, 1, 2],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.ease),
      
    }
  );
  

  const backgroundCss = {
    backgroundImage: 'linear-gradient(to bottom, #45a247, #283c86)'
  }

  return (
    <AbsoluteFill>
      <div
        style={{
          ...backgroundCss,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width,
          height
        }}
      >
        
      <div className="board-container">
        <Chessboard />
        <Piece type='p' color='w' x={px} y={0}/>
        <Piece type='b' color='b' x={1} y={5}/>
      </div>

      </div>

    </AbsoluteFill>
  )
}