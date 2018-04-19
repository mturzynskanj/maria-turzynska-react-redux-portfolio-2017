

import React from 'react'

import HiddenContent from './HiddenContent.jsx'

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChildVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        event.stopPropagation();
        this.setState({ isChildVisible: !this.state.isChildVisible })
    }

    render() {
        let imageSrc="https://firebasestorage.googleapis.com/v0/b/mariaturzynska-portfolio.appspot.com/o/images%2Fqblog.png?alt=media&token=d25212c1-47a0-41e9-8032-d9e756867a83"
        return (
            <li className="item">
                <ul className={"collapsed " + (this.props.activeProject === this.props.id ? ' in' : '')} onClick={() => this.props.setActiveProject(this.props.id)} >
                    <li className="title effect-opacity">{this.props.name}</li>
                    <li className="body">
                        <HiddenContent isChildVisible={this.state.isChildVisible} >
                            <div className="details">
                                <p><span>Website:</span><a href={this.props.url} target="_blank">{this.props.url}</a></p>
                                <p><span>Client:</span>{this.props.name}</p>
                                <p><span>My Role:</span>{this.props.information}</p>
                            </div>
                        </HiddenContent>
                        <div className="controls control_off" >
                            <a href='javascript:void(0)' onClick={this.handleClick}>{this.state.isChildVisible ? 'Hide Details' : 'Show Details'}</a>
                        </div>
                        <img src={require(`../images/${this.props.image}`)} alt="c" />
                        {/* <img src={`${this.props.image}`} /> */}
                    </li>
                </ul>
            </li>
        )
    }
}