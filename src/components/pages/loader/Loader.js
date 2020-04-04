import React, { Component } from "react";

import {Spinner,ButtonToolbar,Button} from "react-bootstrap";

class Loader extends Component {


  render() {
    
    return (
      <div className="Loader">
        
        <ButtonToolbar className="Loader__button">
          <Button size="lg" variant="danger" disabled>
            <Spinner
              as="span"
              animation="border"
              size="lg"
              role="status"
              aria-hidden="true"
              variant="light"
            />
            Loading...
          </Button>
        </ButtonToolbar>

      </div>
    );
  }
}

export default Loader;


