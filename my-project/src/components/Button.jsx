import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <button className='flex justify-center items-center gap-2 py-4 px-7 rounded-full border font-montserrat text-lg text-white leading-none bg-coral-red border-coral-red'>
        {label}
        <img className='w-5 h-5 rounded-full ml-2' src={iconUrl} alt="icon" />
    </button>
  )
}

export default Button