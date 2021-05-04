import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function OurCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    props.onCarouselIndexChange(index);
  };

  return (
    <>
      {console.log(props.item)}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        pause='hover'
        interval='3000'>
        {props.items.map((item, index) => (
          <Carousel.Item
            key={item.name}
            onClick={() => props.onCarouselIndexChange(index)}
            className=''>
            <img
              className='d-block justify-self-center'
              src={item.image}
              style={{ height: 500 }}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default OurCarousel;
