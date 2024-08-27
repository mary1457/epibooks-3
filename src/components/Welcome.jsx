import { Alert, Container, Row, Col } from 'react-bootstrap'

const Welcome = function () {
    return (
        <Container fluid className="p-0">
            <Row className="justify-content-center align-items-center ">
                <Col xs={12} md={8} lg={6}>
                <Alert variant="success" className="m-2">
                    <Alert.Heading className="text-center">EpiBooks</Alert.Heading>
                    <p className="text-center">
                        Benvenuti alla EpiBooks, il luogo perfetto per scoprire, esplorare e acquistare i tuoi libri preferiti. Con una vasta selezione di titoli che spaziano dalla narrativa alla saggistica, dai classici senza tempo alle ultime novità, la nostra libreria offre qualcosa per ogni lettore. Sia che tu stia cercando un romanzo avvincente, un manuale per apprendere nuove competenze o un libro per bambini, qui troverai ciò che fa per te.
                    </p>
                    <hr />
                    <p className="mb-0 text-center">
                        Esplora le nostre categorie, approfitta delle offerte esclusive e goditi il piacere della lettura con un semplice clic.
                    </p>
                </Alert>
                </Col>

            </Row>
            <Row className="justify-content-center align-items-center ">
            <Col >
                <h3 className="p-1 text-center">Leggi, scopri, sogna: la tua avventura inizia qui.</h3>
                </Col>
            </Row>
        </Container>
    
    )
}

export default Welcome