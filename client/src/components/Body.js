import React, {Component} from 'react';
import PaperInfo from './PaperInfo';
import ProgramQuizze from './ProgramQuizz';
import AddSection from './AddSection';
import SubmitButton from './SubmitButton';
import LogicPuzzle from './LogicPuzzle';

export default class Body extends Component {
  render() {
    return (<div>
      <div className='row no-margin paper-info background'>
        <div className='col-md-offset-2 col-md-8 no-padding'>
          <div>
            <PaperInfo/>
          </div>
          <div>
            <LogicPuzzle/>
          </div>
        </div>
      </div>
      <div className='row no-margin background part-two'>
        <div className='col-sm-offset-1 col-sm-10 '>
          <div className='program-quizze'>
            <ProgramQuizze/>
          </div>
          <div className='add-section'>
            <AddSection/>
          </div>
          <div className='submit-button'>
            <SubmitButton/>
          </div>
        </div>
      </div>
    </div>);
  }
}