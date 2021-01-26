import Info from "./Info";

const About = (props) => {
    return (
        <div id="about">
		<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2 text-center heading">
					<h2>{props.about.title}</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<ul className="info">
						{props.about.infos.map((info,index) => {
							return (<Info key={index} {...info} />)
						})}
					</ul>
				</div>
				<div className="col-md-8">
					<h2>{props.about.content.title}</h2>
					{props.about.content.paragraphs.map((paragraph,index) => {
						return (<p key={index}>{paragraph}</p>)
					})}
				</div>
			</div>
		</div>
	</div>
    );

}
export default About;