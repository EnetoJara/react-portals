import * as React from 'react';
import * as ReactDOM from "react-dom";

export type ModalProps = {
    children: any;
};
export type ModalState = any;

export class Modal extends React.Component<ModalProps, ModalState> {

    private container: HTMLDivElement;
    private modalRoot: HTMLElement;

    public constructor (props: ModalProps) {
        super(props);

        this.modalRoot = document.getElementById("root-modal") || document.createElement("div");
        this.modalRoot.className = "root-modal";
        this.container = document.createElement("div");
    }

    /**
     * Called immediately after a component is mounted.
     * Setting state here will trigger re-rendering.
     *
     * @returns {void}
     */
    public componentDidMount (): void {
        this.modalRoot.appendChild(this.container);
    }

    /**
     * Called immediately before a component is destroyed.
     * Perform any necessary cleanup in this method,
     * such as cancelled network requests, or cleaning up any
     * DOM elements created in componentDidMount.
     *
     * @returns {void}
     */
    public componentWillUnmount (): void {
        this.modalRoot.removeChild(this.container);
    }

    public render (): React.ReactElement<ModalProps> {
        return ReactDOM.createPortal(this.props.children, this.container)
    }
}
