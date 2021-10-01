import react from 'react'
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, Card, CardTitle, CardText } from 'reactstrap'

export const TreeStory = (props) => {
    const { open, owner, onClose, story, planteddate, imgUrl, uniqueId , lat, lng, title} = props

    return <Modal isOpen={open} toggle={onClose} >
        <ModalHeader toggle={onClose}>{title} </ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Col>
                        <img alt="..." src={imgUrl} style={{ height: '10rem', alignItems: "center" }} align ="center" />
                    </Col>
                </Row> <br></br> <Row></Row>


                <Card body inverse color="primary">
        <CardText> <Row>
            <Col>ID </Col><Col>{uniqueId}</Col></Row>
                        <Row><Col>Location</Col><Col>{`${lat}, ${lng}`}</Col></Row>
                        <Row><Col>Date </Col><Col>{planteddate}</Col></Row>
                        <Row><Col>Owner </Col><Col>{owner}</Col></Row>
                </CardText>
      </Card>
      <br></br>
                <Row>
                <Col>
                    {story}
                </Col>
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={onClose}>Close</Button>
        </ModalFooter>
    </Modal>
}