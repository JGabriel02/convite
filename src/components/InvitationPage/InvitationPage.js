import React, { useState } from 'react';
import './InvitationPage.css';
import minhaFoto from '../../img/foto.jpg';
import { QRCodeCanvas } from 'qrcode.react';

const InvitationPage = () => {
  const [name, setName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState('');

  const pixKey = "joaogabrielrocha.dev@gmail.com"; // Substitua pela sua chave Pix
  const pixLink = `00020126520014BR.GOV.BCB.PIX0130${pixKey}5204000053039865802BR5925JOAO GABRIEL DA ROCHA DA 6012PORTO ALEGRE622605223ipuAYnyYs3iIrypldGxXQ6304CE3B`;

  const handleConfirm = async () => {
    if (name.trim()) {
      try {
        const response = await fetch('https://convite-lista.vercel.app/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message); // Mensagem do back-end
          setIsConfirmed(true);
          setError('');
        } else {
          setError('Erro ao confirmar presença. Tente novamente.');
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
    <div className="invitation-page">
      <img src={minhaFoto} alt="Minha foto" className="photo" />
      <div className="invitation-text">
        <h1>Eu tô formando! 🎓</h1>
        <p>
          Depois de muitos códigos, testes e programações, aprendendo, corrigindo bugs e falhas... chegou a hora!
        </p>
        <p>
          Estou muito feliz e quero te convidar para comemorar comigo esse momento tão especial.
        </p>
        <p>
          <strong>🗓 Data:</strong> 22 de fevereiro de 2025<br />
          <strong>📍 Local:</strong> Salão Carmesim<br />
          <strong>⏰ Horário:</strong> 22h
        </p>
        {!isConfirmed ? (
          <>
            <p>**Confirma tua presença aqui!**</p>
            <div className="confirmation-section">
              <input
                type="text"
                className="name-input"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="confirm-button" onClick={handleConfirm}>
                Confirmar Presença
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="pix-section">
              <p>
                Ah, tua presença já será o meu maior presente. Mas, se quiser me presentear, faz um Pix! 🤑
              </p>
              <QRCodeCanvas value={pixLink} size={150} />
              <p>Escaneie o QR Code para me enviar um presente 🎁</p>
            </div>
          </>
        ) : (
          <p className="confirmation-message">
            Obrigado, {name}! Sua presença foi confirmada. Te espero lá! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default InvitationPage;
