import {useState,useEffect} from 'react'

import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [time,setTime] = useState(new Date())

  useEffect( () => {
    const timerId = setInterval(() => {
         setTime(new Date())
    },1000)
    console.log("Effect executed and interval scheduled")
    return () => {
      clearInterval(timerId)
      console.log("Cleanup function executed")
    }
  },[])
  return(
  <ClockContainer>
    <Heading>Clock</Heading>
    <ClockImage
      src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
      alt="clock"
    />
    <Time>{time.toLocaleTimeString()}</Time>
  </ClockContainer>
)
}
export default Clock
