import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from 'styles/styles'
import * as messages from 'messages/de.json'
import supporterImage from 'assets/2020-03-18-hackathon.jpg'

const Supporters = () => {
  const classes = styles()
  return (
    <>
      <Typography variant="h6" component="h3" className={classes.landingHeader}>
        {messages['landingpage.support']}
      </Typography>
      <Grid container>
        <Grid item>
          <img
            src={supporterImage}
            alt="logo"
            className={classes.landingSupporterImage}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Supporters
