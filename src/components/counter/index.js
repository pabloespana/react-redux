import { increment, decrement } from "../../store/counter/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { value: state.countReducer.value };
};

const Counter = ({ value, increment, decrement }) => {
  return (
    <>
      <h1>Counter using React and Redux</h1>
      <h2>{value}</h2>
      <button id="increment" onClick={() => increment()}>Increment</button>
      <button id="decrement" onClick={() => decrement()}>Decrement</button>
    </>
  );
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
