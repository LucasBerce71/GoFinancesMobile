const formatCurrency = (currencyValue: string) => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'pt-BR',
    }).format(Number(currencyValue));
}