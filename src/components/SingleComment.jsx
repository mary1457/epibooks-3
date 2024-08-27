import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SingleComment extends Component {
 
  render() {
    return (
      <>
             
                <ListGroup.Item className="rounded " >{this.props.comment.comment}</ListGroup.Item>
                <ListGroup.Item className="rounded " >{this.props.comment.rate}</ListGroup.Item>
                <ListGroup.Item className="rounded " >{this.props.comment.author}</ListGroup.Item>
             
            
                

                </>          
      
    
    )
  }
}

export default SingleComment