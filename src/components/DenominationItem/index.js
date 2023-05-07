const DenominationItem = props => {
  const {DenomDetails} = props
  const {value, changeAmount, id} = DenomDetails
  console.log(value)

  const onChangeAmount = () => {
    changeAmount(id)
  }

  return (
    <li>
      <button type="button" onClick={onChangeAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
