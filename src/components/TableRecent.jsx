import React from "react";
import { Typography, Grid, Paper, Card, Button} from "@mui/material";
const TableRecent = () => {
  const data = [
    {
      name: "Borrower-Bank Statements",
      title: "Required Document Notes",
      subtitle: "Chris fuelling (June 7, 2022; 6:18PM EST)",
      info: "Missing March statements and last pages were cut off. We need all pages.",
    },
    {
      name: "Borrower-Bank Statements",
      title: "Required Document Notes",
      subtitle: "Chris fuelling (June 7, 2022; 6:18PM EST)",
      info: "Missing March statements and last pages were cut off. We need all pages.",
    },
    {
      name: "General",
      title: "Required Document Notes",
      subtitle: "Chris fuelling (June 7, 2022; 6:18PM EST)",
      info: "Missing March statements and last pages were cut off. We need all pages.",
    },
    {
      name: "General",
      title: "Required Document Notes",
      subtitle: "Chris fuelling (June 7, 2022; 6:18PM EST)",
      info: "Missing March statements and last pages were cut off. We need all pages.",
    },
    {
      name: "General",
      title: "Required Document Notes",
      subtitle: "Chris fuelling (June 7, 2022; 6:18PM EST)",
      info: "Missing March statements and last pages were cut off. We need all pages.",
    },
    {name:'General',
    title:'Required Document Notes',
    subtitle:'Chris fuelling (June 7, 2022; 6:18PM EST)',
    info:'Missing March statements and last pages were cut off. We need all pages.'
   }
  ];
  return (
  <Paper sx={{padding:'1rem', backgroundColor:'#F9FAFB', margin:'3rem  0'}}>
    <Grid container columns={{sx:6, sm:6, md:12, lg:12}} spacing={2}>
        {
            data.map((dat, i)=>{
                return(
                    <Grid item xs={6}>
                    <Card sx={{padding:'1.5rem', borderRadius:'5px'}} className='recent'>
                    <Button variant='contained' sx={{fontSize:'10px', mb:'1rem', borderRadius:'8px'}}>
                        {dat.name}</Button>
                    <Typography sx={{fontSize:'15px', color:'#111827', mb:'.5rem', 
                    fontFamily:'Work Sans', fontWeight:500}}>
                        Required Documents: {dat.title}
                    </Typography>
                    <Typography variant='body2' sx={{fontSize:'12px', mb:'1rem', color:'#6b7280',
                fontFamily:'Work Sans'}}>
                        {dat.subtitle}
                    </Typography>
                    <Typography sx={{fontSize:'13px', color:'#4B5563'}}>{dat.info}</Typography>
                    </Card>
                </Grid>
                )})
    }
    </Grid>
  </Paper>
  );
};

export default TableRecent;
