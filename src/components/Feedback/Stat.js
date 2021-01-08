import React from 'react';

const Stat = ({state, total, positiveFeedback}) => 
  <div className="Statistic">
    {/* <h2>Statistics</h2> */}
    <ul>
      <li>Good {state.good}</li>  
      <li>Neutral {state.neutral}</li>  
      <li>Bad {state.bad}</li>  
      <li>Total {total}</li>  
      <li>Positive {positiveFeedback}%</li>  
    </ul>  
  </div>
;

export default Stat;