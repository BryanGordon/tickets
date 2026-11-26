import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export function ValidatePage () {
  const host = import.meta.env.VITE_SERVER_BACK
  const [validate, setValidate] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getValidation = async () => {
      const res = await fetch(`${host}/validation/${id}`, {
        method: "PATCH"
      })

      if (res.ok) {
        setValidate(true)
      }
    }

    getValidation()    
  }, [id])

  if (validate) {
    return <h2>Ticket validado correctamente.</h2>
  }

  else return <h2>El ticket no se ha podido validar.</h2> 
  
}