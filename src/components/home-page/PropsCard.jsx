import React from 'react'

const PropsCard = ({ title, description, image }) => {
    return (
        <div >
            <div className="p-4 rounded-lg bg-white border-4 border-gradient">
                <div className="relative h-[300px] flex justify-center overflow-hidden rounded-md mb-4">
                    <img src={image} alt={title} className="object-cover h-[300px]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Task {title}</h3>
                <p className="text-gray-600">This is card {title} description</p>
            </div>
        </div>
    )
}

export default PropsCard