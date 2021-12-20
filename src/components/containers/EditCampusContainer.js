import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            address: '',
            redirect: false,
            redirectId: null
        }
    }

    componentDidMount() {
        //getting student ID from url
        this.props.fetchCampus(this.props.match.params.id);
        this.setState({
            redirectId: this.props.match.params.id
        })
      }

      componentWillUnmount(){
        this.setState({redirect: false, redirectId: null});
      }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        e.target.reset()

        let campus = {
            id: this.props.campus.id,
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        }
        await this.props.editCampus(campus);

        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
          }
        return (
            <EditCampusView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                campus={this.props.campus}
            />
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      campus: state.campus
    };
  };

  // map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    }
}

export default connect(mapState, mapDispatch)(EditCampusContainer)
