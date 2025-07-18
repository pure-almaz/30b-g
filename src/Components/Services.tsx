
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart,faHandshake,faCheckCircle,faPlane,faFileInvoice,faTruck} from "@fortawesome/free-solid-svg-icons";
import {default as JsonData} from "../data/data.json";


export function Services()
{
    return(
        <div id='services' className='text-center'>
        <Container>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              We offer the following services to help you source and deliver high-quality gadgets efficiently and affordably:
            </p>
          </div>
          <Row>
          {JsonData
              ? JsonData.Services.map((d, i) => (
                  <Col md={4} key={`${d.name}-${i}`} >
                    {' '}
                    {d.icon=='faTruck'?<FontAwesomeIcon icon={faTruck} />:''}
                    {d.icon=='faShoppingCart'?<FontAwesomeIcon icon={ faShoppingCart} />:''}
                    {d.icon=='faHandshake'?<FontAwesomeIcon icon={faHandshake}/>:''}
                    {d.icon=='faCheckCircle'?<FontAwesomeIcon icon={faCheckCircle}/>:''}
                    {d.icon=='faPlane'?<FontAwesomeIcon icon={faPlane}/>:''}
                    {d.icon=='faFileInvoice'?<FontAwesomeIcon icon={faFileInvoice}/>:''}
              
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Col>
                ))
              : 'loading'}
          </Row>
        </Container>
      </div>
    )

}