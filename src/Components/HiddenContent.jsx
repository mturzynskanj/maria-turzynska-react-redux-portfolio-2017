
import React from 'react'

export default class HiddenContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: this.props.isChildVisible

        }
        this.componentClasses = []
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.isChildVisible })
    }

    render() {
        const { children } = this.props
        const { isVisible } = this.state

        if (!isVisible) {
            this.componentClasses = ['hidden-component hide']
        }
        else {
            this.componentClasses= ['hidden-component show']
        }

        return (
            <div ref={this.ref} className={this.componentClasses.join(' ')}>
                {children}
            </div>

        )
    }
}