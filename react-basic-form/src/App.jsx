import { createContext, useState } from 'react'
import { Form } from './Form'
import FormComponentOne from './Components/FormComponentOne'
import FormComponentTwo from './Components/FormComponentTwo'
import FormComponentThree from './Components/FormComponentThree'

export const FormContext = createContext();

function App() {

  const [page, setPage] = useState(1)
  const [form, setForm] = useState({...Form})
  

  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  return (
    <>
      {page < 4 && 
      <>
        <h1>Sign Up</h1>
        <FormContext.Provider value = {{form,setForm}}>
        {page == 1 && <FormComponentOne nextPage={nextPage} />}
        {page == 2 && <FormComponentTwo nextPage={nextPage} prevPage={prevPage} />}
        {page == 3 && <FormComponentThree prevPage={prevPage} nextPage={nextPage} />}
        </FormContext.Provider>
      </>
      }
      {
        (page > 4 || page == 4) && <>
        <h1>You are done!</h1>
        </> 
      }

    </>
  )
}

export default App
