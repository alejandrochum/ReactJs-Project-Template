import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editStudentThunk, fetchStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';
import EditStudentView from '../views/EditStudentView';

class EditStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            lastname: '',
            email: '',
            campus: null,
            gpa: null,
            redirect: false,
            redirectId: null
        }
    }

    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id);
        this.props.fetchAllCampuses();
        this.setState({
            id: this.props.match.params.id,
            redirectId: this.props.match.params.id
        })
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        e.target.reset()

        let student = {
            id: this.props.student.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            gpa: this.state.gpa,
            email: this.state.email
        };

        console.log(student.id)
        await this.props.editStudent(student);

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/student/${this.state.redirectId}`} />)
        }

        return (
            <EditStudentView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                student={this.props.student}
                campuses={this.props.allCampuses}
            />
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
        allCampuses: state.allCampuses,
        student: state.student
    };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    }
}

export default connect(mapState, mapDispatch)(EditStudentContainer)
