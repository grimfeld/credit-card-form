import { Formik, Form, Field } from "formik"
import { useEffect, useState } from "react"
import "./App.css"

interface CreditCardData {
  number: {
    value: string
    error: string | null
  }
  name: string
  month: string
  year: string
  ccv: string
}

const Input = ({
  label,
  ...props
}: {
  label: string
  name: string
  type: string
  onChange(e: any): void
}) => {
  return (
    <div className="Input-wrapper">
      <input {...props} className="Input" />
      <label className="Input-label">{label}</label>
    </div>
  )
}

function App() {
  const [data, setData] = useState<CreditCardData>({
    number: {
      value: "",
      error: null,
    },
    name: "",
    month: "",
    year: "",
    ccv: "",
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="app">
      <div className="wrapper">
        <div className="credit-card">
          <img
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/2.jpeg"
            alt="credit-card"
            className="card"
          />
          <img
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            alt="chip"
            className="card-chip"
          />
        </div>
        <form className="form">
          <Input
            name="number"
            label="Card Number"
            type="text"
            onChange={(e: any) =>
              setData({
                ...data,
                number: { ...data.number, value: e.target.value },
              })
            }
          />
          <Input
            name="name"
            label="Card Name"
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <div className="flex">
            <div className="column">
              <label htmlFor="month">Expiration Date</label>
              <select name="" id="" className=""></select>
            </div>
            <select name="" id="" className="column"></select>
            <input type="text" className="column" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
