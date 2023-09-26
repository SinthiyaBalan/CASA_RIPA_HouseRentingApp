import React from 'react'

function Contact() {
  return (

    <div className='contact'>
      <form action="">

      <label htmlFor=""  placeholder='First Name'>First Name
      <input type="text" />
      </label>
      </form>

    <form action="">
      <label htmlFor=""  placeholder='Last Name '>Last Name</label>
    <input type="text" name="" id="" />
    </form>

      <form action="">
      <label htmlFor=""  placeholder='Email'>Email</label>
      <input type="email" name="" id="" />
      </form>

    <form action="">
    <label htmlFor="" placeholder='Contact Number'>Phone Number</label>
    <input type="number" name="" id="" />
    </form>

      <form action="">
      <label htmlFor="" placeholder='Wite the message '>Message</label>
      <input type="text" name="" id="" />

      </form>

      

      <button type='submit'>Send</button>

            



    </div>

  )
}

export default Contact