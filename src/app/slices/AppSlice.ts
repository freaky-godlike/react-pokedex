import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";
import { pokemonTabs } from "../../utils/constants";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo: undefined,
    currentPokemonTab: pokemonTabs.description,
    isLoading: true
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setToast: (state, action: PayloadAction<string>) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        clearToasts: (state) => {
            state.toasts = [];
        },
        setUserStatus: (state, action: PayloadAction<{ email: string } | undefined>) => {
            state.userInfo = action.payload;
        },
        setPokemonTab: (state, action) => {
            state.currentPokemonTab = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setToast, clearToasts, setUserStatus, setPokemonTab, setLoading } = AppSlice.actions;