import { create } from "zustand";
import { OfferT } from "@components/page-blocks/loan-page-blocks/offers/offer.type";

type PrescoringStateT = {
  completed: boolean;
  loading: boolean;
  error: boolean;
  offers: null | OfferT[];

  setCompleted: (completedState: boolean) => void;
  setLoading: (loadingState: boolean) => void;
  setError: (errorState: boolean) => void;
  setOffers: (offersArr: OfferT[]) => void;
};

export const selectPrescoringStore = {
  completed: (state: PrescoringStateT) => state.completed,
  loading: (state: PrescoringStateT) => state.loading,
  error: (state: PrescoringStateT) => state.error,
  offers: (state: PrescoringStateT) => state.offers,

  setCompleted: (state: PrescoringStateT) => state.setCompleted,
  setLoading: (state: PrescoringStateT) => state.setLoading,
  setError: (state: PrescoringStateT) => state.setError,
  setOffers: (state: PrescoringStateT) => state.setOffers,
};

export const usePrescoringStore = create<PrescoringStateT>(set => ({
  completed: false,
  loading: false,
  error: false,
  offers: null,

  setCompleted: (completedState: boolean) =>
    set(state => ({ ...state, completed: completedState })),
  setLoading: (loadingState: boolean) =>
    set(state => ({ ...state, loading: loadingState })),
  setError: (errorState: boolean) =>
    set(state => ({ ...state, error: errorState })),
  setOffers: offersArr => set(state => ({ ...state, offers: offersArr })),
}));
