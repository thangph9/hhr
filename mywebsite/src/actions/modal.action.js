import { modalConstants } from "../constants";

export const modalActions={
    openModal,
    closeModal,
    
}
function openModal(obj){
    return { type: modalConstants.OPEN_MODAL,
             obj
           }
}
function closeModal(obj){
    return { type: modalConstants.CLOSE_MODAL,
             obj
           }
}