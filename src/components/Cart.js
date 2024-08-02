
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/cartSlice';
import { Button, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Typography variant="h4">Cart</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={`$${item.price}/night`} />
            <IconButton edge="end" onClick={() => handleRemove(item.id)}>
              <DeleteIcon/>
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5">Total: ${total}</Typography>
      <Button variant="contained" color="primary" href="/checkout">
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
