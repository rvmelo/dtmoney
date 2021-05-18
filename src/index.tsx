import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'; 

createServer({

  models: {
    transaction: Model
  },

  // disponibiliza dados pré cadastrados
  seeds(server) {
server.db.loadData({
  transactions: [
    {
      id: 1,
      title: 'Freelance de website',
      category: 'dev',
      type: 'withdraw',
      amount: 6000,
      createdAt: new Date('2021-02-12 09:00:00')
    },
    {
      id: 2,
      title: 'Casa',
      category: 'aluguel',
      type: 'withdraw',
      amount: 1100,
      createdAt: new Date('2021-02-14 11:00:00')
    }
  ]
})
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    /*Primeiro parâmetro se refere ao banco de dados
    enquanto o segundo se refere ao request que é recebido*/  
   this.post('/transactions', (schema, request) => {
    const data = JSON.parse(request.requestBody);

    // cria registro no banco de dados
    return schema.create('transaction', data);

   }); 
  }
})
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


