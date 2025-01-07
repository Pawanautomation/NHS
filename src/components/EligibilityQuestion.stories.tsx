// src/components/EligibilityQuestion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { EligibilityQuestion } from './EligibilityQuestion';
import { fn } from '@storybook/test';  // Import fn for action logging

const meta: Meta<typeof EligibilityQuestion> = {
  title: 'Donor/EligibilityQuestion',
  component: EligibilityQuestion,
  tags: ['autodocs'],
  // Add default argTypes for better controls
  argTypes: {
    onChange: {
      action: 'answered',  // This will show in the Actions tab
      description: 'Called when Yes/No is clicked'
    }
  },
  // Add parameters for better documentation
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: {
      handles: ['click .yes-button', 'click .no-button'],
    },
  }
};

export default meta;
type Story = StoryObj<typeof EligibilityQuestion>;

// Story for testing 90th question specifically
export const Question90: Story = {
  args: {
    question: 'Have you had any vaccinations in the last 10 weeks?',
    questionNumber: 90,
    totalQuestions: 100,
    onChange: fn((answer) => {  // Use fn instead of console.log
      alert(`Question 90 answered: ${answer ? 'Yes' : 'No'}`);  // Add visible feedback
      return answer;
    })
  },
  play: async ({ canvasElement }) => {
    // Add automatic interaction test if needed
  },
};