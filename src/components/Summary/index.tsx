import { useContext } from 'react';
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export default function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions, 'transactions');




  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Toral</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
