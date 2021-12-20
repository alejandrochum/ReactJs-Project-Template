import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class AllCampusesContainer extends Component {

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default withRouter(connect(mapState, mapDispatch)(AllCampusesContainer));