import { TouchableOpacityProps } from "react-native";

export interface ITransactionTypeButton extends TouchableOpacityProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}