import './ProgressBarContainer.css';
import './ActivityProgressBar';
import ActivityProgressBar from './ActivityProgressBar';

const ProgressBarContainer = (props) => {

    const mentalValue = 10
    const physicalValue = 20
    const socialValue = 30
    const spiritualValue = 10
    const emotionalValue = 40
    const practicalValue = 80
 
    return (
      <div className='progressBarContainer'>
      
        <ActivityProgressBar type='Mental' value={mentalValue}  />
        <ActivityProgressBar type='Physical' value={physicalValue } />
        <ActivityProgressBar type='Practical' value={practicalValue} />
        <ActivityProgressBar type='Social' value={socialValue } />
        <ActivityProgressBar type='Emotional' value={emotionalValue} />
        <ActivityProgressBar type='Spiritual' value={spiritualValue} />
    
      </div>
    );
}


export default ProgressBarContainer;