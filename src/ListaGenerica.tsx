import { ReactElement } from "react";

export default function ListaGenerica(props: propsListaGenerica) {

    if (!props.lista) {
        return (<h2>...loading</h2>);
    } else {
        return props.children
    }

}

interface propsListaGenerica {

    lista: any;
    children: ReactElement;
}