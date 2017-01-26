import React, {Component} from 'react';
import Body from './Body';
import '../../style/index.less';

export default class App extends Component {
  render() {
    return (<div className='container no-margin' id='add-paper'>
        <div className='row'>
          <div className='header blue'>新增试卷</div>
        </div>
        <div className='row'>
          <Body/>
        </div>
      </div>
    );
  }
}
