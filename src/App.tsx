import { useState } from 'react';
import { Heart, Activity, Check, X, AlertCircle } from 'lucide-react';

export const App = () => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
  const [isEligible, setIsEligible] = useState(true);
  const [needsFurtherAssessment, setNeedsFurtherAssessment] = useState(false);

  const eligibilityQuestions = [
    {
      id: 'lastDonation',
      question: 'Have you donated blood in the last 12 weeks?',
      disqualifyIf: true,
      requiresFurtherAssessment: false
    },
    {
      id: 'feeling',
      question: 'Are you feeling well today?',
      disqualifyIf: false,
      requiresFurtherAssessment: false
    },
    {
      id: 'age',
      question: 'Are you between 17 and 65 years old?',
      disqualifyIf: false,
      requiresFurtherAssessment: false
    },
    {
      id: 'weight',
      question: 'Do you weigh at least 50kg (7st 12lb)?',
      disqualifyIf: false,
      requiresFurtherAssessment: false
    },
    {
      id: 'pregnancy',
      question: 'Are you currently pregnant or have you given birth in the last 6 months?',
      disqualifyIf: true,
      requiresFurtherAssessment: false
    },
    {
      id: 'medication',
      question: 'Are you currently taking any prescribed medication?',
      disqualifyIf: true,
      requiresFurtherAssessment: true
    },
    {
      id: 'recentIllness',
      question: 'Have you had any illness in the last 7 days?',
      disqualifyIf: true,
      requiresFurtherAssessment: true
    },
    {
      id: 'vaccination',
      question: 'Have you had any vaccinations in the last 4 weeks?',
      disqualifyIf: true,
      requiresFurtherAssessment: true
    }
  ];

  const handleAnswer = (questionId: string, answer: boolean) => {
    const currentQuestion = eligibilityQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Check if answer should trigger further assessment
    if (currentQuestion.requiresFurtherAssessment && answer) {
      setNeedsFurtherAssessment(true);
      setIsAssessmentComplete(true);
      return;
    }

    // Check if answer disqualifies
    if (answer === currentQuestion.disqualifyIf && !currentQuestion.requiresFurtherAssessment) {
      setIsEligible(false);
      setIsAssessmentComplete(true);
      return;
    }

    // Move to next question or complete assessment
    if (currentQuestionIndex < eligibilityQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsAssessmentComplete(true);
    }
  };

  const renderResult = () => {
    if (needsFurtherAssessment) {
      return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
            <h2 className="text-xl font-semibold text-yellow-800">Further Assessment Required</h2>
          </div>
          <p className="text-yellow-700 mb-4">Based on your answers, we need more information to determine your eligibility.</p>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
            Contact Blood Center
          </button>
        </div>
      );
    }

    if (isEligible) {
      return (
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Check className="h-6 w-6 text-green-500 mr-3" />
            <h2 className="text-xl font-semibold text-green-800">You Are Eligible to Donate</h2>
          </div>
          <p className="text-green-700 mb-4">Great news! Based on your answers, you meet the initial eligibility criteria.</p>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Schedule Donation
          </button>
        </div>
      );
    }

    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <X className="h-6 w-6 text-red-500 mr-3" />
          <h2 className="text-xl font-semibold text-red-800">Currently Not Eligible</h2>
        </div>
        <p className="text-red-700 mb-4">Based on your answers, you are currently not eligible to donate blood.</p>
        <p className="text-red-600">Please check back when your circumstances change.</p>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Blood Donation Eligibility Check
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Answer a few questions to check if you're eligible to donate blood
            </p>
          </div>

          {!isAssessmentComplete ? (
            /* Question Section */
            <div className="mb-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Question {currentQuestionIndex + 1} of {eligibilityQuestions.length}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((currentQuestionIndex + 1) / eligibilityQuestions.length) * 100}%` 
                  }}
                ></div>
              </div>

              {/* Question */}
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {eligibilityQuestions[currentQuestionIndex].question}
              </h2>

              {/* Answer Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleAnswer(eligibilityQuestions[currentQuestionIndex].id, true)}
                  className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(eligibilityQuestions[currentQuestionIndex].id, false)}
                  className="px-8 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            renderResult()
          )}

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <Activity className="h-4 w-4 mr-2" />
              Your privacy is protected. All information is confidential.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;