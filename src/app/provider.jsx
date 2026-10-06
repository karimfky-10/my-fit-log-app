
"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export const FitLogProvider = ({ children }) => {
  // Today's Plan
  const [todayPlan, setTodayPlan] = useState([]);

  // Saved Workouts
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Completed Workouts
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  // Add workout to Today's Plan
  const addToPlan = (workout) => {
    setTodayPlan((currentPlan) => {
      const alreadyExists = currentPlan.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return currentPlan;
      }

      // Maximum 5 workouts


      return [...currentPlan, workout];
    });
  };

  // Remove workout from Today's Plan
  const removeFromPlan = (id) => {
    setTodayPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  // Save workout for later
  const saveWorkout = (workout) => {
    setSavedWorkouts((currentSaved) => {
      const alreadyExists = currentSaved.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  // Remove workout from Saved
  const removeSavedWorkout = (id) => {
    setSavedWorkouts((currentSaved) =>
      currentSaved.filter((item) => item.id !== id)
    );
  };

  // Mark workout as Done
  const markAsDone = (workout) => {
    setCompletedWorkouts((currentCompleted) => {
      const alreadyCompleted = currentCompleted.some(
        (item) => item.id === workout.id
      );

      if (alreadyCompleted) {
        return currentCompleted;
      }

      return [...currentCompleted, workout];
    });

    // Remove it from Today's Plan after completion
    setTodayPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== workout.id)
    );
  };

  // Check whether workout is already in Today's Plan
  const isInPlan = (id) => {
    return todayPlan.some((item) => item.id === id);
  };

  // Check whether workout is already Saved
  const isSaved = (id) => {
    return savedWorkouts.some((item) => item.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        completedWorkouts,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeSavedWorkout,

        markAsDone,

        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

// Custom hook
export const useFitLog = () => {
  return useContext(FitLogContext);
};
