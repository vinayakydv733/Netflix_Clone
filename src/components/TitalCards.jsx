import React from 'react'
import cards_data from '../assets/cards/Cards_data'
import './App.css'

const TitalCards = ({tital}) => {
    return (
        <div className='mt-12 mb-8 '>
            <h1 className='mb-2 text-2xl font-bold text-white'>{tital?tital:"Popular on Netflix"}</h1>
            <div className='flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap w-full'>
                {cards_data.map((card, index) => {
                    return <div className='w-60 flex-shrink-0 rounded-2xl cursor-pointer relative' key={index}>
                        <img src={card.image} alt="img" />
                        <p className='absolute bottom-1 right-1 text-white' >{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitalCards