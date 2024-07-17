 import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import agent from '../../app/api/agent'
import { useState } from 'react';
 
 const AboutPage = () => {
  const [validationError, setValidationError] =  useState<string[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidationError()
          .then(() => console.log('should not see this'))
          .catch(error => setValidationError(error));
  }
   return (
     <Container>
        <Typography gutterBottom variant="h2">Error for testing purposes</Typography>
        <ButtonGroup>
          <Button variant='contained' onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test for 400 errors</Button>
          <Button variant='contained' onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test for 401 errors</Button>
          <Button variant='contained' onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test for 404 errors</Button>
          <Button variant='contained' onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test for Server errors</Button>
          <Button variant='contained' onClick={getValidationError}>Test for Validation errors</Button>
        </ButtonGroup>
        {validationError.length>0 && 
          <Alert severity='error'>
              <AlertTitle>Validation Errors</AlertTitle>
              <List>
                {validationError.map((error)=> (
                <ListItem key={error}>
                    <ListItemText>{error}</ListItemText>
                </ListItem>

              ))
                }
                </List>
          </Alert>}
    </Container>
   )
 }
 
 export default AboutPage