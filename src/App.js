import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly focused on creating reusable UI components",
  },
  {
    id: 2011,
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your React components",
  },
  {
    id: 2004,
    question: "What is the significance of the ReactDOM.render method?",
    answer:
      "ReactDOM.render is used to render React elements into the DOM. It takes a React element and mounts it into a specified DOM node",
  },
  {
    id: 2012,
    question: "Explain the concept of (props) in React",
    answer:
      "Props (short for properties) are a mechanism for passing data from parent to child components in React. They are read-only and help to make components reusable and customizable",
  },
  {
    id: 2006,
    question: "What are stateful and stateless components?",
    answer:
      " Stateful components (also called Class components) have their own internal state managed by the setState method. Stateless components (also called Functional components) don't have state and are mainly used for presentation",
  },
  {
    id: 2008,
    question: "What is the purpose of the setState method?",
    answer:
      "setState is used to update the state of a component and trigger a re-render of the component and its child components",
  },
  {
    id: 2010,
    question: "Explain the component lifecycle in React",
    answer:
      "The component lifecycle consists of mounting, updating, and unmounting phases. During these phases, various lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount are called",
  },
  {
    id: 2014,
    question: "What is React Router used for?",
    answer:
      "React Router is a library that enables client-side routing in a React application, allowing you to create single-page applications with multiple views",
  },
  {
    id: 2016,
    question: "What is a controlled component in React?",
    answer:
      "A controlled component is a component whose value is controlled by React (usually through state) rather than the DOM. This enables React to maintain consistent control over the component's behavior",
  },
  {
    id: 2018,
    question: "What is Redux?",
    answer:
      "Redux is a state management library for JavaScript applications, often used with React. It provides a predictable way to manage application state and make it accessible to different parts of the application",
  },
  {
    id: 2019,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language primarily used for adding interactivity and dynamic behavior to websites, and or Web Applications",
  },
  {
    id: 3021,
    question: "What is the difference between null and undefined?",
    answer:
      "null represents an intentional absence of any object value, while undefined represents an uninitialized or missing value.",
  },
  {
    id: 4042,
    question: "Explain hoisting in JavaScript",
    answer:
      "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation",
  },
  {
    id: 2552,
    question: "What are closures?",
    answer:
      "Closures are functions that have access to variables from their outer (enclosing) function's scope, even after the outer function has finished executing",
  },
  {
    id: 5015,
    question: "What is the this keyword in JavaScript?",
    answer:
      "this refers to the context in which a function is executed. Its value can change depending on how a function is called",
  },
  {
    id: 6012,
    question: "How does asynchronous programming work in JavaScript?",
    answer:
      " JavaScript uses callbacks, Promises, and async/await to handle asynchronous operations, allowing non-blocking execution and improved performance",
  },
  {
    id: 7021,
    question: "Explain the concept of prototypal inheritance in JavaScript",
    answer:
      "In JavaScript, objects can inherit properties and methods directly from other objects through their prototype chain",
  },
  {
    id: 7032,
    question: "What are arrow functions?",
    answer:
      " Arrow functions are a concise syntax for writing functions in JavaScript. They have a shorter syntax compared to traditional function expressions and do not bind their own this value",
  },
  {
    id: 7072,
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique where you attach a single event handler to a parent element to handle events for its child elements. This can improve performance and simplify event management",
  },
  {
    id: 8052,
    question:
      "What is the purpose of the localStorage and sessionStorage objects?",
    answer:
      "localStorage and sessionStorage are Web Storage APIs in JavaScript that allow you to store key-value pairs locally in a user's browser. localStorage persists even after the browser is closed, while sessionStorage is limited to a session",
  },
  {
    id: 9302,
    question: "Give Example of the Array from method",
    answer:
      "It can be defined as: Array.from({ length: 40}, (_, i) => i + 1). We can then call the .map() method on this to diplay the list of the Array",
  },
];

function FlashCards() {
  const [usedId, setUsedId] = useState(9302);

  function handleClick() {
    setUsedId();
  }

  return (
    <div className="flashcards" onClick={handleClick}>
      {questions.map((data) => (
        <div className={usedId === data.id ? "selected" : ""}>
          <p>{usedId === data.id ? data.answer : data.question}</p>
        </div>
      ))}
    </div>
  );
}
