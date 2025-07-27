// Traz as ferramentas necessárias para o nosso servidor.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importa o "molde" da mensagem que vamos salvar no banco.
const Message = require('./models/Message');

// Inicia o servidor e define a porta em que ele vai rodar.
const app = express();
const PORT = process.env.PORT || 5001;

// Configurações para o servidor aceitar chamadas de outros sites (CORS) e entender JSON.
app.use(cors());
app.use(express.json());

// Conecta nossa aplicação ao banco de dados MongoDB.
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.error('Erro ao conectar com MongoDB:', err));

// Rota de teste para verificar se a API está funcionando.
app.get('/api', (req, res) => {
    res.send('API está funcionando!');
});

// Rota principal: recebe uma mensagem, salva e retorna um código.
app.post('/api/messages', async (req, res) => {
  try {
    // Pega o texto que o frontend enviou.
    const { text } = req.body;

    // Verifica se o texto não está vazio.
    if (!text) {
      return res.status(400).json({ success: false, message: 'O campo de texto não pode ser vazio.' });
    }

    // Cria e salva a nova mensagem no banco de dados.
    const newMessage = new Message({ text });
    await newMessage.save();

    // Gera um código único para a resposta.
    const generatedCode = `CODE-${Date.now()}${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

    // Envia o código de volta para o frontend.
    res.status(201).json({ success: true, code: generatedCode });

  } catch (error) {
    // Se algo der errado, mostra o erro no console e envia uma resposta de erro.
    console.error('Erro ao salvar mensagem:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor.' });
  }
});

// Inicia o servidor para que ele comece a ouvir as requisições.
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});