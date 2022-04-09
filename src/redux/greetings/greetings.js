const FETCH_GREETINGS_SUCCESS = 'hello-react/greetings/FETCH_GREETINGS_SUCCESS';
const FETCH_GREETINGS_FAILURE = 'hello-react/greetings/FETCH_GREETINGS_FAILURE';

const apiURL = 'http://localhost:3000';

const initialState = {
  status: 'idle',
  content: '',
};

const fetchGreetingsSuccess = (payload) => ({
  type: FETCH_GREETINGS_SUCCESS,
  payload,
});

const fetchGreetingsFailure = () => ({
  type: FETCH_GREETINGS_FAILURE,
});

export const fetchGreetings = () => async (dispatch) => {
  try {
    const response = await fetch(`${apiURL}/api/v1/messages/random_message`);
    const greetings = await response.json();
    dispatch(fetchGreetingsSuccess({ content: greetings.content }));
  } catch (error) {
    dispatch(fetchGreetingsFailure());
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GREETINGS_SUCCESS:
      return {
        ...state,
        ...payload,
        status: 'success',
      };
    case FETCH_GREETINGS_FAILURE:
      return {
        ...state,
        status: 'failure',
      };
    default:
      return state;
  }
};

export default reducer;
