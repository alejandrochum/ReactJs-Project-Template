import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';


class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      campusId: null,
      redirect: false,
      redirectId: null
    };
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    event.target.reset()
    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
      gpa: this.state.gpa,
      email: this.state.email
    };

    let newStudent = await this.props.addStudent(student);

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      gpa: null,
      campusId: null,
      redirect: true,
      redirectId: newStudent.id
    });
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`} />)
    }
    return (
      <NewStudentView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        campuses={this.props.allCampuses}
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

const mapDispatch = (dispatch) => {
  return ({
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    addStudent: (student) => dispatch(addStudentThunk(student))
  })
}

// Type check props;
NewStudentContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(NewStudentContainer);