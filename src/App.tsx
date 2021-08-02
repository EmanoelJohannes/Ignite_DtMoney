import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {


    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

    function handleTransactionModal() {
        setIsTransactionModalOpen(!isTransactionModalOpen);
    }

    return (
        <>
            <TransactionsProvider>
                <Header onHandleTransactionModal={handleTransactionModal} />
                <Dashboard/>

                <NewTransactionModal
                    isOpen={isTransactionModalOpen}
                    onRequestClose={handleTransactionModal}
                />

                <GlobalStyle/>
            </TransactionsProvider>
        </>
    )
}