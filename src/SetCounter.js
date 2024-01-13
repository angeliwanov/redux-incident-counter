import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';
import { useEffect, useState } from 'react';

const SetCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [value, setValue] = useState(count);

  useEffect(() => {
    setValue(count);
  }, [count]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(value);
          dispatch(set(value));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
