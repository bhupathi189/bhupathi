import React, {Component} from 'react';

class Projects extends Component {
  state ={};
  render(){
    return (
      <div className="content-wrap">
        <div className=flex-container>
          
        </div>
       </div>
    )
  }
  project(var imgurl, var project name) {
    return(
    <div className="flex-container">
        <img src={this.imgurl} alt=""project related image">
           <span>{this.projectname}</span>
        </img>
    </div>
    )
  }
}
