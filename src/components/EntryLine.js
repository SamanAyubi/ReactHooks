import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

function EntryLine({description,value, isExpense}) {
    return  <Segment color={isExpense? 'red': 'green'}>
        <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> {description}
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>{value}
              </Grid.Column>
              <Grid.Column width={3}>
              <Icon name="edit" bodered/>
              <Icon name="trash"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    </Segment>
}
 
export default EntryLine;

