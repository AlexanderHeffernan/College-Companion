import { ref } from 'vue';

class ModalState {
    private static instance: ModalState;
    private currentModal = ref<null | string>(null);
    private tempData = ref<any>(null);

    private constructor() {}

    public static getInstance(): ModalState {
        if (!ModalState.instance) { ModalState.instance = new ModalState(); }
        return ModalState.instance;
    }

    public openModal(modal: string, data: any = null): void { 
        this.currentModal.value = modal; 
        this.tempData.value = data;
    }
    
    public closeModal(): void { 
        this.currentModal.value = null; 
        this.tempData.value = null;
    }

    public getCurrentModal(): string | null { return this.currentModal.value; }
    public getTempData(): any { return this.tempData.value; }
}

export const modalState: ModalState = ModalState.getInstance();