import React from 'react'

export default function whiteGoldNakshi({ top, left }) {
    return (
        <>
            <div className=" md:flex hidden  justify-center items-center absolute   h-screen ">
                <div className={`animate-custom-spin  `} style={{ top: `${top + 'vh'}`, left: `${left + 'vw'}` }}>
                    <img
                        src='https://static.vecteezy.com/system/resources/previews/011/419/651/non_2x/mandalas-geometric-pattern-warm-mandala-rainbow-flower-of-life-with-lotus-flower-of-life-in-lotus-free-png.png'
                        // src='https://static.vecteezy.com/system/resources/previews/026/498/739/non_2x/mandala-design-golden-mandala-with-white-and-gold-flowers-on-transparent-background-ai-generated-free-png.png' // Replace with your image URL
                        alt="Rotating Image"
                    // className=' w-100 h-auto'
                    />
                </div>
            </div>
            {/* <img className='whiteGoldNakshi' src= /> */}
        </>
    )
}

