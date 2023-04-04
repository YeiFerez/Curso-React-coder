import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div  >
  <ShoppingCartIcon color="action" sx={{ fontSize: 80} }/>
  <h3 >0</h3>
</div>
  )
}

export default CartWidget