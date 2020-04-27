import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css';

export default function Cards({characters}){
    return (<div className=" fadeIn fadeOut">
        <Container fluid>
            <Row>
            {       
                    characters.map((e,i)=>{
                        return (
                            <Col xl={3} lg={4} mg={6} sm={12} key={i}> 
                            <Card className="text-white m-4 br-2 rounded" >
                        <Card.Img src={`${e.image}?50*50`} className="rounded mx-auto d-block img" />
                        <Card.ImgOverlay>
                          <Card.Text className="name">{e.name}</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                      </Col>
                    );
                        })
            }
            </Row>
 </Container>
 </div>  
);
}