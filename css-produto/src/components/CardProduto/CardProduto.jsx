import React from 'react'
import { CardContainer, ProductName, ProductPrice, AddButton } from './CardProduto.styled'

const CardProduto = ({ nome, preco, adicionado, onAdicionar }) => {
  return (
    <CardContainer>
      <ProductName>{nome}</ProductName>
      <ProductPrice>{preco}</ProductPrice>
      <AddButton adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? 'Adicionado!' : 'Adicionar ao carrinho'}
      </AddButton>
    </CardContainer>
  )
}

export default CardProduto
