import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
// import { bindActionCreators } from 'redux';
import {actionCreator} from './State/index'

const Shop = () => {

  const dispatch= useDispatch();
  const balance = useSelector(state=>state.amount)
  return (
    <div>
        <h1>Deposite / Withdraw money</h1>
        <button className="btn-primary mx-2"onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}}>-</button>
         update balance : {balance}
        <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreator.depositeMoney(100))}}> + </button>
    </div>
  )
}

export default Shop;