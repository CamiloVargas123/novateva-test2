import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/slices/search'

export default function Seach() {
  const [word, setWord] = useState<string>()
  const dispatch = useDispatch()

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(search({ value: word }))
  }

  return (
    <form onSubmit={(e) => onSearch(e)}>
      <input type="text" placeholder='Bsucar' onChange={(e) => setWord(e.target.value)} />
    </form>
  )
}
