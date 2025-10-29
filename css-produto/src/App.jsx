import React, { useState } from 'react'
import CardProduto from './components/CardProduto/CardProduto'

export default function App() {
  const [adicionado, setAdicionado] = useState(false)

  const produto = {
    nome: 'Camisa React.js',
    preco: 'R$ 89,90'
  }

  const handleAdicionar = () => {
    setAdicionado(!adicionado)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CardProduto
        nome={produto.nome}
        preco={produto.preco}
        adicionado={adicionado}
        onAdicionar={handleAdicionar}
      />
    </div>
  )
}
