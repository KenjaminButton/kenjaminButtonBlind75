import React from 'react';

type SignupProps = {
  
};

const Signup:React.FC<SignupProps> = () => {
  
  return (
    <form className="space y-6 px-6 py-4">
    <h3 className='text-xl font-medium text-white'>Register to Kenjamin's Blind 75</h3>
    <div>
      <label htmlFor='email' className='my-3 text-sm font-medium block mb-2 text-gray-300'>Email</label>
      <input 
        type='email' 
        name='email' 
        id='email' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='kenjamin@kenjaminbutton.com'
      />
    </div>
    <div>
      <label htmlFor='displayName' className='my-3 text-sm font-medium block mb-2 text-gray-300'>displayName</label>
      <input 
        type='displayName' 
        name='displayName' 
        id='displayName' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='KenjaminButton'
      />
    </div>
    <div>
      <label htmlFor='password' className=' my-3 text-sm font-medium block mb-2 text-gray-300'>password</label>
      <input 
        type='password' 
        name='password' 
        id='password' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='*assword'
      />
    </div>
    <button 
      type='submit' 
      className='
        my-3
        w-full 
        text-white 
        focus:ring-blue-300 
        font-medium 
        rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
        bg-brand-orange
        hover:bg-brand-orange-s
      '
    >
      Register
    </button>

    <div className='text-sm font-medium text-gray-500'>
      Already have an account? {' '}
      <a href='#' className='text-blue-700 hover:underline'>
        Log In
      </a>
    </div>
  </form>
  )
}
export default Signup;