import React, { Component } from 'react';
//import Buttons from './Buttons';
export default class Book extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1,
            showInfo:true,
        };

    }
    handleInfo =() =>{
     this.setState({
         showInfo: !this.state.showInfo
     })
    }
   render() {
      const { id,img,title,author } = this.props.info;
      const {handleDelete}=this.props;
      
        return (
                <article className="book">
                    <img src={img} width="150" alt="book"/>
                    <div>
                       <h4>Title: {title}</h4>
                       <h5>Author: {author}</h5>
                       <button type="button" onClick={()=> handleDelete(id)}>delete me</button> &nbsp;
                       <button type="button" onClick={this.handleInfo}>toggle info</button>
                       {
                           this.state.showInfo&& (
                               <p>'Books are the plane and the train and the road.<br/>They are the destination,and the journey.<br/>They are the home'</p>
                           )
                       }
                    </div>
                </article>

        );
    }
}


