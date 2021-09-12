import React from 'react'

const Progress_bar = ({ bgcolor, progress, height }) => {

  const Parentdiv = {
    height: height,
    maxWidth: '1000px',
    backgroundColor: 'lightGray',
    borderRadius: 40,
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50
  }

  const Childdiv = {
    height: '100%',
    maxWidth: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}$`}</span>
      </div>
    </div>
  )
}

export default Progress_bar;