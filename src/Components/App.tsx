import { CssBaseline, Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "../../store"; // Import the store
import NewProjectCard from "./NewProjectCard";
import ProjectView from "./ProjectView";
import { useSelector } from "react-redux";

function App() {
  return (
    <Provider store={store}> {/* Ensure store is provided here */}
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
          height: "100vh",
          width: "100vw",
          backgroundColor: "grey", // Grey background
        }}
      >
        <AppContent />
      </Box>
    </Provider>
  );
}

function AppContent() {
  const showProjectSelectionScene = useSelector(
    (state) => state.display.showProjectSelectionScene
  );

  return (
    <div key={`key-${showProjectSelectionScene}`}>
      {/* Conditionally render the NewProjectCard based on the showProjectSelectionScene state */}
      {/* {showProjectSelectionScene && <NewProjectCard />}
      {!showProjectSelectionScene && <ProjectView />} */}
      {/* commented conditional above for testing / dev */}
      <ProjectView />

    </ div>
  );
}

export default App;
