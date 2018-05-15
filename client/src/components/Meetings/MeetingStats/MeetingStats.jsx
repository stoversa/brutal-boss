import React from 'react'
// TODO - add proptypes

const MeetingStats = props => {
  if (props.user) {
    return (
      <div>
        <div className="Home">
					<h1> Brutal Boss </h1>
				</div>
      <div className="MeetingStats">
      <div className="title">
          <h2>Meeting Stats</h2>
          <p>{props.user.local.username} here is a list of your meetings.</p>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h3>Meetings where you were a speaker</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th>Attendees</th>
                    <th>Speakers</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">01/18/2018</button></th>
                    <td>10</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h3>Meetings you have attended</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th>Attendees</th>
                    <th>Speakers</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">04/01/2018</button></th>
                    <td>15</td>
                    <td>4</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">03/24/2018</button></th>
                    <td>37</td>
                    <td>6</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">01/18/2018</button></th>
                    <td>10</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h3>Meetings in your orangization</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th>Attendees</th>
                    <th>Speakers</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">04/17/2018</button></th>
                    <td>8</td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">04/01/2018</button></th>
                    <td>15</td>
                    <td>4</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">03/24/2018</button></th>
                    <td>37</td>
                    <td>6</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">03/12/2018</button></th>
                    <td>12</td>
                    <td>2</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">02/20/2018</button></th>
                    <td>17</td>
                    <td>3</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">01/18/2018</button></th>
                    <td>10</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">01/18/2018</button></th>
                    <td>13</td>
                    <td>1</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">12/11/2017</button></th>
                    <td>18</td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th scope="row"><button type="button" className="btn btn-primary">11/11/2017</button></th>
                    <td>48</td>
                    <td>12</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div> 
          </div>
        </div>
      </div>

      <footer class="page-footer font-small blue">
					<div class="footer-copyright text-center">
						© 2018 Copyright:
       				 <a href="/"> The Cool Kids </a>
					</div>
				</footer>

      </div>
    )
  } else {
    return (
      <div>
				<div className="Home">
					<h1> Brutal Boss </h1>
				</div>
				<div className="loggedOut">
					<h1> WELCOME to Brutal Boss </h1>
					<br />
					<div className="MeetingStats">
        <p className="sorry">Sorry, you really need to be logged in for this page.</p>
      </div>
				</div>
				<footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>
			</div>
      
    )
  }
}

export default MeetingStats