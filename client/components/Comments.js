import React from 'react'

class Comments extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const { postId } = this.props.params
    const { commentForm, author, comment } = this.refs

    this.props.addComment(postId, author.value, comment.value)
    this.refs.commentForm.reset()
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  render() {

    return (
      <div className="comment">
        {this.props.postComments.map(this.renderComment) || []}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )

  }

}

export default Comments