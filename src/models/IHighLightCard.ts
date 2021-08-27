export interface IHighlightCard {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total';
}