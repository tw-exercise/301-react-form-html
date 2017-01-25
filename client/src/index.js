import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';

class App extends Component {
  render() {
    return (<div className="container">
      <div className="partOne">
        <div className="row type no-padding">
          <div className="addPaper col-md-12 blue">新增试卷</div>
        </div>
        <div className="row paperInfo background">
          <div className="col-md-offset-2 col-md-8 no-padding">
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label for="paperName" className="col-sm-2 control-label">试卷名称</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="paperName" placeholder="请输入试卷名称"/>
                </div>
              </div>
              <div className="form-group">
                <label for="description" className="col-sm-2 control-label">试卷描述</label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="description" placeholder="请输入试卷描述"></textarea>
                </div>
              </div>
              <div className="form-group">
                <label for="logicPuzzle" className="col-sm-2 control-label">逻辑题</label>
                <div className="col-sm-10 checkbox">
                  <label>
                    <input type="checkbox" id="logicPuzzle"/>
                  </label>
                </div>
              </div>
              <div className="form-group logicPuzzleType">
                <div className="col-sm-offset-2 col-sm-8 no-padding">
                  <div className="col-sm-4">
                    <label for="simple" className="col-xs-6 control-label">简单</label>
                    <div className="col-xs-6">
                      <input type="text" id="simple" className="type"/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label for="normal" className="col-xs-6 control-label">一般</label>
                    <div className="col-xs-6">
                      <input type="text" id="normal" className="type"/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label for="complex" className="col-xs-6 control-label">困难</label>
                    <div className="col-xs-6">
                      <input type="text" id="complex" className="type"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row partTwo background">
        <div className="col-sm-offset-2 col-sm-8 no-padding">
          <div className="programPuzzle">
            <div className="row no-padding title blue">
              <div className="col-sm-2 no-padding">
                <span>编程题</span>
              </div>
              <div className="col-sm-2 no-padding">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div>
              <div className="col-sm-8 text-right">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="row">
              <div className="addProgram no-padding">
                <button className="addProgramButton">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row no-padding">
            <div className="addSection text-center">
              <button className="addSectionButton">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-right">
              <button className="btn submitButton">保存</button>
            </div>
            <div className="col-sm-6 text-left">
              <button className="btn submitButton">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);