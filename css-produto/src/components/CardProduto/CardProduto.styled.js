import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 280px;
  text-align: center;
`

export const ProductName = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`
