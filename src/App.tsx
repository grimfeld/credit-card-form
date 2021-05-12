import { useEffect, useState } from "react"
import "./App.css"
import { Input } from "./components/UI"

interface CreditCardData {
  number: {
    current_value: string
    valid: boolean
    error: string | null
  }
  name: string
  month: string
  year: string
  ccv: string
}

function App() {
  const [data, setData] = useState<CreditCardData>({
    number: {
      current_value: "",
      valid: false,
      error: null,
    },
    name: "",
    month: "",
    year: "",
    ccv: "",
  })

  // useEffect(() => {
  //   if (/\D/.test(data.number.current_value)) {
  //     setData({
  //       ...data,
  //       number: { ...data.number, error: "Only digits are allowed" },
  //     })
  //   } else if (data.number.current_value.length < 16) {
  //     setData({ ...data, number: { ...data.number, error: "Invalid Number" } })
  //   }
  // }, [data])

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
            {...data.number}
            onChange={(e: any) =>
              setData({
                ...data,
                number: { ...data.number, current_value: e.target.value },
              })
            }
          />
          {/* <Input
            error="test"
            name="name"
            label="Card Name"
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          /> */}
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
