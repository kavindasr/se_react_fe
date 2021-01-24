import React, { Component } from 'react';
import { Col, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import TableRow from './TableRow';
 
 
class RIC extends Component {
  state = {
    data: []
  };

  toggleAddModal = () => {
    this.setState(prevState => ({
      addModal: !prevState.addModal,
    }));
  }

  add = (event, {id, ...rest}) => {
    this.setState(prevState => {
      prevState.data[id] = rest;
      return {...prevState, addModal: false};
    });
  }

  remove = (id) => {
    this.setState(prevState => {
      delete prevState.data[id];
      return prevState;
    })
    fetch(process.env.REACT_APP_API_HOST+'/api/police/wanteds',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : this.props.id
      })
  });
  }

  checkId = (value) => {
    return !this.state.data[value] || 'That Criminal ID already exists, please edit the existing row or pick another one.'
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_API_HOST+"/api/police/wanteds")
    fetch(process.env.REACT_APP_API_HOST+"/api/police/wanteds")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            data :  result.wanteds
         });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button className="float-right"  outline color="primary" onClick={this.toggleAddModal}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.state.data).map(key => {
                const row = this.state.data[key];
                return <TableRow key={key} id={key} id={key} {...row}  remove={this.remove} />
              })}
            </tbody>
          </Table>
        </Row>
        <Modal isOpen={this.state.addModal} toggle={this.toggleAddModal}>
          <AvForm onValidSubmit={this.add}>
          <ModalHeader toggle={this.toggleAddModal}>
            Add a new people
          </ModalHeader>
          <ModalBody>
            <AvField label="ID" name="id" required validate={{checkId: this.checkId}} />
            <AvField label="First Name" name="first_name" required />
            <AvField label="Last Name" name="last_name" required />
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
          </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    )
  }
}
 
export default RIC;