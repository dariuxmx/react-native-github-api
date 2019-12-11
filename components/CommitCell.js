import React from 'react';
import PropTypes from 'prop-types';
import { CellContainer, RepoName, CommitAuthor, DateUpdated, CommitMessage } from '../utils/Styles'

class CommitCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    };

    render(){
        const { date, name, author, commitMessage } = this.props;
        return(
            <CellContainer>
                <DateUpdated>{date}</DateUpdated>
                <RepoName>{name}</RepoName>
                <CommitAuthor>{author}</CommitAuthor>
                <CommitMessage>{commitMessage}</CommitMessage>
            </CellContainer>
        );
    }
}

export default CommitCell;

CommitCell.propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commitMessage: PropTypes.string,
  };
  