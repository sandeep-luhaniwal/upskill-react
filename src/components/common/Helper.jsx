import { CameraIcon, ComputerIcon, DelerivIcon, SoundIcon, MonyIcon, GameIcon, MusicIcon,
     PhoneIcon, WatchIcon, HartIocn, StarIcon, HalfStarIcon, BorderBlackIcon, BorderRedIcon,
      BorderBlueIcon, BorderBlkIcon, AppleIcon, RightIcon,RgtIcon  } from "./Icon";

import coat from '../../assets/images/home-page/png/coat.png'
import bag from '../../assets/images/home-page/png/bag.png'

import book from '../../assets/images/home-page/png/book.png'
import spkr from '../../assets/images/home-page/png/spkr.png'
import Gms from '../../assets/images/home-page/png/Gms.png'
import Keybord from '../../assets/images/home-page/png/Keybord.png'
import LED from '../../assets/images/home-page/png/LED.png'
import Chair from '../../assets/images/home-page/png/Chair.png'
import Mobile from '../../assets/images/home-page/png/Mobile.png'

// import Chair from '../../assets/images/home-page/png/Chair.png'





export const NAVBAR_LINKS_LIST = [
    {
        title: "Home",
    },
    {
        title: "Contact",
    },
    {
        title: "About",
    },
    {
        title: "Sign Up",
    },
];

export const DELIVERY_DATA_LIST = [
    {
        title: "FREE AND FAST DELIVERY",
        descrpition: "Free delivery for all orders over $140",
        icon: <DelerivIcon />,
    },
    {
        title: "24/7 CUSTOMER SERVICE",
        descrpition: "Friendly 24/7 customer support",
        icon: <SoundIcon />,
        class: "max-w-[243px] mx-auto",
    },
    {
        title: "MONEY BACK GUARANTEE",
        descrpition: "We return money within 30 days",
        icon: <MonyIcon />,
    },
];


export const BROWER_CARD_DATA_LIST = [
    {
        tital: "Phones",
        icon: <PhoneIcon />,
    },
    {
        tital: "Computers",
        icon: <ComputerIcon />,
    },
    {
        tital: "SmartWatch",
        icon: <WatchIcon />,
    },
    {
        tital: "Camera",
        icon: <CameraIcon />,
    },
    {
        tital: "HeadPhones",
        icon: <MusicIcon />,
        
    },
    {
        tital: "Gaming",
        icon: <GameIcon />,
    },
];
export const COUNTER_LIST =[
    {
        time:"Hours",
        value:"23",
    },
    {
        time:"Days",
        value:"05",
    },
    {
        time:"Minutes",
        value:"56",
    },
    {
        time:"Seconds",
        value:"35",
    },
]


export const BEST_SELLING_CARD_LIST = [

    {
        tital: "The north coat",
        image: coat,
        rate:"260",
        netrate:"360",
        icon:<HartIocn />,
    },
    {
        tital: "Gucci duffle bag",
        // icon: <PhoneIcon />,
        image:bag,
          rate:"960",
        netrate:"1160",
        StarIcon:<HalfStarIcon />

    },
    {
        tital: "RGB liquid CPU Cooler",
        // icon: <PhoneIcon />,
          image:spkr,
          abc: "pt-10",
            rate:"160",
        netrate:"170"

    },
    {
        tital: "Small BookSelf",
        // icon: <PhoneIcon />,
          image:book,
            rate:"360",
            netrate:"400"
    },

    {
        tital: "The wash",
        image: coat,
        rate:"560",
        netrate:"360",
        icon:<HartIocn />,
    },
    {
        tital: "Gucci big bag",
        // icon: <PhoneIcon />,
        image:bag,
        rate:"860",
        netrate:"1160",
        StarIcon:<HalfStarIcon />

    },
    {
        tital: "RGB liquid  Cooler",
        // icon: <PhoneIcon />,
          image:spkr,
          abc: "pt-10",
            rate:"60",
        netrate:"170"

    },
    {
        tital: "Small bag BookSelf",
        // icon: <PhoneIcon />,
          image:book,
            rate:"660",
            netrate:"400"
    },
    {
        tital: "Table Book",
        // icon: <PhoneIcon />,
          image:book,
            rate:"1090",
            netrate:"900"
    },

]

export const FLASH_DATA_LISH =[
       {
        tital:"Days",
        time:"03"
       },
       {
        tital:"Hours",
        time:"23"
       },

       {
        tital:"Minutes",
        time:"19"
       },
       {
        tital:"Seconds",
        time:"56"
       },


]


// ----------------FLASH_DATA_LISH--------------

