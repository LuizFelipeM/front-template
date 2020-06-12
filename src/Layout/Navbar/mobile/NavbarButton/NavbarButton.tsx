
import React from 'react';
import { ReactComponent as GradeIcon } from '../../../icons/grade.svg';
import { ReactComponent as AwardIcon } from '../../../icons/award.svg';
import { ReactComponent as UserIcon } from '../../../icons/user.svg';
import './NavbarButton.css';

function NavbarButton(props: { type: 'grade' | 'award' | 'user', enabled: boolean }) {

  return (
    <div className={`nav-m-button ${props.enabled === true ? 'enabled' : 'disabled'}`}>

      {
        props.type === 'grade' ? (
          <GradeIcon className='nav-m-icon' />
        ) :
          props.type === 'award' ? (
            <AwardIcon className='nav-m-icon' />
          ) :
            <UserIcon className='nav-m-icon' />
      }

    </div>
  )
}

export default NavbarButton;