import React from 'react';
import Accordion from 'react-bootstrap/Accordion'


const Services = () =>{
    return(
        <section id="services" className="section3__services">
          <div className="section3__div--box">
            <Accordion defaultActiveKey="0" className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sed ut perspiciatis</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Ut enim ad minima veniam</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sit amet, consectetur, adipisci</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
    )
}



export default Services;