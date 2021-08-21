// import SideNav from '../../components/SideNav'
import { Row, Col, Button, Card } from 'react-bootstrap';
import { ContentContainer, ContentWrapper } from './allStyles'

const Dashboard = ({ sidebarToggle }) => {

    return (
      <ContentContainer>
          <ContentWrapper className="border border-success">
          <Row>
                <div class="col-lg-6 col-xl-4">
                    <Card className="mb-3 border border-dark">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1628191011227-522c7c3f0af9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <Card className="mb-3 border border-dark">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-success">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <Card className="mb-3 border border-dark">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body> 
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <h5 class="card-title">Card title</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="outline-info">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Row>

            <Row className="my-2">
                    <Col lg={6} xl={4}>
                        <Card onClick={sidebarToggle} className="bg-dark text-white p-3 mb-3">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col lg={6} xl={4}>
                        <Card className="bg-dark text-white p-3 mb-3">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col>
                    
                    <Col lg={6} xl={4}>
                        <Card className="bg-dark text-white p-3 mb-3">
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto expedita libero atque? Excepturi laudantium officiis corrupti corporis voluptates perspiciatis rerum illum. Repellendus at placeat praesentium nisi quaerat aperiam recusandae.
                            </Card.Text>
                        </Card>
                    </Col> 
                </Row>

          </ContentWrapper>
      </ContentContainer>
    )
}

export default Dashboard
