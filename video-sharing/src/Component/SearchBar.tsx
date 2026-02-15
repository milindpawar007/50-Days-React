import React, { useState } from 'react'
import { Paper,TextField, Typography } from '@mui/material'

type SearchBarProps={
  handelSearch:(input:string)=>void
}
function SearchBar({handelSearch}:SearchBarProps) {
  const [serachTerm,SetSerachTerm] = useState<string>("");

  const handelChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
      SetSerachTerm(event.target.value)
  }

const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
   handelSearch(serachTerm);
  }
};

  return (
    <>
    <Paper elevation={6} sx={{padding:"25px"}}>
      <TextField fullWidth label={"Search..."}
       value={serachTerm}
       onChange={handelChange}
        onKeyDown= {onKeyPress}
       />
    </Paper>
    
    </>

  )
}

export default SearchBar
