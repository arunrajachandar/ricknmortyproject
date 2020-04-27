import React from 'react';
import Cards from '../Cards/Cards';
import SearchBox from '../SearchBox/SearchBox';




class Characters extends React.Component{
    constructor(){
        super();
        this.state={
            characters:[],
            searchField:''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount(){
        this.setState({characters: this.props.characterInfo.characters.results})
    }
    onSearchChange=(evt)=>{
       this.setState({searchField: evt.target.value})
 }
    render(){
        const {characters,searchField}= this.state;
        const filteredCharacter = characters.filter(character =>{
            return character.name.toLowerCase().includes(searchField.toLowerCase());
          }) 
        return (<div className="fadeIn"><SearchBox searchChange={this.onSearchChange}/>{
        filteredCharacter.length>0 ?
            <Cards characters={filteredCharacter}/>:
            <h1>Oops... Such character does not exist...</h1>
        }
        </div>);
    }
}

export default Characters;