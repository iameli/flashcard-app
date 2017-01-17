import React from 'react';
import LogoutBtn from './logout_btn';
import ProgressBtn from './progress_btn';
import ScoreBtn from './score_btn';
import Feedback from './feedback';
import OutputCard from './output_card';
import InputCard from './input_card';

class GameContainer extends React.Component {
	componentDidMount () {
		props.getUser();
	}

	render () {
		return (
			<div>
				<LogoutBtn />
				<ProgressBtn />
				<div className={'feedback-container'}>
					<ScoreBtn />
					<ScoreBtn />
					<Feedback />
				</div>
				<div className={'cards-container'}>
					<OutputCard />
					<InputCard />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
