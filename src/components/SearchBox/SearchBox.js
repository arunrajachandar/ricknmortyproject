import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function SearchBox({searchChange}){
        return (<div>
              <InputGroup className="mb-3">
    <FormControl
      placeholder="Character Name"
      aria-label="Character Name"
      onChange ={searchChange}
    />
  </InputGroup>

        </div>)

}

