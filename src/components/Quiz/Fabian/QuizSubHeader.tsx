export const QuizSubHeader = (props) => {
    return `<quiz-sub-header key="${props.index}"><h1>${props.element.content}</h1><p>${props.element.subContent}</p></quiz-sub-header>`;
}