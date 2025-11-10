import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEventStore = create(
  persist(
    (set) => ({
      events: [],
      isDark: false,

      toggleTheme: () =>
        set((state) => {
          return { isDark: !state.isDark };
        }),

      addEvent: (data) =>
        set((state) => ({
          events: [
            ...state.events,
            {
              id: crypto.randomUUID(),
              title: data.title,
              location: data.location,
              description: data.description,
              day: data.day,
              color: data.color,
            },
          ],
        })),

      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
    }),
    {
      name: "event-storage",
      partialize: (state) => ({ events: state.events, isDark: state.isDark }),
    }
  )
);

export default useEventStore;
