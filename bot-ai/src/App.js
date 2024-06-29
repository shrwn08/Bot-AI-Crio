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
    time:"",
    rating: "",
    feedbackData: "",
  });
  const [showPastConversations, setShowPastConversations] = useState(false);

  useEffect(() => {
    setData(QuesAnsData);
  }, []);

  useEffect(() => {
    if (
      saveBtn &&
      cardData.askedQuestion !== "" &&
      cardData.answerData !== ""
    ) {
      setCardDataDetails((prevCardData) => [...prevCardData, cardData]);

      setCardData({
        askedQuestion: "",
        answerData: "",
        time:"",
        rating: "",
        feedbackData: "",
      });
    }
  }, [saveBtn, cardData]);

  const handleOnClickSaveBtn = () => {
    setSaveBtn(true);
  };

  const handlePastConversationBtn = () => {
    setShowPastConversations(true);
  };

  console.log(cardDataDetails);
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
