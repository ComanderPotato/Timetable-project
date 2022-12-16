import { createContext, useReducer, useContext } from "react";

export const AssignmentContext = createContext(null);
export const AssignmentDispatchContext = createContext(null);

const initialAssignments = localStorage.assignments ? JSON.parse(localStorage.getItem('assignments')) : []

export function AssignmentProvider({children}) {
  const [assignments, dispatch] = useReducer(
    assignmentsReducer,
    initialAssignments
  );


  return (
    <AssignmentContext.Provider value={assignments}>
      <AssignmentDispatchContext.Provider value={dispatch}>
        {children}
      </AssignmentDispatchContext.Provider>
    </AssignmentContext.Provider>
  )
}

export function useAssignments() {
  return useContext(AssignmentContext);
}

export function useAssignmentDispatch() {
  return useContext(AssignmentDispatchContext);
}


function assignmentsReducer(assignments, action) {

}