const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Seu usuário do MySQL
    password: '', // Sua senha do MySQL
    database: 'cos' // Seu banco de dados
  });

  db.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conectado ao banco de dados.');
  });

  // Rota de exemplo
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM produto', (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  });

  // Rota de exemplo
app.get('/api/cliente', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

 // Rota de exemplo
 app.get('/api/cos', (req, res) => {
  db.query('SELECT * FROM ordem', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.post('/api/adcionar', (req, res) => {
  const { nome, telefone, email } = req.body;
  const query = 'INSERT INTO clientes (nome, telefone, email) VALUES (?, ?, ?)';
  db.query(query, [nome, telefone, email], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ id: results.insertId });
  });
});

app.post('/api/estoque', (req, res) => {
  const { nome, marca, modelo, quantidade } = req.body;
  const query = 'INSERT INTO produto (nome, marca, modelo, quantidade) VALUES (?, ?, ?, ?)';
  db.query(query, [nome, marca, modelo, quantidade], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ id: results.insertId });
  });
});

app.delete('/api/clientes/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM clientes WHERE id = ?';

  db.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao excluir dado' });
    }
    res.status(200).json({ message: 'Dado excluído com sucesso' });
  });
});

app.delete('/api/estoque/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM produto WHERE id = ?';

  db.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao excluir dado' });
    }
    res.status(200).json({ message: 'Dado excluído com sucesso' });
  });
});


  // Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });