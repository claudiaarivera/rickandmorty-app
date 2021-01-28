import React, {Component} from 'react';
import CharacterCard from './CharacterCard';
import {getAllCharacters, getCharacterBySpecie} from '../../services/characters';
import Filters from './Filters';
import Pagination from './Pagination';
import './characteres.css';

import BounceLoader from "react-spinners/BounceLoader";

export default class CharacterList extends Component{
    constructor(props){
        super(props);
        this.state = {
            characterList: [],
            currentPage: 1,
            totalPages: 0,
            loading: false,
            specie: ''
        }
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }
    async componentDidMount(){
       const characterList = await getAllCharacters();
       if (characterList) {
           this.setState({
               characterList: characterList.results, 
               totalCharacters: characterList.info.count,
               totalPages: characterList.info.pages,
               loading: true

            });
       }
       
    }
    componentDidUpdate(_, prevState){
        if (this.state.currentPage !== prevState.currentPage) {
            this.getCharacters();
        }
    }
    async getCharacters(){
        this.setState({
            loading: false
        });
        const characterList = await getAllCharacters(this.state.currentPage);
        if (characterList) {
            this.setState({
                characterList: characterList.results, 
                loading: true
            });
        }
    }
    prevPage(){
        if (this.state.currentPage > 1) {
            this.setState({currentPage: this.state.currentPage - 1});
        }
    }
    nextPage(){
        if (this.state.currentPage < this.state.totalPages) { 
            this.setState({ currentPage: this.state.currentPage + 1});
        }
    }
    async handleChangeSpecie(e){ 
        const value = e.target.value;
        this.setState({
            loading: false
        })
        const charactersBySpecie = await getCharacterBySpecie(value);
        if (charactersBySpecie) {
            this.setState({
                specie: value,
                characterList: charactersBySpecie.results,
                currentPage: 1,
                totalPages: charactersBySpecie.info.pages,
                loading: true
            });
        }
    }
    render(){
        return (
            <>
            <p>{process.env.PUBLIC_URL}</p>
            <section className="section section--characters">      
            <h2 className="section__title">There are <span className="characteres__count">{this.state.totalCharacters}</span> characters, find your favorite 🚀</h2>
                    <div className="characteres__top">
                            <div className="characters__actions">
                                <Filters 
                                    onChangeHandle={this.handleChangeSpecie.bind(this)} 
                                    specie={this.props.specie}/>
                                <Pagination
                                    totalPages={this.state.totalPages}
                                    currentPage={this.state.currentPage}
                                    prevHandle={this.prevPage}
                                    nextHandle={this.nextPage}
                                />
                            </div>
                    </div>
                    { 
                        !this.state.loading ?
                            <div className="loading">
                                <BounceLoader color="#FA52B4" size={80} />
                            </div>
                        :
                        <>
                        <div className="grid section__container">
                        {
                        this.state.characterList.map(({id,name, image,species,gender, status, origin, location }) => 
                            (<CharacterCard 
                                        key={id} 
                                        name={name}
                                        image={image}
                                        species={species}
                                        gender={gender}
                                        status={status}
                                        origin={origin}
                                        location={location}
                                        />
                            ))
                        
                        }
                        
                        </div>
                        <Pagination
                            totalPages={this.state.totalPages}
                            currentPage={this.state.currentPage}
                            prevHandle={this.prevPage}
                            nextHandle={this.nextPage}
                        />
                        </>
                        
                    }
                    
            </section>
            </>
        )
    }
}