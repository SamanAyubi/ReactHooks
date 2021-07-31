
import React from 'react';
import { Form } from 'semantic-ui-react';
import SaveOrCancel from './SaveOrCancel';

function NewEntryForm() {
    return <Form unstackable>
    <Form.Group>
    <Form.Input icon='tags' width={12} label='Description' placeholder='New shiny thing'/>
    <Form.Input icon='dollar' width={4} label='Value' placeholder='100.0'/>
    </Form.Group>
    <SaveOrCancel/>
  </Form>
}
 
export default NewEntryForm;
