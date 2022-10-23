import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, MenuItem } from '@material-ui/core';
import './Header.scss'
import { Button } from '@material-ui/core';

const Header = ()=> {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		event.preventDefault();
	  	setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
   return (
		<header className="site-header">
			<div className="container">
				<Grid container justifyContent="space-between" alignItems="center" flex="flex" clas>
					<Grid item>
						<Link to="/" className="site-logo">
							<img src="https://via.placeholder.com/120x50/333/fff?text=Logo" alt="" />
						</Link>
					</Grid>
					<Grid item>
						<Button component={Link} to="/" className="ml-3">Products</Button>
						<Button component={Link} to="/account" className="ml-3">Wishlist</Button>
						<Button component={Link} to="/account" className="ml-3" onClick={handleClick}>Account</Button>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
							'aria-labelledby': 'basic-button',
							}}
						>
							{isLoggedIn ? 
								<React.Fragment>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</React.Fragment>
							:	
								<React.Fragment>
									<MenuItem to="/login" component={Link} onClick={handleClose}>Login</MenuItem>
									<MenuItem to="/register" component={Link} onClick={handleClose}>Registration</MenuItem>
								</React.Fragment>
							}
						</Menu>
					</Grid>
				</Grid>
			</div>
		</header>
   )
}

export default Header;