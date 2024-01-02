import { useSelector,useDispatch } from "react-redux"
import { RootState,AppDispatch } from "../state/store"
import { increment, decrement,incrementAsync } from "../state/counter/counterSlice"
export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch<AppDispatch>();

    const incrementFn = () => {
        dispatch(increment());
    };

    const decrementFn = () => {
        dispatch(decrement());
    };

    const incrementByRandomNumberFn = () => {
        dispatch(incrementAsync(9));
    }


  return (
    <div>Counter : {count}

    <button onClick={incrementFn} >Increment</button>

    <button onClick={decrementFn} >Decrement</button>

    <button onClick={incrementByRandomNumberFn} >Increment by random number</button>

    </div>
  )
}
