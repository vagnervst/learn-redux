import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = props => {
  const { postId } = props.params
  const { posts, comments } = props

  const i = posts.findIndex( post => post.code === props.params.postId )
  const post = posts[i]

  const postComments = comments[postId] || []

  return (
    <div className="single-photo">
      <Photo index={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
}

export default Single
