import React from 'react'
import DP from '../../assets/img/DP.jpg';

const introContent = () => {
    return(
        <main className='flex justify-center items-center h-full overflow-y-hidden'>
            <div className='flex' id='main-content'>
                <div className='flex' id='creator-image'>
                    <img className='w-48 h-48 rounded-full' src={DP} alt='dp' />
                </div>
                <div className='flex-column' id='creator-name'>
                    <div className='flex text-xl'>
                        Hi! I am Shubhankar Banerjee
                    </div>
                    <div className='flex justify-end'>
                        Web Developer
                    </div>
                </div>
            </div>
        </main>
    );
}

export default introContent