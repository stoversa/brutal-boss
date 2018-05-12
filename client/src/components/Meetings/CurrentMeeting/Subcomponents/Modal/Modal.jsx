import React from 'react';
import './modal.css';

class Modal extends React.Component {

  render() {
    return (<div className="modal fade" id="meetingmodal" tabIndex="-1" role="dialog" aria-labelledby="meetingmodalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="meetingmodalTitle">Please provide a rating for {this.props.commentAbout}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <div>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                      <input type="radio" name="tagArray" value="Preparation" id="option1" /> General
                  </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="tagArray" value="Preparation" id="option1"  /> Preparation
                  </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="tagArray" value="Organization" id="option2"  /> Organization
                  </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="tagArray" value="Time Management" id="option3"  /> Time Mgmt
                  </label>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <input type="text" value={this.props.comment} onChange={this.props.handleChange} className="form-control" id="exampleInputEmail1" name="comment" aria-describedby="commentHelp" placeholder="Comment here" />
                    <small id="commentHelp" className="form-text text-muted" >Input your comment here</small>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="text-center rating-title">Rating</div>
                <div className="row">
                  <div className="col-6">
                    <ul className="list-group">
                      <li className="text-center list-group-item list-group-item-action list-group-item-primary" value="10" onClick={this.props.recordRating}>10</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-primary"  value="9" onClick={this.props.recordRating}>9</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info"  value="8" onClick={this.props.recordRating}>8</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info" value="7" onClick={this.props.recordRating}>7</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info"  value="6" onClick={this.props.recordRating}>6</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="list-group">
                      <li className="text-center list-group-item list-group-item-action list-group-item-light" value="5" onClick={this.props.recordRating}>5</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-warning" value="4" onClick={this.props.recordRating}>4</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-warning"  value="3" onClick={this.props.recordRating}>3</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="2" onClick={this.props.recordRating}>2</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="1" onClick={this.props.recordRating}>1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
            <button className="btn btn-outline-success btn-block" onClick={this.props.submitRating} data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Modal;