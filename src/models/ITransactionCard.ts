interface ICategory {
    name: string;
    icon: string;
};

export interface ITransactionCardData {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: ICategory;
    date: string;
};

export interface ITransactionCard {
    data: ITransactionCardData;
};

export interface IDataListProps extends ITransactionCardData {
    id: string;
};