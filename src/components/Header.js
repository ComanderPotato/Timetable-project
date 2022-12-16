import React from 'react'
import { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [clock, setClock] = useState({})
  function currentClock() {
    const currentDate = new Date();
    const dayOrNight = currentDate.getHours() > 12 ? 'PM' : 'AM';
    const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours()
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes()
    const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds()
    setClock({
      month: monthsOfYear[currentDate.getMonth()],
      dayOfWeek: daysOfWeek[currentDate.getDay()],
      day: currentDate.getDate(),
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      dayOrNight: dayOrNight
    })
  }

  (function() {
    setInterval(currentClock, 1000)
  })()
  let {month, dayOfWeek, day, hours, minutes, seconds, dayOrNight} = clock

  return (
    <header>
      <div className='header-clock'>{hours}:{minutes}:{seconds}{dayOrNight} {day}th of {dayOfWeek}, {month}</div>
    </header>
  )
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const monthsOfYear = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]