import React from 'react'
import clsx from "clsx"
import Marker from './Marker'

const Button = ({icon,children,href,onClick,containerClassName,markerFill}) => {
    const inner=()=>(
        <>
        <div className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
        <span className='absolute -left-[1px]'><Marker fill={markerFill}/></span>
        {icon&&(
            <img src={icon} className='size-10 object-contain mr-5 z-10' alt="" />
        )}
        <span className='font-poppins base-bold text-p1 relative uppercase z-2'>{children}</span>
        </div>
        <span className='glow-before glow-after'></span>
        </>
    )
  return (
    <>
    {href?<a href={href} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group",containerClassName)}>{inner()}</a>
    :
    <button onClick={()=>onClick()} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group",containerClassName)}>{inner()}</button>}
    </>
  )
}

export default Button