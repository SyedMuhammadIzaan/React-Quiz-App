import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const startReactQuiz = () => {
    navigate("/react-quiz-test");
  };
  const startGKQuiz = () => {
    navigate("/gk-quiz-test");
  };
  return (
    <>
      <div>
        <h1 className="text-xl text-center font-medium sm:font-bold sm:text-3xl">
          Quiz App
        </h1>
        <p className="text-center mb-3 ml-3 mr-3 mt-3">
          Each quiz contains 10 questions, you get 10 point for each correct
          answer, at the end of each quiz you get your total score.
        </p>
        <div className="w-full h-40 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2 sm:h-52">
          <div className="border-2 m-auto flex flex-col justify-center items-center w-6/12 rounded-2xl sm:w-9/12 sm:rounded-xl">
            <h2 className="text-lg font-medium mt-3 mb-3 sm:text-2xl">React Quiz</h2>
            <p className="mb-3">10 Questions covering the basics of React</p>
            <button className="text-white font-medium pl-2 pr-2 pt-2 pb-2 mb-3 sm:rounded-lg sm:pl-3 sm:pr-3 sm:pt-3 sm:pb-3 bg-green-700 hover:bg-green-600 " onClick={startReactQuiz}>Start Quiz</button>
          </div>
          <div className="border-2 m-auto flex flex-col justify-center items-center w-6/12 rounded-2xl sm:w-9/12 sm:rounded-xl">
            <h2 className="text-lg font-medium mt-3 mb-3 sm:text-2xl">General Knowledge Quiz</h2>
            <p className="mb-3">10 Questions covering the basics of General Knowledge</p>
            <button className="text-white font-medium pl-2 pr-2 pt-2 pb-2 mb-3 sm:rounded-lg sm:pl-3 sm:pr-3 sm:pt-3 sm:pb-3 bg-green-700 hover:bg-green-600" onClick={startGKQuiz}>Start Quiz</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
