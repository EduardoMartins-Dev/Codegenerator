'use client'; // Necessário para usar hooks como useState e eventos

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [message, setMessage] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Impede o recarregamento da página
    setIsLoading(true);
    setError(null);
    setGeneratedCode(null);

    try {
      const response = await fetch('http://localhost:5001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ocorreu um erro na requisição.');
      }

      setGeneratedCode(data.code); // Armazena o código retornado pela API
      setMessage(''); // Limpa o campo de input

    } catch (err) {
  if (err instanceof Error) {
    setError(err.message); 
  } else {
    setError('Ocorreu um erro desconhecido.'); // Uma mensagem genérica para outros casos
  }
}
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Envie sua Mensagem e receba um código como resposta</h1>
        <p className={styles.description}>
          Digite uma mensagem
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sua mensagem aqui..."
            className={styles.input}
            disabled={isLoading}
          />
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>

        {generatedCode && (
          <div className={styles.result}>
            <h3>Código Recebido com Sucesso:</h3>
            <p className={styles.code}>{generatedCode}</p>
          </div>
        )}

        {error && (
           <div className={styles.error}>
            <p>Erro: {error}</p>
          </div>
        )}
      </div>
    </main>
  );
}