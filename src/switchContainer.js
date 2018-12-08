import React from "react";
import Switch from "./components/switch";

class SwitchContainer extends React.Component {
  static On = ({ on }) => {
    return on && <h2>On</h2>;
  };
  static Off = ({ on }) => {
    return !on && <h2>Off</h2>;
  };
  static Switch = ({ on, toggle }) => {
    return <Switch on={on} onClick={toggle} />;
  };

  state = { on: false, test: true };

  toggle = () => {
    /*
    this.setState(
      (currentState)=>{
        return {
          on: !currentState.on
        }
      }
    )
    */
    this.setState(({ on }) => ({ on: !on }));
  };

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );
  }
}
export default SwitchContainer;
