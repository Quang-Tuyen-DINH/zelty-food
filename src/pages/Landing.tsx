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
      <div className="zelty-restaurant__landing__title">Food app by<span>Quang Tuyen</span></div>
      <div className="zelty-restaurant__landing__commence">
        <Button className="zelty-restaurant__landing__commence__button" onClick={navigateCheckout}>Begin to command</Button>
      </div>
    </LandingStyled>
  )
}

export default React.memo(Landing);