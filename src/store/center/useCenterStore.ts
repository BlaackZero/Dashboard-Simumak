import { create } from "zustand";
import { CenterState } from "../../interface/center-response";
import { getCenterInfo } from "../../actions/center";

export const useCenterStore = create<CenterState>((set) => ({
    centerInfo: null,
    fetchCenterInfo: async () => {
        const centerInfo = await getCenterInfo();
        set({ centerInfo });
    }
}));