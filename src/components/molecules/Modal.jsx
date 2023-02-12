import styled from 'styled-components'
import PropTypes from 'prop-types'
import { close } from '../../assets'

const SectionStyled = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  left: 0;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;
`

const ModalContainer = styled.div`
  align-items: center;
  border-radius: 6px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  height: 100%;
  padding: 5rem;
  position: relative;
  width: 90%;
`

const ButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 25px;
  right: 25px;
`
function Modal({ children, closeModal }) {
  return (
    <SectionStyled>
      <ModalContainer>
        <ButtonStyled onClick={closeModal}>
          <img src={close} alt="Close logo" />
        </ButtonStyled>
        {children}
        {/* <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed
          totam necessitatibus similique vero sit eligendi incidunt eveniet
          facere beatae?
        </Text>
        <img src={img} alt={title} /> */}
      </ModalContainer>
    </SectionStyled>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
}

export default Modal
