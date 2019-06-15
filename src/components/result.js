import React,{Component} from "react";

class Result extends Component{
    render() {
        return(<div>
            <label id="res">The Total Payable Amount is {this.props.Res}</label>
        </div>);
    }
}
export default Result