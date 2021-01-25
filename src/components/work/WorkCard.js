const WorkCard = (props) => {
  return (
    <div className="col-md-3 text-center col-padding ">
      <a
        href={props.href}
        className="work"
        style={{ backgroundImage: `url(${props.photo})` }}
      >
        <div className="desc">
          <h3>{props.name}</h3>
          <span>{props.description}</span>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;
