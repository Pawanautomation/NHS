// src/components/EligibilityQuestion.tsx
interface EligibilityQuestionProps {
  question: string;
  questionNumber: number;  // Add this prop
  totalQuestions: number;  // Add this prop
  onChange: (value: boolean) => void;
}

export const EligibilityQuestion = ({ 
  question, 
  questionNumber,
  totalQuestions,
  onChange 
}: EligibilityQuestionProps) => {
  return (
    <div className="space-y-6" data-testid={`question-${questionNumber}`}>
      <div className="text-sm text-gray-500">
        Question {questionNumber} of {totalQuestions}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          data-testid="progress-bar"
        ></div>
      </div>

      <p className="text-xl font-semibold mb-8">{question}</p>
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => onChange(true)}
          className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          data-testid="yes-button"
          aria-label="Yes"
        >
          Yes
        </button>
        <button
          onClick={() => onChange(false)}
          className="px-8 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          data-testid="no-button"
          aria-label="No"
        >
          No
        </button>
      </div>
    </div>
  );
};