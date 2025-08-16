import { Loader2, LoaderCircle, LoaderCircleIcon } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <LoaderCircleIcon className='animate-spin' size={40} />
    </div>
  )
}

export default Loader