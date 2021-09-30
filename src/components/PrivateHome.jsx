import React from 'react'

import tree from '../assets/img/icons/tree.svg'
import coin from '../assets/img/icons/coin.svg'
import certificate from '../assets/img/icons/certificate.svg'

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    CardTitle,
    CardText,
    CardSubtitle
} from "reactstrap";


export const PrivateHome = () => {
    return <Container>
        <Row>
            <Col>
                <Wallet />
            </Col>
            <Col>
                <Asset />
            </Col>
            <Col>
                <Certificate />
            </Col>
        </Row>
    </Container>
}

export const Wallet = () => {
    return <Card>
        <CardBody>
          <CardTitle tag="h5">5</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">TCN Wallet</CardSubtitle>
        </CardBody>
        <img width="100%" src={coin} alt="Card image cap" style={{height: '5rem'}}/>
        <CardBody>
          <CardText>Your tree coin balance.</CardText>
        </CardBody>
      </Card>
}

export const Asset = () => {
    return <Card>
        <CardBody>
          <CardTitle tag="h5">You own 5</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Number of Trees</CardSubtitle>
        </CardBody>
        <img width="100%" src={tree} alt="Card image cap" style={{height: '5rem'}}/>
        <CardBody>
          <CardText>Your tree assets.</CardText>
        </CardBody>
      </Card>
}

export const Certificate = () => {
    return <Card>
        <CardBody>
          <CardTitle tag="h5"> 2 </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Certificate or Bagdes</CardSubtitle>
        </CardBody>
        <img width="100%" src={certificate} alt="Card image cap" style={{height: '5rem'}}/>
        <CardBody>
          <CardText>Your certificate and badges.</CardText>
        </CardBody>
      </Card>
}