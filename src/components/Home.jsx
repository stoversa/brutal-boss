import React from 'react';

// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			// outer most div
			<div>
				<div className="Home">
					<h1> Brutal Boss </h1>
					{/* <h1> Brutal Boss </h1>
					<p>Current User:</p>
					<code>
						{JSON.stringify(props)}

					</code> */}
				</div>

				<section className="grid">
					<p>Meet the team that brought you brutal boss.  Are you ready to be judged.</p>
					<h2 className="">TEAM</h2>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_dawn.jpeg")} alt="Greg thumbnail"></img> Dawn
								<p>Authentication, testing, wire-framing</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_sam.jpeg")} alt="Sam thumbnail"></img> Sam
								<p>Project management, React/front-end, Comment page</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_greg.jpeg")} alt="Greg thumbnail"></img> Greg
								<p>Mongo DB/Server</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_jess.jpg")} alt="Jess thumbnail"></img> Jess
								<p>React/front-end: Welcome page</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_ryan.jpeg")} alt="Ryan thumbnail"></img> Ryan
								<p>Report page (graph) (with dummy data for now)</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_tony.jpeg")} alt="Tony thumbnail"></img> Tony
								<p>Mongo DB/Server</p>
							</div>
						</div>
					</div>
				</section>


				<footer className="staticFooter font-small blue">
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
			<div>
				<div className="Home">
					<h1> Brutal Boss </h1>
				</div>
				<div className="loggedOut">
					<h1> WELCOME to Brutal Boss </h1>
					<br />
					{/* <h1> you are logged out </h1> */}
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
				</div>
				<footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>
			</div>
			// <div className="Home">
			// 	<p>Current User:</p>
			// 	<code>
			// 		{JSON.stringify(props)}
			// 	</code>
			// </div>

		)
	}
}

export default Home
