import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IInputStateController extends TextInputProps {
    control: Control;
    name: string;
    error: string;
}