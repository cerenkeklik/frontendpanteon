import Dropdown from './Dropdown'
import '../assets/css/General.css'
import '../assets/css/Configuration.css'
import { useState } from 'react'
import { AddConfigFormType } from '../utils/types'

const AddConfigurationForm = ({
  formInput,
  setFormInput,
  items,
}: {
  formInput: AddConfigFormType
  setFormInput: any
  items: string[]
}) => {
  const UpdateConstTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let val = Number(e.target.value)
    if (val >= 30 && val <= 1800) {
      setFormInput((prev: AddConfigFormType) => {
        return { ...prev, ConstructionTime: val, ConstructionTimeError: null }
      })
    } else {
      setFormInput((prev: AddConfigFormType) => {
        return {
          ...prev,
          ConstructionTimeError: 'Time should be between 30 and 1800s',
        }
      })
    }
  }

  const UpdateCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let val = Number(e.target.value)

    if (val > 0) {
      setFormInput((prev: AddConfigFormType) => {
        return { ...prev, BuildingCost: val, BuildingCostError: null }
      })
    } else {
      setFormInput((prev: AddConfigFormType) => {
        return {
          ...prev,
          BuildingCostError: 'Cost should be a positive number.',
        }
      })
    }
  }

  const formOnSubmit = () => {}

  return (
    <form
      onSubmit={formOnSubmit}
      className="d-flex flex-column gap-4 w-75 py-4"
    >
      <div className="d-flex gap-2">
        <div className='d-flex flex-column gap-1'> 
          <label>Type</label>
          <Dropdown
            formInput={formInput}
            setFormInput={setFormInput}
            items={items}
          />
        </div>
        <div className="d-flex flex-column gap-1">
          <label>Building Cost</label>
          <input
            className="form-control"
            type="number"
            required
            onChange={(e) => UpdateCost(e)}
          />
          {formInput.BuildingCostError && (
            <div className="color-red font-size-12">
              {formInput.BuildingCostError}
            </div>
          )}
        </div>
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Construction Time(s)</label>
        <input
          className="form-control"
          type="number"
          required
          onChange={(e) => UpdateConstTime(e)}
        />
        {formInput.ConstructionTimeError && (
          <div className="color-red font-size-12">
            {formInput.ConstructionTimeError}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn bg-B9561F color-white add-config-btn"
        disabled={
          !formInput.BuildingCostError &&
          !formInput.BuildingTypeError &&
          !formInput.ConstructionTimeError
            ? false
            : true
        }
      >
        Add
      </button>
    </form>
  )
}
export default AddConfigurationForm
