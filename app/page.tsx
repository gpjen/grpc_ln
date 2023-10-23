'use client'
import { useState } from "react"

export default function Home() {
  const [count, setCouont] = useState<number>(0)

  const increment = () => {
    
    setCouont(count + 1)}
    console.log(count);
  const decrement = () => setCouont(count - 1)
  return (
    <>
      <span onClick={increment}>+</span>
      <h2>Counter : {count}</h2>
      <span onClick={decrement}>-</span>
    </>
  )
}
