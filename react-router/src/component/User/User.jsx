import { useParams } from 'react-router-dom'
import React from 'react'

function User() {
const {userid}= useParams()

  return (
    <div className='text-center bg-gray-600 text-white p-4'>
      User:{userid}
    </div>
  )
}

export default User
