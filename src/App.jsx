import { useState } from 'react'
import { Counter } from './components/Counter'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './App.css'


function App() {


  return (
<div className="counter">

<Counter/>


</div>
  )
}

export default App;
