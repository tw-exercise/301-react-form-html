import React, {Component} from 'react';

export default class ProgramQuizz extends Component {
  render() {
    return (<div>
      <div className='row no-margin title blue'>
        <div className='col-sm-2 no-padding'>
          <span>编程题</span>
        </div>
        <div className='col-sm-2 no-padding'>
          <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
        </div>
        <div className='col-sm-8 text-right'>
          <i className='fa fa-trash-o' aria-hidden='true'></i>
        </div>
      </div>
      <div className='row no-margin add-program no-padding'>
        <button className='add-program-button'>
          <i className='fa fa-plus'></i>
        </button>
      </div>
    </div>);
  }
}