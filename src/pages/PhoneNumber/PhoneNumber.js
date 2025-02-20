import React from 'react'
export function PhoneNumberInput() {
  // your code here
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleInput = (e) => {
    let curr = e.target.value.replace(/\D/g,'');
    if(curr.length > 10) curr = curr.slice(0,10)
    if(curr.length > 6) curr = `${curr.slice(0,6)}-${curr.slice(6)}`
    if(curr.length > 3) curr = `(${curr.slice(0,3)})${curr.slice(3)}`
    setPhoneNumber(curr)
  }

  return <input data-testid="phone-number-input" 
  type="text"
  value={phoneNumber} 
  onChange={handleInput}
  />
}
