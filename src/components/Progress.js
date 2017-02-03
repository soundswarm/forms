import React from 'react'
import { Line } from 'rc-progress';

export default ({percent})=> (
  <div>
    <Line percent={percent} strokeWidth="1" strokeColor='#0275d8' />
  </div>
);