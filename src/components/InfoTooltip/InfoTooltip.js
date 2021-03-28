import React from 'react';
import cn from 'classnames';
import './InfoTooltip.css'

function InfoTooltip({ requestStatus }) {
  return (
    <div className={cn(`tooltip`, { "tooltip_opened": requestStatus.message })}>
    <div className="tooltip__container">
         <p className={cn("tooltip__status-title", {"tooltip__status-title_red" : requestStatus.error})}>{requestStatus.message}</p>
    </div>
  </div>
  )
}

export default InfoTooltip;
