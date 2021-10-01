import react, { useState } from 'react'
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, Input, Label, FormGroup } from 'reactstrap'
import tree from '../assets/img/icons/tree.svg'
import treeDataService from '../service/treedataservice'

export const NewTreeStory = (props) => {
    const { open, onClose } = props
    const [storyData, setStory] =  useState({ uniqueId: treeDataService.getNextId(), lat: undefined, lng: undefined, owner: '',  
                                                planteddate: '', story: '', imgUrl:'', title: ''})

    const onChange = (e) => {
        let data = {...storyData, [e.target.name]: e.target.value}
        setStory(data)
    }

    const onAdd = (e) => {
        treeDataService.addNewTree(storyData);
        alert('Successfully added!')
        onClose()
    }

    return <Modal isOpen={open} toggle={onClose} >
        <ModalHeader toggle={onClose}>Submit the request to plant a Tree.</ModalHeader>
        <ModalBody>
            <Container>
                {/* <Row>
                    <Col></Col>
                    <Col><img alt="..." src={tree} style={{ height: '5rem' }} /></Col>
                    <Col></Col>
                </Row> */}
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title"  value = {storyData.title} onChange={onChange}/>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story" name="Location">Location</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                    </Col>
                </Row> <Label for="story">Cordinates</Label>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input type="text" placeholder="Lattitude" name="lat" id="lat" value = {storyData.lat} onChange={onChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input type="text" placeholder="Longittude" name="lng" id="lng"  value = {storyData.lng} onChange={onChange}></Input>
                        </FormGroup>
                    </Col>
                </Row><span style={{color: "green", fontSize: '0.75rem'}}>*Please enter cordinates for time being, location API will integrate later.</span>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Owner</Label>
                            <Input type="text" name="owner" id="owner"  value = {storyData.owner} onChange={onChange}/>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Your story behind the tree</Label>
                            <Input type="textarea" name="story" id="story"  value = {storyData.story} onChange={onChange}/>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Planted Date</Label>
                            <Input type="date" name="planteddate" id="planteddate"  value = {storyData.planteddate} onChange={onChange}/>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="story">Image URL</Label>
                            <Input type="text" name='imgUrl' id='imgUrl'  value = {storyData.imgUrl} onChange={onChange}    ></Input>
                            <span style={{color: "green", fontSize: '0.75rem'}}>*Please upload the image in any public cloud (dropbox, google drive, onedrive) and paste the public url here.</span>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={onAdd}>Submit</Button>
            <Button color="secondary" onClick={onClose}>Close</Button>
        </ModalFooter>
    </Modal>
}