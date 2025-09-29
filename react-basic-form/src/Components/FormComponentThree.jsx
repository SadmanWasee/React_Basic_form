import React, { useContext } from 'react'
import { FormContext } from '../App'

function FormComponentThree(props) {
  const {form, setForm} = useContext(FormContext)
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email_print' name='email_print' value={form.email} className='type-two' readOnly/><br />
        <label htmlFor="user_name">User Name:</label>
        <input type="text" id='user_name_print' name='user_name_print' value={form.user_name} className='type-two' readOnly/><br />
        <label htmlFor="first_name_print">First Name:</label>
        <input type="text" id='first_name_print' name='first_name_print' value={form.first_name} className='type-two' readOnly/><br />
        <label htmlFor="last_name_print">Last Name:</label>
        <input type="text" id='last_name_print' name='last_name_print' value={form.last_name} className='type-two' readOnly/><br />
        <label htmlFor="country_print">Country of Residence:</label>
        <input type="text" id='country_print' name='country_print' value={form.country} className='type-two' readOnly/><br />
        <label htmlFor="education_print">Level of Education:</label>
        <input type="text" id='education_print' name='education_print' value={form.education} className='type-two' readOnly/><br />
        <button className='page-three-buttons' onClick={props.prevPage}> Previous </button>
        <button className='page-three-buttons' onClick={props.nextPage}> Confirm and Continue </button>
      </form>
    </div>
  )
}

export default FormComponentThree