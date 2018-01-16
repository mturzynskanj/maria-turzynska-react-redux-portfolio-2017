
import React from 'react'

export default class HiddenContent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isVisible : this.props.isChildVisible

        }
        this.componentClasses=['show']  
    }

    componentWillReceiveProps(nextProps){
        this.setState({isVisible:nextProps.isChildVisible})
    }
  
    render() { 
            const {children}= this.props
            const {isVisible}= this.state
         
            if(!isVisible){
               this.componentClasses=[]
            } 
            else{
                this.componentClasses.push('show')
            }  
              
            return (
                <div className={this.componentClasses.join(' ')}>
                    {children}
                </div>

            )  
    }
}