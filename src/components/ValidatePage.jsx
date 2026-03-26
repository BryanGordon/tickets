import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export function ValidatePage () {
  const [validate, setValidate] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getValidation = async () => {
      const res = await fetch(`http://192.168.0.178:3000/validation/${id}`, {
        method: "PATCH"
      })

      if (res.ok) {
        setValidate(true)
      }
    }

    getValidation()
    console.log(id)
    
  }, [])

  if (validate) {
    return (
      <>
      {
        console.log(id)
      }
    <h2>Ticket validado correctamente.</h2>
    </>
  )
  }

  else return <h2>El ticket no se ha podido validar.</h2> 
  
}