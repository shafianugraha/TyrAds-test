import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

interface VirtualCardProps {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
}

const VirtualCard: React.FC<VirtualCardProps> = ({cardNumber, cardHolderName, expirationDate}) => {
  return (
    <VirtualCardContainer>
      <BankLogo
        src='/assets/images/white-logo.png'
        alt='Bank Logo'
        width={40}
        height={40}
      />
      <VisaLogo
        src='/assets/images/visa.png'
        alt='Visa Logo'
        width={100}
        height={30}
      />
      <CardNumber>{cardNumber}</CardNumber>
      <CardHolderName>{cardHolderName}</CardHolderName>
      <ExpirationDate>{expirationDate}</ExpirationDate>
    </VirtualCardContainer>
  );
};

const VirtualCardContainer = styled.div`
  width: 100%;
  // max-width: 450px;
  height: 296px;
  background: linear-gradient(135deg, #5060e1 50%, #4d4da9 50%);
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const BankLogo = styled(Image)`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const VisaLogo = styled(Image)`
  width: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CardNumber = styled.div`
  font-size: 18px;
  position: absolute;
  bottom: 30px;
  left: 20px;
`;

const CardHolderName = styled.div`
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

const ExpirationDate = styled.div`
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

export default VirtualCard;
