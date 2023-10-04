import React from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDownLeftRight, faBath, faBed, faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './card.css';
import { useNavigate } from 'react-router-dom';

const PropertyCard = (props) => {
  const navigate = useNavigate();

  const readMore = (id) => {
    navigate(`/property/${id}`);
  }
  return (
    <>

      <Row>
        {props.item.map((property) => (
          <Col key={property.id} md={4} style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '0' }}>
            <Card style={{ width: '100%', padding: '12px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', background: '#feffff', }} >
              <Carousel style={{ maxWidth: '100%', maxHeight: '300px', position: 'relative' }} indicators={true}>
                {Object.values(property.images).map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{ objectFit: 'cover', height: '100%', borderRadius: '20px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Button
                style={{
                  background: 'white',
                  border: '#3f42e3',
                  color: '#3f42e3',
                  borderRadius: '100%',
                  position: 'absolute',
                  right: '22px',
                  height: '30px',
                  width: '30px',
                  justifyContent: 'center',
                  textAlign: 'center',
                  top: '24px',
                  padding: 0
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button
                style={{
                  background: 'white',
                  border: '#3f42e3',
                  color: '#3f42e3',
                  position: 'absolute',
                  left: '22px',
                  padding: 0,
                  top: '24px',
                  height: '30px',
                  width: '80px',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '20px'
                }}>
                {property.for}
              </Button>
              {
                property.popular == true ? (
                  <Button
                    style={{
                      background: '#3f42e3',
                      border: 'none',
                      color: '#fff',
                      position: 'absolute',
                      left: '-5px',
                      padding: 0,
                      top: '40%',
                      height: '30px',
                      width: '80px',
                      fontSize: '14px',
                      fontWeight: 600,
                      boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)'
                    }}
                  >
                    Popular
                  </Button>
                ) : (
                  ''
                )
              }

              <Card.Body>
                <Row style={{ marginTop: '10px', }}>
                  <Col xs={12} >
                    <Card.Text style={{ fontSize: '12px', fontWeight: 600 }}><FontAwesomeIcon icon={faLocationDot} color='#99793f' /> {property.address.loactionRaod}</Card.Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', }}>
                  <Col xs={12} >
                    <Card.Text style={{ fontSize: '14px', fontWeight: 700 }}>{property.address.locationAddress}</Card.Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: '15px', }}>
                  <Col xs={3} style={{ borderRight: '1px dashed #ededf0' }}>
                    <Card.Text className='cardtext' style={{ fontSize: '12px', fontWeight: 600 }}>
                      <FontAwesomeIcon icon={faBuilding} size="xs" /><br /> {property.room} Room</Card.Text>
                  </Col>
                  <Col xs={3} style={{ borderRight: '1px dashed #ededf0' }}>
                    <Card.Text className='cardtext' style={{ fontSize: '12px', fontWeight: 600 }}><FontAwesomeIcon icon={faBed} size="xs" /><br /> {property.bed} Bed</Card.Text>
                  </Col>

                  <Col xs={3} style={{ borderRight: '1px dashed #ededf0' }} >
                    <Card.Text className='cardtext' style={{ fontSize: '12px', fontWeight: 600 }}><FontAwesomeIcon icon={faBath} size="xs" /><br /> {property.bath} Bath</Card.Text>
                  </Col>
                  <Col xs={3} >
                    <Card.Text className='cardtext' style={{ fontSize: '12px', fontWeight: 600 }}><FontAwesomeIcon icon={faArrowsUpDownLeftRight} size="xs" /><br /> {property.area} sft</Card.Text>
                  </Col>
                </Row>
                <Row className="justify-content-between align-items-center mr-2" style={{ marginTop: '15px', }}>
                  <hr style={{ border: '1px dashed #ededf0' }} />
                  <Col xs={5}>
                    <Card.Text >${property.price} <span className='cardtext'>/ Month</span></Card.Text>
                  </Col>
                  <Col xs="auto">

                    <Button
                      style={{
                        background: '#3f42e3',
                        border: '#f1f6fc',
                        color: '#fff',
                        borderRadius: '10px',
                      }}
                      onClick={() => readMore(property.id)}
                    >
                      Read More
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
    </>
  );
};

export default PropertyCard;
