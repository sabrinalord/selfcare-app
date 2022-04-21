import './ActivityProgressBar.css';
import './ProgressBarContainer';

const ActivityProgressBar = ({value}) => {
    const progressBarValue = {
        width: `${value}%`,
    }
    return (
      <div className="progressBar">
        <div className="progressBarLevel" style={progressBarValue}>
        { console.log(value) }

          <span className="progressLabel">{`${value}%`}</span>
        </div>
      </div>
    );
}


export default ActivityProgressBar;