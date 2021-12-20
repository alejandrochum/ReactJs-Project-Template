import { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            address: ''
        };
    }
    

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        // console.log(e.currentTarget)
        e.target.reset()
        
        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        }
        await this.props.addCampus(campus);
    }

    render() {
        return (
            <NewCampusView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                open={this.props.open}
                handleClose={this.props.handleClose}
            />
        )
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
        addCampus: (campus) => dispatch(addCampusThunk(campus))
    })
}

  // Type check props;
//   NewCampusContainer.propTypes = {
//     allCampuses: PropTypes.array.isRequired,
//     fetchAllCampuses: PropTypes.func.isRequired,
//   };

export default connect(mapState, mapDispatch)(NewCampusContainer);