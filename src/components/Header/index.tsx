import { Container, Content } from "./styles";

interface HeaderProps {
    onHandleTransactionModal: () => void;
}

export function Header({onHandleTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <h1>DtMoney</h1>
                <button type="button" onClick={onHandleTransactionModal}>
                    Nova transação
                </button>
            </Content>            
        </Container>
    )
}