import { ModalContainer } from "./style"

type PropTypes = {
    handleModal: (() => void);
    title?: string;
    children: React.ReactNode;
  };


export const Modal = ({handleModal, children, title}: PropTypes) => {
  return (
    <ModalContainer>
        <div className="modalContent">
            <div className="titleModal">
                <p><strong>{title}</strong></p>
                <button style={{cursor: "pointer"}} onClick={handleModal}>X</button>
            </div>
            {children}
        </div>
    </ModalContainer>
  )
}
