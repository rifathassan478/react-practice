import React, { useEffect, useState } from 'react'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])



  return (
    <div>Players: {players.length}</div>
  )
}

export default Players