import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <h3 className="text-2xl md:text-3xl lg:text-4xl  text-[#666] font-bold w-fit py-1 my-4 border-b-2 border-b-blue uppercase mx-auto">
     {title}
    </h3 >
  )
}

export default SectionTitle