import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }

  changeState = (newSelectedValue) => {
    this.setState({
      selectedBook: newSelectedValue, 
    })
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col xs={6}  >
          <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={6}   key={b.asin}>
                <SingleBook book={b} selectedBook={this.state.selectedBook}
                  changeState={this.changeState}    />
              </Col>
            ))}
            </Row>
            </Col>
            <Col xs={6} >
            <CommentArea newSelectedValue={this.state.selectedBook}></CommentArea>
            </Col>
        </Row>
      </>
    )
  }
}

export default BookList
