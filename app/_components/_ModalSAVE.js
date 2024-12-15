'use client';

import { useState } from 'react';
import styled from "styled-components";

export default function ModalSAVE({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

    return (
        <>
            <StyledOpenBtn onClick={handleOpenModal}>More Informations</StyledOpenBtn>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalClose}>
                    <div className="modal-content">
                        {children}
                        <StyledClosebtn onClick={handleModalClose}>Back</StyledClosebtn>
                    </div>
                </div>
            )}
        </>
    )
}

const StyledOpenBtn = styled.button`
    background-color: var(--card-text-color);
    color: var(--akzentfarbe);
    padding: 10px 20px;
    border-radius: 15px;
`;

const StyledClosebtn = styled.button`
    background-color: var(--akzentfarbe);
    padding: 10px 20px;
    border-radius: 15px;
`;