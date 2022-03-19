import Summary from '../Summary'
import TransactionsTables from '../TransactionsTable'
import { Container } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTables />
    </Container>
  )
}
