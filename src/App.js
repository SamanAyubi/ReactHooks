
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DislayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader Title='Budget'/>
      <DisplayBalance size='small'  title='Your balance' value='40'/>
       <DislayBalances/>
        <MainHeader Title='History' as='h3'/>
      <EntryLine description="sometging" value='30'/>
      <EntryLine description="sometging else" value='0' isExpense/>
      <EntryLine description="sometging new" value='30'/>
      <MainHeader Title='Add new transaction' as='h3'/>
      <NewEntryForm/>
    </Container>

  );
}

export default App;
