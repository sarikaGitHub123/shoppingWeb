import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = ()=>{
    return(
      <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
        {/* <div>Logo</div> */}
        <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
         <Link className='nav-link' to='/shop'>
            SHOP
         </Link>

         <Link className='nav-link' to='/sign-in'>
            Sign In
         </Link>
        </div>
        {/* <h1>I am the navigation bar</h1> */}
      </div>
      <Outlet/>
      </Fragment>    )
  }


  export default Navigation;