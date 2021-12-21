import HomePageView from '../views/HomePageView';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { 
  fetchAllCampusesThunk,
  fetchAllStudentsThunk
} from '../../store/thunks';
import { Component } from 'react';

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  render(){
    return (
      <HomePageView 
        students={this.props.allStudents}
        campuses={this.props.allCampuses}
      />
    );
  }

};

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// Type check props;
HomePageContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

export default withRouter(connect(mapState, mapDispatch)(HomePageContainer));