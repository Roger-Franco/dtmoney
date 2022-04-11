import { useState } from 'react';
import Modal from 'react-modal'
import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root') // orientaçao do modal visando acessibilidade

export default function App() {
  const [isNewTransactionOpen, setisNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setisNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
}
