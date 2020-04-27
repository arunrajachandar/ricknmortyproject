import React,{useState} from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import Episodes from './components/Episodes/Episodes';
import {Spinner,Navbar,Nav} from 'react-bootstrap';
import Characters from './components/Characters/Characters';
import Home  from './components/Home/Home';

const GET_RNM_INFO = gql`query {
  episodes {
    info{
      count,
      pages
      
    }
    results {
      id,
      name,
      air_date,
      episode
    }
  },
  characters {
    info{
      count,
      pages
  }
    results {
      name,
      image
    }
  }
}`;

function App() {
  const [option, setOption] = useState('home');
  
  const { data, loading, error } = useQuery(GET_RNM_INFO);


  if (error) return <div className="App"><p>Error</p></div>;
  return (
    
    <div className="App">
      <Navbar collapseOnSelect  bg="dark" variant="dark">
  <Navbar.Brand onClick={()=>
      setOption('home')
    
      }>Rick-And-Morty</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={()=>
      setOption('characters')
    
      }>Characters</Nav.Link>
      <Nav.Link onClick={()=>
      setOption('episodes')
    
      }>Episodes</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


{loading ?
  <div className="adjustSides"><Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner></div>:


 
option ==='home'?
<div className="adjustSidesChar"><Home />
</div>:
option ==='characters' ?
<div className="adjustSidesChar"><Characters characterInfo ={data}/>
</div>
:

        <div className="adjustSides"><Episodes rnmInfo={data} /></div>

}
        
    </div>
  );
}

export default App;
