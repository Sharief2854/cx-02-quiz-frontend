import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkButton, PrimaryButton, SecondaryButton } from './styledComponents/Buttons'
import MenuIcon from '@mui/icons-material/Menu';


function NavLayout({links,role}) {
  const [open, setOpen] = React.useState(false);
  
  let theme = useTheme();
  let preLink = role != "" ? `/${role}`:"";

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  let linksList=links.map((item,ind)=>{
    if(ind==links.length-1){
      return null;
    }
      return(
        <LinkButton component={Link} to={`${preLink}/${item.toLowerCase()}`} key={ind}>
          {item}
        </LinkButton>
      )
  });

  return (
    <div>
      <AppBar
        position='static'
        sx={{
          borderRadius: "30px",
          zIndex: "1000"

        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h6" color="secondary" sx={{flexGrow:1}}>
            QuizApp
          </Typography>
          
          <Stack
            direction="row"
            sx={{
              flexGrow:1,
              justifyContent:'space-between',
              alignItems:"center",
              display:{xs:"none",sm:"flex"}

            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems:"center"
              }}
            >
              
              {linksList}
              
            </Stack>
            <SecondaryButton component={Link} to={`/${links[links.length - 1]}`}>
              {links[links.length-1]}
            </SecondaryButton>
          </Stack>
          
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display:{xs:"block",sm:"none"}
            }}
          >
            <MenuIcon 
              sx={{
                  color:theme.palette.text.primary
              }}
            />
          </IconButton>
            {/* drawer */}
          <Drawer open={open} onClose={toggleDrawer(false)}
            sx={{
              zIndex: "0",
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.secondary,
                width: 250,
                mt:9,
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius:"30px",
                height:"80vh",

              },
            }}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems:"center",
                "& *":{
                  color: theme.palette.text.secondary
                }

              }}
            >
              {linksList}
              <PrimaryButton component={Link} to={`/${links[links.length - 1].toLowerCase()}`}>
                {links[links.length - 1]}
              </PrimaryButton>
            </Stack>
          </Drawer>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavLayout