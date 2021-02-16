import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <div>
           <p>
           Question: {questionNr} / {totalQuestions}
           </p>
           <p dangerouslySetInnerHTML={{ __html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        {/* 특정조건이 충족될때까지 버튼 사용 안됨 */}
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
