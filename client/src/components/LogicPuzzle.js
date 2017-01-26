import React, {Component} from 'react';

export default class LogicPuzzle extends Component {
  render() {
    return (<div className="form-group logic-puzzle-type">
      <form className="form-horizontal" role="form">
        <div className="form-group">
          <label for="logic-puzzle" className="col-sm-2 control-label">逻辑题</label>
          <div className="col-sm-10 checkbox">
            <label>
              <input type="checkbox" id="logic-puzzle"/>
            </label>
          </div>
        </div>
        <div className="col-sm-offset-2 col-sm-8 no-padding">
          <div className="col-sm-4">
            <label for="simple" className="col-xs-5 control-label">简单</label>
            <div className="col-xs-7 no-padding">
              <input type="text" id="simple" className="form-control type"/>
            </div>
          </div>
          <div className="col-sm-4">
            <label for="normal" className="col-xs-5 control-label">一般</label>
            <div className="col-xs-7 no-padding">
              <input type="text" id="normal" className="form-control type"/>
            </div>
          </div>
          <div className="col-sm-4">
            <label for="complex" className="col-xs-5 control-label">困难</label>
            <div className="col-xs-7 no-padding">
              <input type="text" id="complex" className="form-control type"/>
            </div>
          </div>
        </div>
      </form>
    </div>);
  }
}