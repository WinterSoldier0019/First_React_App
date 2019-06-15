import React, {Component,Fragment} from "react";
import "./normalize.css"
import "./skeleton.css"
import Form from "./components/form"
import Result from "./components/result"


class App extends Component {
  state = {
    Amount: ""
  }

  loanInfo = (Principal,Rate,Time) => {
    const si = (Principal*Rate*Time)/100;
    const total = si + Principal;
    this.setState({
    Amount: Number(total)
  })
}

render()
{
  return (<Fragment>
    <h1 id="heading" className="u-full-width">Simple Interest Calculator</h1>
    <div className="container">
      <Form LoanInfo = {this.loanInfo}/>
      <Result Res = {this.state.Amount}/>
    </div>
  </Fragment>);
}
}

export default App;
