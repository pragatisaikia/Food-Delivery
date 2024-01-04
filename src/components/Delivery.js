import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full bg-white pt-16 pb-10 px-4'>
            <h3 className='text-orange-500 font-bold text-3xl text-center'>Quick Delivery App</h3>
            <div className=' w-full md-w-[1020px] mx-auto my-5 grid md:grid-cols-2 '>
                <img className='w-[550px] mx-auto my-4' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" />
                <div className='flex flex-col justify-center px-5'>
                    <p className='text-[#00df9a] font-bold mx-[32px]'>Get The App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-3 mx-[32px]'>Limitless Convenience on-demand</h1>
                    <p className='mx-[32px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio ducimus, magnam quas illum soluta, error unde assumenda ipsa enim corporis dolor aspernatur itaque quibusdam sed minus fugit cupiditate quae. Iste debitis dolores culpa doloribus repellat ea modi a delectus eveniet fugit expedita neque ad, placeat fuga est voluptatum nobis assumenda non consectetur, deleniti nihil repudiandae aspernatur at. 
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6  md:mx-8 py-3 sm:mx-[32px]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Delivery