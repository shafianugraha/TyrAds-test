import React from 'react';

import styled from 'styled-components';

import Button from '@/components/atoms/button';
import Modal from '@/components/molecules/modal';
import Typography from '@/components/atoms/typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeatureNotAvailable: React.FC<ModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <Typography variant='h3'>This feature is coming soon!</Typography>
        <Button
          primary
          onClick={onClose}
        >
          Close
        </Button>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  align-items: center;
  justify-content: center;
`;

export default FeatureNotAvailable;
