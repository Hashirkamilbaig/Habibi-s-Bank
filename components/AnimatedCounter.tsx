"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <CountUp end={amount} decimal='.' prefix='$' duration={2.75} decimals={2} className='w-full'/>
  )
}

export default AnimatedCounter