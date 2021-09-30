import react from 'react'
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col } from 'reactstrap'
import tree from '../assets/img/icons/tree.svg'

export const TreeStory = (props) => {
    const { open, owner, onClose, story, planteddate } = props

    return <Modal isOpen={open} toggle={onClose} >
        <ModalHeader toggle={onClose}>{owner}'s Tree Planted on {planteddate}</ModalHeader>
        <ModalBody>
            <Container>
                <Row>
                    <Col>
                        <img alt="..." src={tree} style={{ height: '10rem' }} />
                    </Col>
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