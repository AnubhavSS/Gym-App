import React,{FC} from 'react'
import { Typography,Stack,Button } from '@mui/material'
import Image from 'next/image'
import { searchData } from '../utils/types'

interface DETAIL{
  exerciseDetail:searchData;
}

const Detail:FC<DETAIL> = ({exerciseDetail}) => {
   
    const {bodyPart, gifUrl, name, target, equipment,instructions }=exerciseDetail;
  return (
    <Stack gap={'50px'} sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <Stack>
        <Image
        src={gifUrl
        }
        alt="dunmbBell"
        width={340}
        height={390}
        loading='lazy'
      />
       <Typography my={2} sx={{ fontSize: { lg: '24px', xs: '20px' } }} fontWeight={500} textTransform="capitalize">
         Body Part: {bodyPart}
        </Typography>
        <Typography  sx={{ fontSize: { lg: '24px', xs: '20px' } }} fontWeight={500} textTransform="capitalize">
        Equipment: {equipment}
        </Typography>
      </Stack>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '54px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
          of the best <br /> exercises to target your {target}.
        </Typography>

        <Typography variant='h4' fontWeight={700}>Instructions</Typography>
        {instructions?.map((item) => (
          <Stack key={item?.name} direction="row" gap="24px" alignItems="center">
          
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '25px', xs: '17px' },background: '#FFF2DB',p:1, borderRadius:10 }}>
             {instructions.indexOf(item)+1}&rarr; {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail