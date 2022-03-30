import React from 'react'
import styled from 'styled-components'
import { getFooter } from '@mui-treasury/layout'
import { Grid, Typography, Link, makeStyles, Box } from '@material-ui/core'

const useTextStles= makeStyles({
    root: {
        fontSize: 12,
        color: '#666666',
    }
})

const Footer = getFooter(styled)

const AppFooter = () => {
    const classes = useTextStles()
  return (
    <Footer>
       <Box px={'1rem'} my={'1rem'} >
       <Grid container >
            <Grid item xs={12} sm={4} >
                <Typography classes={classes} >
                    47.43 GB (47%) of 100 GB used
                </Typography >
                <Link classes={classes}>Manage</Link>
            </Grid>
            <Grid item xs={12} sm={4} >
                <Box textAlign='center' color='#6666' >
                <Link classes={classes} >Terms</Link> | <Link  classes={classes}>Privacy</Link> | <Link  classes={classes}>Program Policies</Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} >
                <Box textAlign='right'  >
                <Typography  classes={classes}>Last account active: 22 minutes ago </Typography>
                <Link  classes={classes}>Detail</Link>
                </Box>
            </Grid>
        </Grid>
       </Box>
    </Footer>
  )
}

export default AppFooter