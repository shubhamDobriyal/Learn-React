
export const reactQuestions = [
    {
        id : 1,
        question : "What is JSX?",
        answer : "JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax."
    },
    {
        id : 2,
        question : "What are Props?",
        answer : "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.The primary purpose of props in React is to provide following component functionality:Pass custom data to your component.Trigger state changes.Use via this.props.reactProp inside component's render() method."
    },
    {
        id : 3,
        question : "What is state in React?",
        answer : "State of a component is an object that holds some information that may change over the lifetime of the component."
    }
]
// What is the difference between state and props?
// In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics. state is managed by the component itself and can be updated using the setState() function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children. props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.

