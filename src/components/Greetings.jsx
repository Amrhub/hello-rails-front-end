import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetings';

const Greetings = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <article>
      <h1 className="greeting">{content}</h1>
    </article>
  );
};
export default Greetings;
