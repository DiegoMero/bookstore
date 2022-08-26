const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.text;
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under construction',
});

export default categoriesReducer;
export { checkStatus };
