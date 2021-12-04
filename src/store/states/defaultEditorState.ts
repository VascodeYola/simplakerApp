import { Editor } from "src/types"
import { defaultSlide } from "src/store/states/defaultSlideState"

export const defaultEditor: Editor = {
    mode: 'edit',
    presentation: {
        title: 'New presentetion',
        slideList: [
            defaultSlide          
        ]
    },
    chronicle: {
        undo: [],
        redo: []
    },
    selectedSlides: [],
    // palette:  
}