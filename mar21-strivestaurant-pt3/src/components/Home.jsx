import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import items from "../data/menu.json";
import DishComments from "./DishComments";
import ReservationForm from "./ReservationForm";
import Reservations from "./Reservations";
import OurCarousel from "./OurCarousel";
class Home extends React.Component {
  state = {
    selectedDish: items[0],
    index: 0, // we always need to provide an initial state for our component
    header: [
      "Reservations",
      "SoWhat",
      "honestly",
      "I'm bored",
      "Your pant has hole",
    ],
    onOff: false,
  };

  handleCarouselIndexChange = (index) => {
    this.setState({
      selectedDish: items[index],
      index: index,
      onOff: !this.state.onOff,
    });
  };

  render() {
    // render is the ONLY REQUIRED method in a class component
    return (
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={12} md={3}>
            <Reservations header={this.state.header[this.state.index]} />
          </Col>
          <Col xs={12} md={9}>
            <h1>Welcome to Strivestaurant</h1>
            <p>The best pasta dishes you can find on the web!</p>
            <OurCarousel
              items={items}
              onCarouselIndexChange={this.handleCarouselIndexChange}
            />
            {this.state.selectedDish.name !== "Amatriciana" && (
              <DishComments dish={items[this.state.index]} marginTop={0} />
            )}
            {this.state.selectedDish.comments &&
            this.state.selectedDish.comments.some(
              (comment) => comment.rating <= 5
            ) ? (
              <Alert variant='danger'>I won' eat here!</Alert>
            ) : (
              <ReservationForm />
            )}
          </Col>
        </Row>
        <Row className='justify-content-center mt-3'></Row>
        <Row className='justify-content-center mt-3'></Row>
        <Row className='justify-content-center mt-3'>
          <Col xs={12} md={8}></Col>
        </Row>
      </Container>
    );
  }
  s;
}

export default Home;
