import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

// function handleClick(event) {
//   Navigate(event.target.value);
//   console.info('You clicked a breadcrumb.');
// }

export default function IconBreadCrumbs() {
  return (
      <div role="presentation" /*onClick={handleClick}*/>
          <Breadcrumbs aria-label="breadcrumb">
              <Link
                  underline="hover"
                  sx={{display: 'flex', alignItems: 'center'}}
                  color="black"
                  href="/"
              >
                  <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                  Home

              </Link>
              <Link
                  underline="hover"
                  sx={{display: 'flex', alignItems: 'center'}}
                  color="black"
                  href= "/login"
              >
                  <WhatshotIcon sx={{mr: 0.5}} fontSize="inherit"/>
                  Log in

              </Link>
              <Link
                  underline="hover"
                  sx={{display: 'flex', alignItems: 'center'}}
                  color="black"
                  href= "/aboutus"
              >
                  <GrainIcon sx={{mr: 0.5}} fontSize="inherit"/>
                  About us

              </Link>
          </Breadcrumbs>

      </div>
  );
}
