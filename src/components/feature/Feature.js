import Fade from "react-reveal/Fade";

const Feature = () => {
    return (
		<Fade bottom>
        <div id="features">
		<div className="container">
			<div className="services-padding">
				<div className="row">
					<div className="col-md-8 offset-md-2 text-center heading">
						<h2>My Services</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 text-center">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-paintbrush"></i>
							</span>
							<div className="feature-copy">
								<h3>Web Design</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>
					</div>

					<div className="col-md-4 text-center">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-briefcase"></i>
							</span>
							<div className="feature-copy">
								<h3>Branding</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>

					</div>
					<div className="col-md-4 text-center">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-search"></i>
							</span>
							<div className="feature-copy">
								<h3>Analytics</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>
					</div>
				</div>


				<div className="row">
					<div className="col-md-4 text-center">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-bargraph"></i>
							</span>
							<div className="feature-copy">
								<h3>Web Developent</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>

					</div>

					<div className="col-md-4 text-center">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-genius"></i>
							</span>
							<div className="feature-copy">
								<h3>Web Marketing</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>

					</div>
					<div className="col-md-4 text-center">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-chat"></i>
							</span>
							<div className="feature-copy">
								<h3>Support</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</Fade>
    );
}

export default Feature;