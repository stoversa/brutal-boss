import React from 'react'

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
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
                <div className="text-center">Rating</div>
                <ul className="list-group">
                  <li className="text-center list-group-item list-group-item-action list-group-item-primary" value="10" onClick={this.props.recordRating}>10</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-primary" value="9" onClick={this.props.recordRating}>9</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-info" value="8" onClick={this.props.recordRating}>8</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-info" value="7" onClick={this.props.recordRating}>7</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-info" value="6" onClick={this.props.recordRating}>6</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-light" value="5" onClick={this.props.recordRating}>5</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-warning" value="4" onClick={this.props.recordRating}>4</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-warning" value="3" onClick={this.props.recordRating}>3</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="2" onClick={this.props.recordRating}>2</li>
                  <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="1" onClick={this.props.recordRating}>1</li>
                </ul>
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