import React from 'react';
import styles from './photo.css'

class Photo extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  caption: false
  	}
  }

  toggleHover() {
  	this.setState({
  		caption: !this.state.caption
  	})
  }

  render() {
    let userIndex = 0;
    for(let i = 0; i < this.props.users.length; i++) {
      if(this.props.users[i].user_id === this.props.photo.user) {
        userIndex = i;
        break;
  		}
  	}
  	let displayCaption = this.state.caption ? styles.spanShow : styles.spanHide;
    let imageAfter = this.state.caption ? styles.imageAfter : styles.image;

	  if(this.props.users.length === 0) {
		  return (
		  	<div className={styles.photoContainer}>
			    <img id={this.props.num} onMouseEnter={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} onMouseLeave={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} src={this.props.photo.url} 
			    className={imageAfter} onClick={(e) => {this.props.showModal(e); this.props.detectModal(e)}}/><span className={displayCaption}>{this.props.photo.caption}</span>
		    </div>
		  );
    } else if (this.props.middle && this.props.shouldDefault) {
	    return (
		  	<div className={styles.photoContainer}>
			    <img id={this.props.num} onMouseEnter={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} onMouseLeave={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} src={this.props.photo.url} 
			    className={styles.imageAfter} onClick={(e) => {this.props.showModal(e); this.props.detectModal(e)}}/><span className={styles.spanShow}><span className={styles.avatarContainer}><img className={styles.avatar} src={this.props.users[userIndex].avatar}/></span><span className={styles.captionContainer}>{this.props.photo.caption} {" "}<span className={styles.description}>by {this.props.users[userIndex].name}</span></span></span>
		    </div>
	    );
    } else {
      return (
        <div className={styles.photoContainer}>
          <img id={this.props.num} onMouseEnter={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} onMouseLeave={(e) => {this.toggleHover(); this.props.defaultPicture(e)}} src={this.props.photo.url} 
          className={imageAfter} onClick={(e) => {this.props.showModal(e); this.props.detectModal(e)}}/><span className={displayCaption}><span className={styles.avatarContainer}><img className={styles.avatar} src={this.props.users[userIndex].avatar}/></span><span className={styles.captionContainer}>{this.props.photo.caption} {" "}<span className={styles.description}>by {this.props.users[userIndex].name}</span></span></span>
        </div>
      );
    }
  }


}



export default Photo;