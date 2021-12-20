import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk, clearDataThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
}

  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearData()
    this.setState({redirect: false, redirectId: null});
}

handleDelete = async e => {
  let res = await this.props.deleteStudent(this.props.student.id);
  if(res === 200){
    this.setState({
      redirect: true
    })
  }
}

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/students`}/>)
    }
    return (
      <StudentView 
        student={this.props.student}
        deleteStudent={this.props.deleteStudent}
        handleDelete = {this.handleDelete}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    clearData: () => dispatch(clearDataThunk())
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);