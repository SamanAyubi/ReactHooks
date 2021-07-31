import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DislayBalances() {
    return <Segment textAlign='center'>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={8} >
        <DisplayBalance size='tiny' color='green' title='Income' value='300'/>
        </Grid.Column>
        <Grid.Column width={8} >
       <DisplayBalance size='tiny' color='red' title='Expense' value='30'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
}
 
export default DislayBalances;

  