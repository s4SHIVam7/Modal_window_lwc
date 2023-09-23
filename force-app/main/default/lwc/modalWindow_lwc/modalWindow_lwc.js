import { LightningElement, track } from 'lwc';
export default class ModalWindow_lwc extends LightningElement {

    @track isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

}