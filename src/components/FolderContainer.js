import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions'
import Folder from './Folder';

class FolderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.renderFolders = this.renderFolders.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
    //fetches the list of folders from API
    this.props.fetchFolders()
  }

  componentWillUnmount() {
      this.props.clearFolders()
  }

  renderFolders() {
      //renders folders from list
    if (this.props.folderList.length > 0) {
        return this.props.folderList.map((folder, index) => 
        <Folder key={index} name={folder.folder_name} folder_id={folder.id}/>)
    }
    else {
        return null
    }
  }

  
  handleClick(){
        this.props.fetchParts()
        this.props.history.push('/set/parts')
    }

  render() {
      return (
        <div>
              {this.renderFolders()}
            
            <div className='card' onClick={this.handleClick}>
                <p>Principal Parts</p>
            </div>
        </div>
        
      )
  }
}

function mapStateToProps(state) {
    return {
      folderList: state.folders
    }
  }

export default connect(mapStateToProps, actions)(FolderContainer);