import React from "react"

const Selectyear = () => {
  let maxOffset = 10
  let thisYear = new Date().getFullYear()
  let allYears = []
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>
  })
  return (
    <>
      <select>{yearList}</select>
    </>
  )
}

export default Selectyear
