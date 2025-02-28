import React, { useState } from 'react';
import styles from './InvitationPage.module.css';
import minhaFoto from '../../img/foto.jpg';
import { QRCodeCanvas } from 'qrcode.react';

const InvitationPage = () => {
  const [name, setName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState('');


  const handleConfirm = async () => {
    if (name.trim()) {
      try {
        const response = await fetch('https://convite-lista.vercel.app/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome: name }), 
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data.message); 
          setIsConfirmed(true);
          setError('');
        } else {
          const errorResponse = await response.json();
          console.error('Erro:', errorResponse.message);
          setError(errorResponse.message || 'Erro ao confirmar presença.');
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
        setError('Erro de conexão com o servidor.');
      }
    } else {
      setError('Por favor, preencha seu nome para confirmar a presença.');
    }
  };

  return (
    <div className={styles.invitationPage}>
     
      <div className={styles.invitationText}>
      <img src={minhaFoto} alt="Minha foto" className={styles.photo} />
        <h1>Eu tô formando! 🎓</h1>
        <p>
          Depois de muitos códigos, testes e programações, aprendendo, corrigindo bugs e falhas... chegou a hora!
        </p>
        <p>
          Estou muito feliz e quero te convidar para comemorar comigo esse momento tão especial.
        </p>
        <p>
  <strong>🗓 Data:</strong> 22 de fevereiro de 2025<br />
  <strong>📍 Local:</strong> 
  <a 
    href="https://www.google.com/maps?q=Salão+Carmesim" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: '#ffd700', textDecoration: 'underline' }}
  >
    Salão Carmesim
  </a>
  <br />
  <strong>⏰ Horário:</strong> 20h
</p>
        {!isConfirmed ? (
          <>
            <p>**Confirma tua presença aqui!**</p>
            <div className={styles.confirmationSection}>
              <input
                type="text"
                className={styles.nameInput}
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className={styles.confirmButton} onClick={handleConfirm}>
                Confirmar Presença
              </button>
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <div className={styles.pixSection}>
              <p>
                Ah, tua presença já será o meu maior presente. Mas, se quiser me presentear, faz um Pix! 🤑
              </p>
              </p>
            </div>
          </>
        ) : (
          <p className={styles.confirmationMessage}>
            Obrigado, {name}! Sua presença foi confirmada. Te espero lá! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default InvitationPage;
