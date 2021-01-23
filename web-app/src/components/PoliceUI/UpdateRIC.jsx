import React, { Component } from 'react';
import { Col, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import TableRow from './TableRow';
 
 
class RIC extends Component {
  state = {
    data: {
      1: {
        Crime_ID: '56',
        Portrait: "jjo",
      },
      2: {
        Crime_ID: '94',
        Portrait:"giij",
      },
      3: {
        Crime_ID: '34',
        Portrait: "hbjbjd",
      }
    }
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
  }

  checkId = (value) => {
    return !this.state.data[value] || 'That Criminal ID already exists, please edit the existing row or pick another one.'
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
                <th>Criminal ID</th>
                <th>Crime ID</th>
                <th>Portrait</th>
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
            <AvField label="Criminal ID" name="id" required validate={{checkId: this.checkId}} />
            <AvField label="Crime ID" name="Crime_ID" required />
            <AvField label="Portrait" name="Portrait" required />
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