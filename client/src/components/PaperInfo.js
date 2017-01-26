import React, {Component} from 'react';

export default class PaperInfo extends Component {
  render() {
    return (<div>
      <form className='form-horizontal' role='form'>
        <div className='form-group'>
          <label for='paper-ame' className='col-sm-2 control-label'>试卷名称</label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id='paper-ame' placeholder='请输入试卷名称'/>
          </div>
        </div>
        <div className='form-group'>
          <label for='description' className='col-sm-2 control-label'>试卷描述</label>
          <div className='col-sm-10'>
            <textarea className='form-control' id='description' placeholder='请输入试卷描述'></textarea>
          </div>
        </div>
      </form>
    </div>);
  }
}