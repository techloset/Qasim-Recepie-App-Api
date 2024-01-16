import logo from '../../assets/logo.png'
import React from 'react'
import youtubeIcon from '../../assets/Youtube.png';
import twitterIcon from '../../assets/Twitter.png';
import pinterstIcon from '../../assets/Pinterest Icon.png';
import browseIcon from '../../assets/Browser.png';

const Footer = () => {
    return (
        <>
            <footer className='bg-yellow-300   '>
                <div className='container px-5 py-8 mx-auto flex justify-around items-center sm:flex-row flex-col'>
                    <div className='flex flex-row'>
                        <img className='w-10 m-3' src={logo} alt="" />
                        <h1 className='m-3 text-3xl  font-bold md:flex hidden'>Delícias à Mesa</h1>
                        </div>

<div className='flex flex-col'>
    <div><h2 className=''>Redes sociais:</h2></div>
    <div className='flex flex-row m-6'>
    <img className='m-2' src={youtubeIcon} alt="" />
    <img className='m-2' src={twitterIcon} alt="" />
    <img className='m-2' src={browseIcon} alt="" />
    <img className='m-2' src={pinterstIcon} alt="" />
    </div>
</div>
<div></div>

                    
                </div>
            </footer>
        </>
    )
}

export default Footer
