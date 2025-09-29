import React, { useContext } from 'react'
import { FormContext } from '../App'

function FormComponentTwo(props) {

  const { form, setForm } = useContext(FormContext)

  return (
    <div>
      <form action="">
        <input type="text" name="firstName" id="first_name" className='first_name' value={form.first_name} onChange={(e) => { setForm({ ...form, first_name: e.target.value }) }} />
        <input type="text" name='secondName' id='second_name' className='second_name' value={form.last_name} onChange={(e) => { setForm({...form, last_name: e.target.value }) }} /><br />
        <input type="text" name='country_of_residence' id='country_of_residence' value={form.country} onChange={(e) => { setForm({ ...form, country: e.target.value }) }} /><br />
        <input type="text" name='level_of_education' id='level_of_education' value={form.education} onChange={(e) => {setForm({...form, education: e.target.value})}} /><br />
        <button className='page-two-buttons' onClick={props.prevPage}>Previous</button>
        <button className='page-two-buttons' onClick={props.nextPage}>Next</button>
      </form>
    </div>
  )
}

export default FormComponentTwo