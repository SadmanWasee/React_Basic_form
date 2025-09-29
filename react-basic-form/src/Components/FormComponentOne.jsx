import React, { useContext } from 'react'
import { FormContext } from '../App'

function FormComponentOne(props) {
  const {form, setForm} = useContext(FormContext)
  return (
    <div>
      <form action="">
        <input type="email" id='email' name='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} /><br />
        <input type="text" id='user_name' name='userName' value={form.user_name} onChange={(e)=>setForm({...form,user_name:e.target.value})}/><br />
        <input type="password" id='password' name='password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/><br />
        <button onClick={props.nextPage} className='next-page-one'>Next</button>
      </form>
    </div>
  )
}

export default FormComponentOne