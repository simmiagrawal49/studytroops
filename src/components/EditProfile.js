import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export  class EditProfile extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Short Bio
          </Label>
          <Col sm={8}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Profile Image
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Background Image
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </FormGroup>
        <br />
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
export default EditProfile;