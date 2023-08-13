import { useState } from 'react'
import { AddConfigFormType } from '../utils/types'

const Dropdown = ({
  formInput,
  setFormInput,
  items,
}: {
  formInput: AddConfigFormType
  setFormInput: any
  items: string[]
}) => {
  const [selected, setSelected] = useState(items[0])

  return (
    <select
      className="form-select"
      required
    >
      <option selected>{items[0]}</option>
      {items.map((item: string, i: number) => {
        return (
          <option key={i} value="1">
            {item}
          </option>
        )
      })}
    </select>
  )
}
export default Dropdown
