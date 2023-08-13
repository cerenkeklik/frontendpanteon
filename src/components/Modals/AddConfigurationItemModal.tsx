import { useState } from 'react'
import { AddConfigFormType } from '../../utils/types'
import AddConfigurationForm from '../AddConfigurationForm'

const AddConfigurationItemModal = () => {
  let items = ['Farm', 'Academy', 'Headquarters', 'LumberMill', 'Barracks']

  const [formInput, setFormInput] = useState<AddConfigFormType>({
    BuildingCost: 1,
    BuildingType: items[0],
    ConstructionTime: 30,
    BuildingCostError: null,
    BuildingTypeError: null,
    ConstructionTimeError: null,
  })

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add New Configuration
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() =>
                setFormInput({
                  BuildingCost: 1,
                  BuildingType: items[0],
                  ConstructionTime: 30,
                  BuildingCostError: null,
                  BuildingTypeError: null,
                  ConstructionTimeError: null,
                })
              }
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <AddConfigurationForm
              formInput={formInput}
              setFormInput={setFormInput}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddConfigurationItemModal
