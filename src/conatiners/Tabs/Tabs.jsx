import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../action/index';
import PropertyCard from '../../components/UI/Card/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import './Tabs.css';

const Tab = () => {
    const property = useSelector(state => state.property);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProperty());
    }, []);

    // State to store the selected city
    const [selectedCity, setSelectedCity] = useState('New York');

    // Filter properties based on the selected city
    const allProperties = property.properties; // Rename 'data' to 'allProperties'
    const filteredProperties = allProperties.filter(property => property.cityName === selectedCity);

    const items = filteredProperties;
    let limit = 6;
    let page = 1;
    console.log(filteredProperties);

    const showMore = () => {
        limit = limit + 3;
        dispatch(getProperty(page, limit));
    }

    // Function to change the selected city
    const changeCity = (city) => {
        setSelectedCity(city);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={10}>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                            <li className="nav-item" role="presentation">
                                <Button
                                    className={`nav-link ${selectedCity === 'New York' ? 'active' : ''}`}
                                    style={{ borderRadius: '20px' }}
                                    onClick={() => changeCity('New York')}
                                    type="button"
                                    variant='outline'
                                >
                                    New York
                                </Button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Button
                                    className={`nav-link ${selectedCity === 'Mumbai' ? 'active' : ''}`}
                                    style={{ borderRadius: '20px' }}
                                    onClick={() => changeCity('Mumbai')}
                                    type="button"
                                    variant='outline'
                                >
                                    Mumbai
                                </Button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Button
                                    className={`nav-link ${selectedCity === 'Paris' ? 'active' : ''}`}
                                    style={{ borderRadius: '20px', border: '1 px solid #3f42e3', }}
                                    onClick={() => changeCity('Paris')}
                                    type="button"
                                    variant='outline'
                                >
                                    Paris
                                </Button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Button
                                    className={`nav-link ${selectedCity === 'London' ? 'active' : ''}`}
                                    style={{ borderRadius: '20px', border: '1 px solid #3f42e3', }}
                                    onClick={() => changeCity('London')}
                                    type="button"
                                    variant='outline'
                                >
                                    London
                                </Button>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={2}>
                        <Button variant='outline' className='tab-button '>View All <FontAwesomeIcon icon={faArrowRightLong} /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="tab-content" id="pills-tabContent">
                            {filteredProperties.map(property => (
                                <div
                                    key={property.id}
                                    className={`tab-pane fade ${selectedCity === property.cityName ? 'show active' : ''}`}
                                    id={`pills-${property.cityName.toLowerCase()}`}
                                    role="tabpanel"
                                >
                                </div>
                            ))}

                            <PropertyCard
                                item={items}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="d-flex justify-content-center align-items-center my-2">
                        <span className='show-more' onClick={showMore}><FontAwesomeIcon icon={faHourglass1} /> Show More</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tab;
