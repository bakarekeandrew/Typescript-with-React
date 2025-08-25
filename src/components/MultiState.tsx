import React, { useReducer } from "react";

const MultiState: React.FC = () => {
  interface FormState {
    step: number;
    name: string;
  }

  type Action =
    | { type: "next step" }
    | { type: "previous step" }
    | { type: "update field"; value: string }
    | { type: "reset" };

  const initialState: FormState = { step: 1, name: "" };

  const formReducer = (state: FormState, action: Action): FormState => {
    switch (action.type) {
      case "next step":
        return { ...state, step: state.step + 1 };
      case "previous step":
        return { ...state, step: state.step - 1 };
      case "update field":
        return { ...state, name: action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-4">
        <h2 className="text-xl font-semibold mb-4">Step {state.step}/2</h2>

        {state.step === 1 && (
          <div className="space-y-3">
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "update field", value: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              placeholder="Enter your name"
            />
            <button
              onClick={() => dispatch({ type: "next step" })}
              className="w-full bg-blue-500 text-white py-1 rounded"
            >
              Next
            </button>
          </div>
        )}

        {state.step === 2 && (
          <div className="space-y-3">
            <p>
              your name is: <b>{state.name}</b>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch({ type: "previous step" })}
                className="flex-1 bg-gray-300 py-1 rounded"
              >
                Back
              </button>
              <button
                onClick={() => alert("Submitted: " + state.name)}
                className="flex-1 bg-gray-500 text-white py-1 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="mt-4 w-full bg-gray-500 text-white py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MultiState;
