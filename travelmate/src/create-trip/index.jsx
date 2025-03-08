import React from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'

function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <ReactGoogleAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          />
          
        </div>
        </div>    
    
    </div>
  )
}

export default CreateTrip