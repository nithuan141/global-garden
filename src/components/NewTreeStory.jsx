import react from 'react'
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, Input, Label, FormGroup } from 'reactstrap'
import tree from '../assets/img/icons/tree.svg'

export const NewTreeStory = (props) => {
    const { open, onClose } = props

    return <Modal isOpen={open} toggle={onClose} >
        <ModalHeader toggle={onClose}>Submit the request to plant a Tree.</ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Col></Col>
                    <Col><img alt="..." src={tree} style={{ height: '5rem' }} /></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Location</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Your story behind the tree</Label>
                            <Input type="textarea" name="text" id="story" />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={onClose}>Submit</Button>
            <Button color="secondary" onClick={onClose}>Close</Button>
        </ModalFooter>
    </Modal>
}