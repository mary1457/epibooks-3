import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <Card
       
      >
        <Card.Img variant="top" src={this.props.book.img} 
        onClick={() => this.props.changeState(this.props.book.asin)}
        style={{
          border:
            this.props.selectedBook === this.props.book.asin
              ? '3px solid red'
              : 'none',
        }}
      
         />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
       

      </Card>
    )
  }
}

export default SingleBook
