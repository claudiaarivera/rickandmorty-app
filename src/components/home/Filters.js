import React from 'react'
import '../shared/controls.css';

export default function Filters(props){
    return (
        <div className="custom-select">
            <select className="select" value={props.specie} onChange={props.onChangeHandle} >
                <option value="">All</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
            </select>
            <div className="arrow"></div>
        </div>
    )
}
