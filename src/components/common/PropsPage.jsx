import React from 'react'
import PropsCard from '../home-page/PropsCard'
import image_one from '../../assets/images/home-page/png/Keybord.png'
import image_two from '../../assets/images/home-page/png/Mobile.png'
import image_three from '../../assets/images/home-page/png/Gms.png'
import image_four from '../../assets/images/home-page/png/Chair.png'
import image_five from '../../assets/images/home-page/png/cmr.png'
import image_six from '../../assets/images/home-page/png/LED.png'

const PropsPage = () => {
    return (
        <div className='max-w-[1200px] px-4 xl:px-0 mx-auto'>
            <div className="grid grid-cols-3 gap-8">
                <PropsCard title={"1"} image={image_two} />
                <PropsCard title={"2"} image={image_one} />
                <PropsCard title={"3"} image={image_three} />
                <PropsCard title={"4"} image={image_five} />
                <PropsCard title={"5"} image={image_four} />
                <PropsCard title={"6"} image={image_one} />
                <PropsCard title={"7"} image={image_six} />
                <PropsCard title={"8"} image={image_three} />
                <PropsCard title={"9"} image={image_one} />
            </div>
        </div>
    )
}

export default PropsPage