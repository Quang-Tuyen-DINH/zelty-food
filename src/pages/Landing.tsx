import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingStyled } from "../components/styles/Landing.styled";
import { Button } from '../components/ui/Button';

const Landing = () => {
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/catalogue");

  }
  return (
    <LandingStyled className="zelty-restaurant__landing">
      <div className="zelty-restaurant__landing__title">Bienvenue sur <span>Zelty</span></div>
      <div className="zelty-restaurant__landing__commence">
        <Button className="zelty-restaurant__landing__commence__button" onClick={navigateCheckout}>Commencer à commander</Button>
      </div>
    </LandingStyled>
  )
}

export default Landing