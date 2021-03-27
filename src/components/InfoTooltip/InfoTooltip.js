import React from 'react';
import cn from 'classnames';
import './InfoTooltip.css'

function InfoTooltip({ userUpdateStatus }) {
  return (
    <div className={cn(`tooltip`, { "tooltip_opened": userUpdateStatus.message })}>
    <div className="tooltip__container">
         <p className={cn("tooltip__status-title", {"tooltip__status-title_red" : userUpdateStatus.error})}>{userUpdateStatus.message}</p>
    </div>
  </div>
  )
}

export default InfoTooltip;
