import React from 'react';
import { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };


const Slider = () => {
  const [error, setError] = useState(null);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/sliders?populate=*', { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setSliders(data))
      .catch((error) => setError(error))
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  
    return (
      <Carousel>
      {sliders.map(index => (
            <CarouselItem key={index.id} interval={3000}>
            <img  src={`http://localhost:1337${index.attributes.image.data[0].attributes.url}`} alt='...' />
            <Carousel.Caption>
            <h3>{index.attributes.slider_header}</h3>
            <p>{index.attributes.caption}</p>
            </Carousel.Caption>
            </CarouselItem>
        )
        )}
    </Carousel>
    )
  
}

export default Slider;