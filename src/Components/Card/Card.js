import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // const rows = this.props.data.map((obj,i) => {
        //     return(
        //         <tr>
        //             <td>{i+1}</td>
        //             <td>{obj.TeamName}</td>
        //             <td>{obj.CurQuestion-1}</td>
        //             <td>{obj.Points}</td>
        //         </tr>
        //     );
        // })
        return(
            <div id='main-img'>
                <img href='https://google.com' className='fin-img' alt='image' src={this.props.link}/>
                <p>{this.props.word}</p>
            </div>
        );
    }
}