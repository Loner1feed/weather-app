import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { Item } from '../Item/Item';
import { style } from './style/style';

export const ItemList = () => {

  const { results } = useSelector(state => state.geo);

  return (
    <Box>
      {results.length !== 0 && (
        <Box sx={style.list}>
          {results.map((item, i) => <Item key={i} data={item} />)}
        </Box>
      )}
    </Box>
  )
}
