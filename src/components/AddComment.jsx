import { Component } from 'react'

import {  Row, Col, Form, Button, } from 'react-bootstrap'
class AddComment extends Component {
    state = {
        comments: {
          comment: '',
          rate: '',
          elementId : this.props.bookId
        },
      }

      handleChange = (e, property) => {
        this.setState({
          comments: {
            ...this.state.comments,
            [property]: e.target.value,
           
          },
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
      
        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          method: 'POST',
          headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQzMjY2OTUsImV4cCI6MTcyNTUzNjI5NX0.rMDxqCJ_CyHQz520r-HqvWdsgDpX16i5r6th2UeIfZ0",
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify(this.state.comments),
        })
          .then((response) => {
            if (response.ok) {
              console.log('commento salvato')
              alert('grazie!')
              
              this.setState({
                comments: {
                  
                  comment: '',
                  rate: '',
                
                },
              })
            } else {
              alert('riprova più tardi')
              throw new Error('errore!')
            }
          })
          .catch((err) => {
            alert(err)
          })
      }
 

 
  render() {
    return (
        <Form onSubmit={this.handleSubmit} className='p-1'>
        <Row className='mb-2'>
          <Form.Group as={Col} xs={12}  className='mb-1'>
            
            <Form.Control
              required
              type="text"
              placeholder="Comment"
              defaultValue=""
              onChange={(e) => {
                console.log('scritto qualcosa in comment!', e.target.value)
               
                this.setState({
                  comments: {
                    ...this.state.comments,
                  
                    comment: e.target.value,
                  },
                })
              }}
           
              value={this.state.comments.comment}
            
            />
          
          </Form.Group>
          
          <Form.Group as={Col} xs={12}    >
            
          
              <Form.Control 
                type="number"
                placeholder="Rate"
                defaultValue=""
                required
                onChange={(e) => {
                    console.log('scritto qualcosa in rate!', e.target.value)
                   
                    this.setState({
                      comments: {
                        ...this.state.comments,
                      
                        rate: e.target.value,
                      },
                    })
                  }}
               
                  value={this.state.comments.rate}
              />
             
          </Form.Group>
        </Row>
        
       
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default AddComment

