import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import "./UpdateRIC";

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
    console.log(this.props.first_name)
    fetch(process.env.REACT_APP_API_HOST+'/api/police/wanteds',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        description:"huihiooj",
        image:"pexels-photo-2379004.jpeg",
        status:1,
        police_id : this.props.id
      })
  });
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
              <AvInput name="first_name" defaultValue={this.props.first_name} />
            </AvForm>
            : this.props.first_name}
        </td>
        <td>
          {this.state.editing
            ? <AvForm onValidSubmit={this.save}>
              <AvInput name="last_name" defaultValue={this.props.last_name} />
            </AvForm>
            : this.props.last_name}
        </td>
        <td><Button color="danger" onClick={this.remove}>Remove</Button></td>
      </tr>
    )
  }
}

export default RIC;
