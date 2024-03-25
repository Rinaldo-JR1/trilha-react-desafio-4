import React from "react";

export interface IButtonProps {
    title: string;
    valid:boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}