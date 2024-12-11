'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from "styled-components";

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
    // router.push('/');
  };

    return (
        <>
            <StyledOpenBtn onClick={() => setIsOpen(true)}>More Informations</StyledOpenBtn>
            {isOpen && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content">
                        {children}
                        <button onClick={handleClose}>Schließen</button>
                    </div>
                </div>
            )}
        </>
    )
}

const StyledOpenBtn = styled.button`
    background-color: red;
`;