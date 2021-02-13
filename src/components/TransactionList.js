import React from 'react';

function TransactionList() {
    return (
        <div>
            <h3> History </h3>
            <ul className="list">
{/* Test Transaction */}
                <li className="minus">
                    CASH <span> -$400 </span>
                    <button className="delete-btn"> x </button>
                </li>
{/* End Test Transaction */}
            </ul>
        </div>
    );
}

export default TransactionList;