import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCartData } from '../../redux/CartData/CartDataReducers'
import { Link } from 'react-router-dom'
import "../stylingSheets/MovieCartHeader.css";



const Header=React.memo(function Header() {
const DataPresentInCart=useSelector((state)=>state.getCartData)

  return (
    <div className='moviebook-cont'>
     <Link to='/cartData'>
     <div className='moviecart-img-cont'>
      <img className='cartimgdata' src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/>
       <span className='bolding'>{DataPresentInCart.length}</span>
     </div>
     </Link>
    </div>

  )
}
)

export default Header