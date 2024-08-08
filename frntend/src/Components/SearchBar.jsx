import React from 'react'

function SearchBar() {
  return (
    <div className='w-full h-full bg-transparent flex items-center justify-center'>
        <div className='w-1/4 '><input type="text" placeholder="Search" className='w-full h-10 rounded-3xl'/></div>
        <div className='w-3/4 flex justify-end'>
            <button className='w-1/6 h-10 rounded-3xl bg-[#fff]'>filter</button>
            <button className=' w-2/6 text-center rounded' style={{background: 'linear-gradient(180deg, #629994 0%, #629994 50%)'}}>
        <h3 className='text-center' style={{color: '#fff'}}>Create New task</h3>
    </button>
        </div>
    </div>
  )
}

export default SearchBar