import React from 'react';

const Home = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 pt-20 md:items-center'>
        <div >
          <p className='text-white font-semibold'>Hello there, Welcome to my site</p>
          <p className='text-white font-bold text-[30px]'>I am abuzer khan</p>
          <p className='text-pink-800 font-bold text-[30px]'>I am frontend developer</p>
          <p className='text-white font-bold text-[30px]'>& Java developer</p>
          <div className='flex gap-4'>
            <button  className='bg-white p-3 text-black rounded-2xl mt-4 '>Download Cv</button>
            <button className='bg-white p-3 text-black rounded-2xl mt-4'>Contact me</button>
          </div>
        </div >
        <div className='flex justify-center'>
        <div className='w-[400px] h-[400px] mt-10 md:mt-0 md:w-[300px] md:h-[300px] border-[10px] border-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 rounded-lg '>
          <img src="/images/profile.jpg" alt="profile-pic" className="w-full h-full object-cover  " />
          
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
