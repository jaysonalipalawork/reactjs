import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input, FormText } from 'reactstrap';

const MapStateToProps = state => ({
  notes: state.notes,
});

class ZeplinForm extends Component {
  constructor() {
    super();

    this.state = {
      noteId: null,
      noteText: 'noted', // noteDescription
      patientId: null,
      patientName: 'Patient',
      providerId: 2018,
      CreatedBy: 'Terry Lee',
      CreatedById: 2018,
      ReasonCodeId: null, // codeId
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { patientName, noteId, noteText, } = this.state;
    const { notes } = this.props;

    return (
      <Form>
        <FormGroup>
          <Label>Patient Name: { patientName }</Label>
          <Input 
            type="text" 
            id="patientName"
            value={patientName}
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Note Type: { noteId }</Label>
          <Input 
            type="select" 
            id="noteId"
            onChange={this.handleChange}>
            {notes.map(el => <option key={el.Id} value={el.Id}>{el.Name}</option>)}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Note Text: { noteText }</Label>
          <Input 
            type="textarea" 
            id="noteText"
            value={noteText}
            onChange={this.handleChange}
            />
        </FormGroup>

      </Form> 
    );
  }
}
const ClientForm = connect(MapStateToProps)(ZeplinForm);
export default ClientForm;