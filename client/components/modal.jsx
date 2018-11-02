import React from 'react';
import styles from './modal.css';
import Arrow from './arrow.jsx';

class Modal extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		share: false,
  		browse: false,
  		compliment: false
  	}
  }

  highlightButton(state) {
  	this.setState({
  		[state]: !this.state[state]
  	})
  }

	render() {
		let userIndex = 0;
  	for(let i = 0; i < this.props.users.length; i++) {
  		if(this.props.users[i].user_id === this.props.photos[this.props.index].user) {
        userIndex = i;
        break;
  		}
  	}

    if(this.props.users.length > 0) {
	    let isElite = this.props.users[userIndex].elite ? styles.elite : styles.notElite;
    }
    
    let shareIcon = this.state.share ? styles.whiteShareIcon : styles.greyShareIcon;
    let share = this.state.share ? styles.whiteShare : styles.greyShare;
    let browseIcon = this.state.browse ? styles.whiteBrowseIcon : styles.greyBrowseIcon;
    let browse = this.state.browse ? styles.whiteBrowse : styles.greyBrowse;
    let complimentIcon = this.state.compliment ? styles.whiteComplimentIcon : styles.greyComplimentIcon;
    let compliment = this.state.compliment ? styles.whiteCompliment : styles.greyCompliment;

    if(!this.props.isOpen) {
    	return null;
    } else {
	    return(
	      <div id="modal" className={styles.modal} onClick={(e) => this.props.exitModalWindow(e)}>
	        <span className={styles.closeModal} onClick={() => this.props.closeModal()}>Close X</span>

	        <div className={styles.modalBox}>
            <div id="modalbody" className={styles.photoBox} onClick={(e) => this.props.nextModalPic(e)}>

            	<Arrow direction="left" modal="true" clickHandler={this.props.prevPic}/>
              <img id="photobody" className={styles.image} src={this.props.photos[this.props.index].url}/>
              <Arrow direction="right" modal="true" clickHandler={this.props.nextPic}/>

              <div className={styles.footer}>
                <div className={styles.browse} onMouseEnter={() => this.highlightButton('browse')} onMouseLeave={() => this.highlightButton('browse')}><span className={browseIcon}></span><span className={browse}>Browse all</span></div>
                <span className={styles.pageCount}>{this.props.index + 1} of {this.props.photos.length}</span>
                <div className={styles.share} onMouseEnter={() => this.highlightButton('share')} onMouseLeave={() => this.highlightButton('share')}><span className={shareIcon}></span><span className={share}>Share</span></div>
                <div className={styles.compliment} onMouseEnter={() => this.highlightButton('compliment')} onMouseLeave={() => this.highlightButton('compliment')}><span className={complimentIcon}></span><span className={compliment}>Compliment</span></div>
                <div className={styles.report} onMouseEnter={() => this.highlightButton('report')} onMouseLeave={() => this.highlightButton('report')}><span className={styles.whiteReportIcon}></span></div>
              </div>
            </div>
            <div className={styles.userBox}>

              <div className={styles.userProfile}>
                <img className={styles.avatar} src={this.props.users[userIndex].avatar}/>
                <span className={styles.userName}>{this.props.users[userIndex].name}</span><br></br>
                <div className={styles.friendRev}>
	                <img src="https://s3-us-west-1.amazonaws.com/yelpreactor/friends.png" className={styles.friendsIcon}/><span className={styles.userFriends}>{this.props.users[userIndex].friends}</span>
	                <img src="https://s3-us-west-1.amazonaws.com/yelpreactor/reviews.png" className={styles.reviewsIcon}/><span className={styles.userReviews}>{this.props.users[userIndex].reviews}</span>
	                <span className={isElite}>Elite '18</span>
                </div>
              </div>

              <div className={styles.userCaption}> 
                {this.props.photos[this.props.index].caption}
              </div>
              <div className={styles.timeStamp}>
                {this.props.photos[this.props.index].postdate}
              </div>
              <div className={styles.helpful}>
                Was this photo ...?
              </div>
              <div className={styles.helperHolder}>
                <div><span className={styles.helper}>Helpful</span></div>
                <div><span className={styles.helper}>Not Helpful</span></div>
              </div>

            </div>  
	        </div>
	      </div>  
	    );	
    }
	}
}

export default Modal;