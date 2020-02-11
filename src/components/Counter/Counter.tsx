import React from 'react';
import { connect } from 'react-redux';
import { onIncreament, onIncreamentAsync, onDecrement } from '../../actions/counter';

const Counter = (props: any) => {
  const { onIncreament, onIncreamentAsync, onDecrement, counter } = props;

  const onIncrementClick = () => {
    onIncreament(counter);
  };

  const onIncrementAsyncClick = () => {
    onIncreamentAsync(counter);
  };

  const onDecrementClick = () => {
    onDecrement(counter);
  };

  return (
    <div style={{ background: '#ffc0cb29' }}>
      <button onClick={onIncrementClick}>Increment</button>{' '}
      <button onClick={onIncrementAsyncClick}>Increment after 1 second</button>{' '}
      <button onClick={onDecrementClick}>Decrement</button>
      <hr />
      <div style={{ color: '#bd1431c4' }}>Counter: {counter} times</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: any) => ({
  onIncreament: (key: number) => dispatch(onIncreament(key)),
  onIncreamentAsync: (key: number) => dispatch(onIncreamentAsync(key)),
  onDecrement: (key: number) => dispatch(onDecrement(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
