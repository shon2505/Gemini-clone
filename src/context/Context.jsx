import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext({ onSent: () => { } });

const ContextProvider = (props) => {
    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompt, setprevPrompt] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");


    const onSent = async (prompt) => {
        try {
            
            setresultData("");
            setloading(true);
            setshowResult(true);

            const response = await runChat(input);

            setresultData(response);
            setloading(false);
            setinput("")

            console.log("Chat response:", response); // Log or process the response
        } catch (error) {
            console.error("Error in onSent:", error);
        }
    };

    // Call onSent with "What is React" once when the component is rendered
    //onSent("What is React");

    const contextValue = {
        prevPrompt,
        setprevPrompt,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setinput       
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
