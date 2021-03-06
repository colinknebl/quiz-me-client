import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

interface IInputItem {
    label: string;
    type: any;
    value: string;
    onChange: any;
}

export function InputItem({ label, type, value, onChange }: IInputItem) {
    return (
        <IonItem>
            <IonLabel position="floating">{label}</IonLabel>
            <IonInput
                autocomplete="off"
                type={type}
                value={value}
                onIonChange={(e) => onChange(e.detail.value)}
            ></IonInput>
        </IonItem>
    );
}
