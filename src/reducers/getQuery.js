

const getQuery = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_QUERY':
      return action.query;
    default:
      return state;
  }
}

export default getQuery;