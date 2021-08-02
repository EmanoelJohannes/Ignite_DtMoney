import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function Summary () {

    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>

            <div className="entrada">
                <header>
                    <p>Entradas</p>
                </header>
                <strong>        
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div className="saida">
                <header>
                    <p>Saídas</p>
                </header>
                <strong>                    
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>            
            </div>

            <div className="total"> 
                <header>
                    <p>Total</p>
                </header>
                <strong>                   
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
            
        </Container>
    )
}