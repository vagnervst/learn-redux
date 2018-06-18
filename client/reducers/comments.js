import actions from '../actions/actionCreators'

const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [ ...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return state.filter((comment, index) => index !== action.index)
    default:
      return state
  }
}

const comments = (state = [], action) => {
  
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state
}

export default comments
