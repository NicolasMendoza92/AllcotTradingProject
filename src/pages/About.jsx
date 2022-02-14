import React from 'react'
import { Container } from 'react-bootstrap'
import { Historia } from '../components/aboutUs/Historia'
import { HistoriaCards } from '../components/aboutUs/HistoriaCards'

function About() {
    return (
        <div>
            <Container>
            <Historia/>
            <HistoriaCards/>
            </Container>
        </div>
    )
}

export default About