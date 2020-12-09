import React, {Component} from 'react';
import Weak from './Weak';
import Caps from './Caps';
import TextGreen from './TextGreen';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>
          <Weak>
            <Caps>
              <TextGreen>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis quis nulla id velit ultricies feugiat id ac odio. 
                Aliquam erat volutpat. Phasellus magna quam, finibus a posuere
                nec, pretium ut lorem. 
              </TextGreen>
            </Caps>
          </Weak>
        </p>
      </div>
    );
  }
}
