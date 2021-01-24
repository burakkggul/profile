const ProgressBar = (props) => {
    return (
          <div className="col-md-6">
            <div className="progress-wrap">
              <h3>
                <span className="name-left">{props.skill.name}</span>
                <span className="value-right">{props.skill.value}</span>
              </h3>
              <div className="progress" style={{height:"5px"}}>
                <div
                  className={'progress-bar progress-bar-striped active' + ' progress-bar-'+ (props.index % 6)}
                  role="progressbar"
                  style={{ width: props.skill.value }}
                ></div>
              </div>
            </div>
          </div>
    )

}

export default ProgressBar;