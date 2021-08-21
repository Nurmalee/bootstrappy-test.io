// import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CarouselTry from '../components/CarouselTry';
import NavigationBar from '../components/NavigationBar'

const Land = () => {
    return (
        <>
        <NavigationBar />
        <Container>
            <Form className="border border-primary p-3 my-3">
                <Row>
                    <Col md>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col md>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Col>
                </Row>

                <Link to="/Admin">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Link>
                
            </Form>

            <div className="border border-primary p-3 my-3">
                <Row className="my-2">
                    <Col lg>
                        <Card className="bg-dark text-white p-3 mb-2">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col lg className="mb-2">
                        <Card className="bg-dark text-white p-3 mb-2">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col> 
                </Row>

                <Row className="my-2">
                    <Col lg >
                        <Card className="bg-dark text-white p-3 mb-2">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col lg >
                        <Card className="bg-dark text-white p-3 mb-2">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col>
                    
                    <Col lg >
                        <Card className="bg-dark text-white p-3 mb-2">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col> 
                </Row>

                <Button>Try Out!!!</Button>
            </div>
           

            <Row>
                <Col lg>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1628191011227-522c7c3f0af9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-success">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1622495965794-16c9a3afef96?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <h5 class="card-title">Card title</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <CarouselTry />
           
        </Container>
        </>
    )
}

export default Land
