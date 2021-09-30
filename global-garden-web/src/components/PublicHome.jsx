import React from 'react'

// reactstrap components
import {
    Badge,
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

import PublicTreemap from "./PublicTreeMap";
import tree from '../assets/img/icons/tree.svg'

export const PublicHome = () => {
    return <main>
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <section>
                <PublicTreemap />
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col>
                                <TreeBadge count={1}/>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </section>

        </div>
    </main>
}

export const TreeBadge = ({ count }) => {
    return <Button color="primary" type="button">
        <Badge className="badge-white">{count || ''}</Badge>
        <span className="btn-inner--icon mr-1" style={{ minWidth: '25px' }}>
            <img alt="..." src={tree} />
        </span>
    </Button>
}