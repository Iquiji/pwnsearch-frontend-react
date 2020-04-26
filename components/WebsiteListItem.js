import styles from './WebsiteListItem.css'

class WebsiteListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return <div style={{
        "border-bottom": "solid #E7ECEF",
        "padding-left": "3px",
        "height": "200px",
        overflow: "hidden",
        width: "80%",
      }}>
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