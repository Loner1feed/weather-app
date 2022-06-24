import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { Item } from '../Item/Item';

export const ItemList = () => {

  const { results } = useSelector(state => state.geo);

  return (
    <Box>
      {results.length !== 0 && results.map((item, i) => <Item key={i} data={item} />)}
    </Box>
  )
}
