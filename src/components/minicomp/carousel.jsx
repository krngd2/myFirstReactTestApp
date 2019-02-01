import React, { Component } from 'react' 
import { Carousel  } from "react-materialize";
export default class CarouselComp extends Component {
  render() {
    return ( 
        <Carousel images={[
            'https://lorempixel.com/250/250/nature/1',
            'https://lorempixel.com/250/250/nature/2',
            'https://lorempixel.com/250/250/nature/3',
            'https://lorempixel.com/250/250/nature/4',
            'https://lorempixel.com/250/250/nature/5'
          ]} />
    )
  }
}
