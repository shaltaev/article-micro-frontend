import { createSlice } from '@reduxjs/toolkit';

const initialNewsListState = [
    {
        id: 0,
        title: 'Новость 0',
        text: 'Начальная новость. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque fuga harum maxime, quos sapiente sed tenetur. Assumenda, eveniet facere nam numquam provident voluptate!\n',
    },
    {
        id: 1,
        title: 'Новость 1',
        text: 'Первая новость. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque fuga harum maxime, quos sapiente sed tenetur. Assumenda, eveniet facere nam numquam provident voluptate!\n',
    },
    {
        id: 2,
        title: 'Новость 2',
        text: 'Вторая новость. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque fuga harum maxime, quos sapiente sed tenetur. Assumenda, eveniet facere nam numquam provident voluptate!\n',
    }
]

export const newsSlice = createSlice({
    name: 'list',
    initialState: initialNewsListState,
    reducers: {},
});
