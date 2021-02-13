import React, { Component } from 'react';

class AddTransaction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            setText: '',
            setAmount: 0
        };
    }


    render() {

        return (
            <div>
                <h3>Add new transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">
                            Description:
                        </label>
                        <input type="text" placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="setAmount">
                            Amount:
                        </label>
                        <input type="number" placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        );
    }
}

export default AddTransaction;