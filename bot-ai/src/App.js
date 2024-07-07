import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import QuesAnsData from "./Components/Json-Data/QAData";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [saveBtn, setSaveBtn] = useState(false);
  const [cardDataDetails, setCardDataDetails] = useState([]);
  const [cardData, setCardData] = useState({
    askedQuestion: "",
    answerData: "",
    time: "",
    rating: "",
    feedbackData: "",
  });
  const [showPastConversations, setShowPastConversations] = useState(false);

  useEffect(() => {
    setData(QuesAnsData);
  }, []);

  useEffect(() => {
    if (saveBtn && cardData.askedQuestion && cardData.answerData) {
      setCardDataDetails((prevCardDataDetails) => [...prevCardDataDetails, { ...cardData }]);
      console.log("Card Data Added: ", cardData);
      
      setCardData({
        askedQuestion: "",
        answerData: "",
        time: "",
        rating: "",
        feedbackData: "",
      });

      setSaveBtn(false); // Reset saveBtn after adding the cardData
    }
  }, [saveBtn, cardData]);

  const handleOnClickSaveBtn = () => {
    setSaveBtn(true);
  };

  const handlePastConversationBtn = () => {
    setShowPastConversations(true);
  };

  console.log("Card Data Details: ", cardDataDetails); // For debugging

  return (
    <div className="App">
      <Home
        data={data}
        handleOnClickSaveBtn={handleOnClickSaveBtn}
        setCardData={setCardData}
        saveBtn={saveBtn}
        cardDataDetails={cardDataDetails}
        showPastConversations={showPastConversations}
        handlePastConversationBtn={handlePastConversationBtn}
      />
    </div>
  );
}

export default App;
