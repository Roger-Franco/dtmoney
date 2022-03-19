import { Container } from './styles';

export default function TransactionsTables() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Luz</td>
            <td className='withdraw'>-R$150</td>
            <td>Consumo</td>
            <td>05/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
