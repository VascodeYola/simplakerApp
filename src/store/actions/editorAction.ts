import { Mode } from 'src/types';

export type editorAction = {
    type: string;
    mode?: Mode;
    title?: string;
}

const CHANGE_TITLE = 'CHANGE_TITLE';

export function changeTitle(newTitle: string) {
    console.log(newTitle);
    return {
        type: CHANGE_TITLE,
        title: newTitle,
    }
}