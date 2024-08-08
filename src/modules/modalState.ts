import { ref } from 'vue';

class ModalState {
    private static instance: ModalState;
    private currentModal = ref<null | string>(null);

    private constructor() {}

    public static getInstance(): ModalState {
        if (!ModalState.instance) { ModalState.instance = new ModalState(); }
        return ModalState.instance;
    }

    public openModal(modal: string): void { this.currentModal.value = modal; }
    public closeModal(): void { this.currentModal.value = null; }
    public getCurrentModal(): string | null { return this.currentModal.value; }
}

export const modalState: ModalState = ModalState.getInstance();