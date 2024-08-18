import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        getTasks: (state, action) => {
            state.tasks = action.payload.task;
        },
    },
});

export const { addTask,getTasks } = taskSlice.actions;

export default taskSlice.reducer;