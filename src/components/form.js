import React, {Component} from "react"

class Form extends Component{
    state = {
        Pri: "",
        Rate: "",
        Time: "",
    };
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : Number(value)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {Pri,Rate,Time} = this.state;
        this.props.LoanInfo(Pri,Rate,Time);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Principal</label>
                    <input onChange={this.handleChange} type="number" id="pri" className="u-full-width" name="Pri" placeholder="Enter the Principal Amount" />
                </div>
                <div>
                    <label>Rate</label>
                    <input onChange={this.handleChange} type="number" id="rate" className="u-full-width" name="Rate" placeholder="Enter the Rate" />
                </div>
                <div>
                    <label>Time(In years)</label>
                    <input onChange={this.handleChange} type="number" id="time" className="u-full-width" name="Time" placeholder="Select No.of Years" />
                </div>
                <div>
                <button onClick={this.handleSubmit} id="btn" className="u-full-width button-primary">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;