import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='Line__1'><h1>----Discover Airbnb Experiences----</h1></div>

          

            <div className='home__section2'>
            <Card
                src="https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=2000&q=80"
                title="Surfing Experiences & Beach Stays"
                description="Unique activities we can do together, led by a world of hosts."
            /></div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXMlMjBzbWFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&h=5000&w=3500&q=60"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                
                src="https://images.unsplash.com/photo-1596939228126-130c0eaadc6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&h=5000&w=3500&q=60"
                title="Photoshoot"
                description="Photoshoot in outfit of the location you are visiting."
            />
            <Card
                src="https://images.unsplash.com/photo-1595521624992-48a59aef95e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=5000&w=3500&q=60"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <Card
                src="https://images.unsplash.com/photo-1586511934875-5c5411eebf79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&h=5000&w=3500&q=60"
                title="Food Lovers"
                description="one of those ideas for Airbnb experiences that we will definitely try with our family."
            />
            
            </div>
            <div className='Line__2'><h1>----Inspiration for your next trip----</h1></div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1612638039814-1a67ea727114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2Fzb2x8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&h=1500&w=1300&q=60"
                title="Kasol"
                description="Dotted with Dense timbered woods,  offers the allure of a calm and composed tourist appeal and the crystal clear skies."
                price="₹4200/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8MXwwfHw%3D&auto=format&fit=crop&h=1500&w=1300&q=60"
                title="Ladakh "
                description="most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities"
                price="₹8500/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1580723209134-48a2fd4b5712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c3Nvb3JpZXxlbnwwfDF8MHx8&auto=format&fit=crop&h=1500&w=1300&q=60"
                title="Mussoorie"
                description="famous among tourist as Hill Station, Restaurants, Mall Road, Shopping, Weekend Getaway, Honeymoon Destination."
                price="₹6000/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1594102552386-793e5a27ad10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8MXwwfHw%3D&auto=format&fit=crop&h=1500&w=1300&q=60"
                title="Manali"
                description="unlimited adventure opportunities, the famous Hadimba Temple, the scenic Rohtang Pass, the snow-laden Solang Valley."
                price="₹7500/night"
            />
                
            </div>
        </div>
    )
}

export default Home