export const FLASH_CARD_LIST =[
    {
        tital: "HAVIT HV-G92 Gamepad",
        image: Gms,
        rate:"120",
        netrate:"160",
        icon:<StarIcon />,
       
    },
    {
        tital: "AK-900 Wired Keyboard",
        image: Keybord,
        rate:"960",
        netrate:"1160",
        icon:<HalfStarIcon />,
    },
    {
        tital: "IPS LCD Gaming Monitor",
        image: LED,
        rate:"370",
        netrate:"400",
        // icon:<StarIcon />,
    },
    {
        tital: "S-Series Comfort Chair ",
        image: Chair,
        rate:"375",
        netrate:"400",
        icon:<StarIcon />,
    }
    // },
    // // {
    // //     tital: "IPS LCD Gaming Monitor",
    // //     image: LED,
    // //     rate:"370",
    // //     netrate:"400",
    // //     // icon:<StarIcon />,
    // // },
    // // {
    // //     tital: "S-Series Comfort Chair ",
    // //     image: Chair,
    // //     rate:"375",
    // //     netrate:"400",
    // //     icon:<StarIcon />,
    // // },
    // // {
    // //     tital: "S-Series Comfort Chair ",
    // //     image: Chair,
    // //     rate:"375",
    // //     netrate:"400",
    // //     icon:<StarIcon />,
    // // }, {
    // //     tital: "S-Series Comfort Chair ",
    // //     image: Chair,
    // //     rate:"375",
    // //     netrate:"400",
    // //     icon:<StarIcon />,
    // // },
    // // {
    // //     tital: "S-Series Comfort Chair ",
    // //     image: Chair,
    // //     rate:"375",
    // //     netrate:"400",
    // //     icon:<StarIcon />,
    // // },
    // // {
    // //     tital: "S-Series Comfort Chair ",
    // //     image: Chair,
    // //     rate:"375",
    // //     netrate:"400",
    // //     icon:<StarIcon />,
    // // },
]



export const MULTI_CARD_LIST =[
   
    {
        tital: "Breed Dry Dog Food ",
        image: Chair,
        rate:"375",
        netrate:"400",
        icon:<StarIcon />,
    },
    {
        tital: "CANON EOS DSLR Camera",
        image: Gms,
        rate:"120",
        netrate:"160",
        icon:<StarIcon />,
       
    },
    {
        tital: "ASUS FHD Gaming Laptop",
        image: Keybord,
        rate:"960",
        netrate:"1160",
        icon:<HalfStarIcon />,
        coloricon:<BorderBlueIcon />,
    },
    {
        tital: "Curology Product Set ",
        image: LED,
        rate:"370",
        netrate:"400",
        // icon:<StarIcon />,
    },
    {
        tital: "Kids Electric Car ",
        image: Chair,
        rate:"375",
        netrate:"400",
        icon:<StarIcon />,
        coloricon:<BorderBlueIcon />,
    },
    {
        tital: "Jr. Zoom Soccer Cleats",
        image: Gms,
        rate:"120",
        netrate:"160",
        icon:<HalfStarIcon />,
        coloricon:<BorderBlueIcon />,
       
    },
    {
        tital: "GP11 Shooter USB Gamepad",
        image: Keybord,
        rate:"960",
        netrate:"1160",
        icon:<HalfStarIcon />,
        coloricon:<BorderBlueIcon />,
    },
    {
        tital: "Quilted Satin Jacket",
        image: LED,
        rate:"370",
        netrate:"400",
        icon:<HalfStarIcon />,
        coloricon:<BorderRedIcon />,
    },
   
]




// -------------Home Page---------
export const HOME_PAGE_DATA_LIST =[
    {
    icon:<AppleIcon />,
    tital:"Up to 10% off Voucher ",

    icon:<RgtIcon />,
    image:Mobile,
    },
]


// --------------music---------------


export const MUSIC_CIRCLE_LIST =[
    {
        tital:"Hours",
        num:23
    },

    {
        tital:"Days",
        num:5
    },

    {
        tital:"Minutes",
        num:59
    },
    
    {
        tital:"Seconds",
        num:35
    },
]


// export const CATEGORIES_LIST =[
//     {

//         title: "Phones",
//         icon: <AbcIcon />,
//     },
//     {

//         title: "Computer",
//         icon: <ComputerIcon/>,
//     },
//     {

//         title: "SmartWatch",
//        icon: <SmartWatchIcon />,
//     },
//     {

//         title: "Camera",
//        icon: <CameraIcon />,
//        color:"text-black"
//     },
//     {

//         title: "HeadPhone",
//        icon: <HeadPhoneIcon />,
//     },
//     {

//         title: "Gaming",
//        icon: <GamingIcon />,
//     },
    
    
    
// ]























// ==================Start Here===================