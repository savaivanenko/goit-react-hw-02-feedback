import React from 'react'; 
import Stat from './Stat';
import FeedbackBtn from './FeedbackBtn'
import SectionTitle from './SectionTitle'
import Notification  from './Notification'

class Feedback extends React.Component {
  state = {
    good : +" ",
    neutral : +" ",
    bad : +" ",
    visible : true
  }
  visible = () =>{
    this.state.visible = true
  }
  incrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1
      }
    });
  };
  incrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1
      }
    });
  };
  incrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1
      }
    });
  };

  countTotalFeedback = () => {    
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  } 
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good*100 / total));
  };
  

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    console.log(this.state.visible );
    return  (
      <div className="Feedback">
        <SectionTitle title="Please leave feedback">
          {<FeedbackBtn
              onIncrementGood={this.incrementGood} 
              onIncrementNeutral={this.incrementNeutral} 
              onIncrementBad={this.incrementBad}
          />}
        </SectionTitle>
        <SectionTitle title="Statistics">
        {total ?  <Stat
            state={this.state} 
            total={total}
            positiveFeedback={positiveFeedback}
          /> : <Notification/>}  
        </SectionTitle>
      </div>
    )
  }
}
export default Feedback;