import { SaveOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import { ImageGallery } from './'

export const NoteView = () => {
  return (
      <>
          <Grid container
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              sx={{mb:1}}
          >
              
              <Grid item>
                  <Typography
                      fontSize={39}
                      fontWeight={'light'}
                  >
                      28 de Agosto del 2023
                      
                  </Typography>
                  
              </Grid>
              <Grid item>
                  <Button>
                      <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> 
                      Guardar
                  </Button>                  
              </Grid>
              <Grid container>
                  <TextField
                      type='text'
                      variant='filled'
                      fullWidth
                      placeholder='Ingresa un titulo para tu tarea'
                      label='Titulo'
                      sx={{
                          border: 'none',
                          mb:1
                      }}
                  />
                   <TextField
                      type='text'
                      variant='filled'
                      fullWidth
                      multiline
                      placeholder='Cuentame, que hiciste hoy?'
                      label='Tu Dia'
                      minRows={5}
                      sx={{
                          border: 'none',
                          mb:1
                      }}
                  />
              </Grid>
              <ImageGallery/>
              
          </Grid>
      
      
      
      
      
      </>
  )
}
