import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './components/Card'
import { PaymentForm } from './components/PaymentForm'

function App() {

  return (
    <div className='container'>
      <Card />
      <PaymentForm/>
    </div>
  ) 
}

export default App
