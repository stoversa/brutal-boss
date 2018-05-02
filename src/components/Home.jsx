import React from 'react';

// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			// outer most div
			<div>
				<div className="Home">
					<h1> Brutal Boss </h1>
					<p>Current User:</p>
					<code>
						{JSON.stringify(props)}

					</code>
				</div>

				{/* box links  */}
				<section className="boxes">

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="learnBox">
								<a><p>Learn About Your Peers</p></a> 
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teachBox">
							<a ><p>Teach Your Peers About You</p></a> 
								
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="feelingsBox">
							<a ><p>Get Your Feelings Hurt</p></a> 
								
							</div>
						</div>
					</div>
				</section>

				<section className="grid">

					<h2 className="">TEAM</h2>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_dawn.jpeg")} alt="Greg thumbnail"></img> Dawn
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_sam.jpeg")} alt="Sam thumbnail"></img> Sam
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_greg.jpeg")} alt="Greg thumbnail"></img> Greg
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_jess.jpg")} alt="Jess thumbnail"></img> Jess
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_ryan.jpeg")} alt="Ryan thumbnail"></img> Ryan
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="img-fluid" src={require("../images/team_tony.jpeg")} alt="Tony thumbnail"></img> Tony
							</div>
						</div>
					</div>
				</section>


				<footer className="page-footer font-small blue pt-4 mt-4">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>



			</div>
			// end of outer most div


		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>

		)
	}
}

export default Home
