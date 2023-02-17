import { ImageListItem } from '@mui/material'
import { ImageList } from '@mui/material'
import React from 'react'
import { itemData } from './itemData'



export const ImageGallery = () => {
  return (
    <>
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </>
  )
}

