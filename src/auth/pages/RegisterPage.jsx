import { Button,Grid,TextField,Link } from '@mui/material'

import './styles/AuthStyles.css'
import React from 'react'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { Typography } from '@mui/material';


export const RegisterPage = () => {
  return (
    <AuthLayout title='Registrate!!!'>
      <form>
        
          <Grid container> 
          <Grid item sx={{mt:2,width: '100%'} }>
              <TextField
                label="Nombre Completo"
                type='email'
                placeholder='ingrese su nombre completo'
                className='NombreText'
                fullWidth
              />
            </Grid>
          
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Correo"
                type='email'
                placeholder='ingrese un correo'
                fullWidth              
              />
            </Grid>
           
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Contraseña"
                type='password'
                placeholder='ingrese una contraseña'
                fullWidth         
              />
            </Grid>
            <Grid
            container
            spacing={2}
            sx={{mb:2,mt:2}}
            >
              <Grid item xs={12} >
                <Button variant='contained'  fullWidth>
                  <FollowTheSignsIcon/>
                  <Typography sx={{ml:0.5}}>Sign Up</Typography>
                </Button>
              </Grid>
             
              

            </Grid>
            <Grid container direction="row" justifyContent={'end'}>
              <Link component={RouterLink} color='inherit' to="/auth/register">
              create una cuenta
              </Link>
              
                
              </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
