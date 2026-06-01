import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

function Question({question,questionNo}) {
        const[selected,setSelected]=useState(-1);
       
        let result=question.options.map((item,ind)=>{
            return(
                <Box
                    onClick={()=>setSelected(ind)}
                    key={ind}
                    sx={{
                        border: "1px solid black",
                        p: 2,
                        borderRadius: 2,
                        backgroundColor:selected==ind?"blue":"white",
                        "&:hover": {
                            border: "2px solid black",
                            cursor: "pointer",
                            // backgroundColor: "gray"
                        }
                    }}
                >
                    {item}
                </Box>
            )
        })
                    

  return (
    <Box>
        <Typography
            variant='h5'
        >
            {questionNo+1}.{question.question}
        </Typography>

        <Stack
            spacing={2}
        >
           {result} 
        </Stack>
    </Box>
  )
}

export default Question