import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup, Button } from 'react-bootstrap'

class CommentList extends Component {

    handleClick = (id) => {
        const URL = "https://striveschool-api.herokuapp.com/api/comments/"+id
    fetch(URL, {
      method: 'DELETE',
      headers: {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQzMjY2OTUsImV4cCI6MTcyNTUzNjI5NX0.rMDxqCJ_CyHQz520r-HqvWdsgDpX16i5r6th2UeIfZ0",
            'Content-Type': 'application/json',
    },
    }) 
      .then((response) => {
        if (response.ok) {
            alert('eliminato!')
           
        } else {
          
          throw new Error("Problema nell'eliminazione")
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
      };
 
  render() {
    return (
        <ListGroup>
        {this.props.comments
     
       .map((comment,i) => (
           <div key={comment._id}>
           
           <SingleComment comment={comment} ></SingleComment>
          
           <Button key={i} className='w-50 m-2' variant='danger'
           onClick={() => this.handleClick(comment._id)}
           >Delete</Button>
           </div>
       ))}
 
 
 </ListGroup>
    
    )
  }


}
 



export default CommentList


