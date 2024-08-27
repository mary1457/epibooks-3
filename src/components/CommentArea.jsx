import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
class CommentArea extends Component {
  state = {
   comments:[]
  }
  componentDidMount = () => {
    console.log('SONO IN COMPONENTDIDMOUNT')
    
    this.fetchReservations()
  }


  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.newSelectedValue !== this.props.newSelectedValue) {
    
      this.fetchReservations()
    }

    if (prevState.updateCommentsList !== this.state.updateCommentsList) {
      this.fetchReservations()
      
    }
  }

  fetchReservations = () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.props.newSelectedValue
    fetch(URL, {
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQ2OTQ4NjksImV4cCI6MTcyNTkwNDQ2OX0.nhff3SO7n3TIYxpWEOpNQoOEmIEfhCJugAXNwDnHzEw",
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                
                return response.json()
            } else {
              
                throw new Error('Errore nella chiamata, response non OK')
            }
        })
        .then((arrayOfComments) => {
            console.log('EVENTI A DB', arrayOfComments)
    
            this.setState({
                comments: arrayOfComments,})
        })
        .catch((error) => {
          
            console.log('ERRORE!', error)
        })
  }
  render() {
    return (
    <>
        <CommentList comments={this.state.comments}></CommentList>
        <AddComment  asin={this.props.newSelectedValue}></AddComment>
        </>
    )
  }
}

export default CommentArea

