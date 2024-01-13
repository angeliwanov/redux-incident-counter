import { useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import SetCounter from './SetCounter';
import { useActions } from './use-actions';
// import { useCounter } from './use-counter';

export const Counter = () => {
  const incident = 'Incident';

  /** 1. Dispatch */
  // const dispatch = useDispatch();

  /** 2. Actions */
  // const actions  = bindActionCreators({increment, decrement, set}, dispatch);

  /** 3. Use-actions hook*/
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  /** 4.Use-counter */
  // const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
