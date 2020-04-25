import styles from './WebsiteListItem.module.css'

class WebsiteListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return <div className={styles.div}>
            <h3>
                <a href={this.props.hostname}>{this.props.hostname}</a>
                <h4 style={{ color: 'black'}}>{this.props.added}</h4>
                <h5>{this.props.popularity} <i class="fas fa-fire"></i></h5>
            </h3>
            <p>
                {this.props.text}
            </p>
        </div>;
    }
}

export default WebsiteListItem;