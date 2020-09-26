import React from "react"
import styled from "styled-components"

const Selectyear = ({ onChange }) => {
  let maxOffset = 10
  let thisYear = new Date().getFullYear()
  let allYears = []
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>
  })
  return <Select onChange={onChange}>{yearList}</Select>
}

const Select = styled.select`
  position: absolute;
  top: 55px;
  right: 0px;
  font-size: 1.5rem;
`

export default Selectyear
