import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const Chat = () => {
  const [socket] = useState(() => io(':8000'))
  useEffect(() => {
    console.log('Is this running?')
    socket.on('message', (data) => console.log(data))
  }, [])
  return <div>Chat Test</div>
}

export default Chat
