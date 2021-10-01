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
import tree from '../assets/img/icons/gg_map_icon.png'
import { PrivateHome } from './PrivateHome';

export const PublicHome = ({user}) => {
    return <main>
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
                <Bubbles />
                <section style={{marginBottom: '10px'}}>
                {user && <PrivateHome />}
                </section>
                <section>
                    <PublicTreemap user={user}/>
                </section>
            </section>
        </div>
    </main>
}

export const TreeBadge = ({ count }) => {
    return <Button color="primary" type="button">
        <Badge className="badge-white">{count || ''}</Badge>
        <TreeIcon />
    </Button>
}

export const TreeIcon = () => {
    return <span className="btn-inner--icon mr-1" style={{ height: '2.5rem' }}>
    <img alt="..." src={tree} style={{ height: '2.5rem' }}/>
</span>
}

export const Bubbles = () => {
    return <div className="shape shape-style-1 shape-default">
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
}