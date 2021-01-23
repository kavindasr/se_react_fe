import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { AvForm, AvInput } from 'availity-reactstrap-validation';

class RIC extends Component {
  state = {};

  edit = () => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  }
  
  save = (event, values) => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
    this.props.edit(this.props.id, values);
  }

  remove = () => {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          {this.state.editing
            ? <AvForm onValidSubmit={this.save}>
              <AvInput name="Crime_ID" defaultValue={this.props.Crime_ID} />
            </AvForm>
            : this.props.Crime_ID}
        </td>
        <td>
          {this.state.editing
            ? <AvForm onValidSubmit={this.save}>
              <AvInput name="Portrait" defaultValue={this.props.Portrait} />
            </AvForm>
            : this.props.Portrait}
        </td>
        <td><Button color="danger" onClick={this.remove}>Remove</Button></td>
      </tr>
    )
  }
}

export default RIC;
