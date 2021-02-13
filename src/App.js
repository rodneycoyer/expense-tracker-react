import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <NavigationBar />
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
