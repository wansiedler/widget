export const QuizHeader = (props) => {
    return `<quiz-header key="${props.index}"><h1>${props.element.content}</h1><p>${props.element.subContent}</p></quiz-header>`;
}