import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegação
import styles from './CodeAnimation.module.css'; // Importando como módulo
import videoSrc from '../../videos/hackervideo.mp4';
import mensagemImg from '../../img/9guzah.jpg';

const CodeAnimation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/convite'); // Navega para a rota /convite
  };

  return (
    <div className={styles.codeAnimation}>
      <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
      {showPopup && (
        <div className={styles.popup}>
          <img src={mensagemImg} alt="Mensagem" className={styles.popupImage} />
          <button className={styles.popupButton} onClick={handleEnter}>
            Acessar Convite
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeAnimation;
