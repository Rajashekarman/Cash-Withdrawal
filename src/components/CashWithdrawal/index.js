import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

      const {id, value} = this.DenomDetails


  changeAmount = id => {
    this.setState(prevSt => ({amount: prevSt.amount - 50}))
    // console.log(amount)
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div>
        <h1>Sarah Villiums</h1>
        <p>Your Balance</p>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <p>{amount}</p>
        <ul>
          {denominationsList.map(eachDenom => (
            <DenominationItem
              DenomDetails={eachDenom}
              key={eachDenom.id}
              changeAmount={this.changeAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
