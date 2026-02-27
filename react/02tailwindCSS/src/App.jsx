import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card2 from './components/cards.jsx'

export default function App() {
  return (
    <>
    <Card2 username="SHIKHAR" btnTxt="click me" />
    <Card2 username="JOHN" />
    </>
  )
}
