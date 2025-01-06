const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
