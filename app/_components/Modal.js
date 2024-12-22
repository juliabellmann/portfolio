'use client';

import { useRef, useEffect, useState } from 'react';
import styled from "styled-components";

export default function Modal({ children }) {
    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      function centerModal() {
        if (modalRef.current && isOpen) {
          const modalRect = modalRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          modalRef.current.style.top = `${(viewportHeight / 2) - (modalRect.height / 2)}px`;
          modalRef.current.style.left = `${(viewportWidth / 2) - (modalRect.width / 2)}px`;
        }
      }

      window.addEventListener('resize', centerModal);
      return () => window.removeEventListener('resize', centerModal);
    }, [isOpen]);

    const handleOpenModal = () => {
      setIsOpen(true);
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    };

    const handleCloseModal = () => {
      setIsOpen(false);
      if (modalRef.current) {
        modalRef.current.close();
      }
    };

    return (
        <>
          <StyledOpenBtn onClick={handleOpenModal}>Informations</StyledOpenBtn>

            <StyledDialog ref={modalRef}>
                {isOpen && (
                  <>
                    {children}
                    <StyledClosebtn onClick={handleCloseModal}>Close</StyledClosebtn>
                  </>
                )}
            </StyledDialog>
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
    background-color: white;
    color: var(--akzentfarbe);
    
    padding: 10px 20px;
    border-radius: 15px;
    margin: 20px;
`;

const StyledDialog = styled.dialog`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    z-index: 100;

    margin: auto;
    /* padding: 30px; */

    max-height: 90vh;
    max-width: 90vw;
    overflow-y: auto;

    background-color: var(--akzentfarbe);
    color: white;

    border-radius: 30px;
    border-bottom: 3px solid white;
    border-top: 3px solid white;

    &::backdrop {
        background-color: rgba(0,0,0,0.8);
    }
`;