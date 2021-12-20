import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCampusThunk, deleteStudentThunk, fetchCampusStudentsThunk, clearDataThunk, addStudentThunk, deleteCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";

class CampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearData();
    this.setState({
      redirect: false
    })
  }

  handleDeleteCampus = async (campusId) => {
    await this.props.deleteCampus(campusId)
    this.setState({
      redirect: true
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    event.target.reset()
    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.props.campus.id,
      gpa: this.state.gpa,
      email: this.state.email
    };

    await this.props.addStudent(student);

    this.setState({
      firstname: "",
      lastname: "",
      emai: "",
      gpa: null,
      campusId: null,
    });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/campuses`} />)
    }

    return (
      <CampusView
        campus={this.props.campus}
        students={this.props.allStudents}
        handleDeleteCampus={this.handleDeleteCampus}
        deleteStudent={this.props.deleteStudent}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        open={this.open}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    allStudents: state.campusStudents,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    fetchAllStudents: (id) => dispatch(fetchCampusStudentsThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    clearData: () => dispatch(clearDataThunk())
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);