
import {Button, ButtonGroup, Container, Form, Grid, Header, Icon, Segment, Statistic} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>40 </Statistic.Value>

      </Statistic>
        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={8} >
              <Statistic size='tiny' color='green'>
              <Statistic.Label>Income</Statistic.Label>
              <Statistic.Value>40 </Statistic.Value>
              </Statistic>
              </Grid.Column>
              <Grid.Column width={8} >
              <Statistic size='tiny' color='red'>
              <Statistic.Label>Expenses</Statistic.Label>
              <Statistic.Value>20 </Statistic.Value>
              </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      <Header as="h3">History</Header>
      <Segment color='red'>
      <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> something
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>20 
              </Grid.Column>
              <Grid.Column width={3}>
              <Icon name="edit" bodered/>
              <Icon name="trash"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
      <Segment color='green'>
      <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> something else
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>200 
              </Grid.Column>
              <Grid.Column width={3}>
              <Icon name="edit" bodered/>
              <Icon name="trash"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
      <Segment color='red'>
      <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> some
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>10 
              </Grid.Column>
              <Grid.Column width={3}>
              <Icon name="edit" bodered/>
              <Icon name="trash"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shiny thing'/>
        <Form.Input icon='dollar' width={4} label='Value' placeholder='100.0'/>
        </Form.Group>
        <ButtonGroup style={{ marginTop:20 }}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary> Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
