import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import './Counter.css';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function  Counter() {

const [like,setLike]=useState(0);

const [dislike,setDislike]=useState(0);
  return (
    <div className='likerr'>

<div className="Like">
<Badge badgeContent={like} color="primary">
<IconButton onClick={() => setLike(like+1) } color="primary" aria-label="add to shopping cart" className='btn'>
π
</IconButton>
</Badge>

<p>Like Meπ</p>
</div>

<div className="Dislike">

<Badge badgeContent={dislike} color="error">
<IconButton onClick={() => setDislike(dislike+1) } color="error" aria-label="add to shopping cart" className='btn'>
π
</IconButton>
</Badge>
<p>Dislike Meπ</p>

</div>
    </div>
  )
}

export {Counter}