import React from 'react';
import ApiService from '../components/ApiService';
import Repos from '../components/Repos';

class ListRepos extends React.Component {
    render(){
        return(
            <Repos repos={this.state.repos} />
        );
    }

}
export default ListRepos;