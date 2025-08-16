import React from "react";
import { HeroSection } from "./pages/HeroSection/Hero";
import { BrowserRouter } from "react-router";
import RouteConfig from "./Router/RouteConfig";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";

const App = () => {
  return (
    <CopilotKit runtimeUrl="http://localhost:4000/copilotkit">
      <BrowserRouter>
       
          <CopilotPopup
            instructions={
              "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
            }
            labels={{
              title: "Popup Assistant",
              initial: "Need any help?",
            }}
            placement="top-left"
           
          />
      

        <RouteConfig />
      </BrowserRouter>
    </CopilotKit>
  );
};

export default App;
