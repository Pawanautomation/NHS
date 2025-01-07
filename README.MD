
# Blood Donation Eligibility Checker

A web application that helps determine if a person is eligible to donate blood based on various health criteria and donation guidelines.

## Features

- User-friendly interface for entering health information
- Real-time eligibility validation
- Comprehensive health assessment based on standard blood donation criteria
- Detailed feedback on eligibility status
- Responsive design that works on desktop and mobile devices
- Component-based testing with Storybook

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pawanautomation/NHS.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Testing

### Running Unit Tests
To run unit tests for individual components or utility functions:
```bash
npm run test
```
This command runs all tests specified in the `*.test.tsx` files using the configured testing framework (e.g., Jest).

You can also run specific test files:
```bash
npm run test src/components/EligibilityQuestion.test.tsx
```

### Running End-to-End (E2E) Tests
To run E2E tests that simulate real user interactions:
```bash
npm run test:e2e
```
This command uses Playwright or Cypress (depending on the project setup) to run the end-to-end tests.

To run a specific E2E test:
```bash
npm run test:e2e -- spec tests/e2e/eligibility-flow.spec.ts
```

### Running Storybook
To test components in isolation:
```bash
npm run storybook
```
This will start Storybook at `http://localhost:6006`.

---

## Project Structure

```
blood-donation-eligibility-checker/
├── src/
│   ├── components/
│   │   ├── EligibilityQuestion.tsx
│   │   ├── EligibilityQuestion.stories.tsx
│   │   ├── EligibilityQuestion.test.tsx
│   │   └── ...
│   ├── utils/
│   │   └── eligibilityRules.ts
│   └── App.tsx
├── tests/               # E2E test files
│   ├── e2e/
│   │   └── eligibility-flow.spec.ts
├── public/
├── .storybook/          # Storybook configuration
├── package.json
└── README.md
```

## Technology Stack

- React.js with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Storybook for component testing
- Jest for unit testing
- Playwright (or Cypress) for E2E testing
- Lucide React for icons
- shadcn/ui components

## Development Commands

```bash
# Start development server
npm run dev

# Run Storybook for component testing
npm run storybook

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

```

## Testing Strategy

The application employs the following testing strategies:

1. **Unit Testing**:
   - Verifies the logic and behavior of individual components and utility functions.
   - Example: Testing the `EligibilityQuestion` component for correct rendering and state updates.

2. **End-to-End (E2E) Testing**:
   - Tests the complete user flow, from entering health information to receiving eligibility feedback.
   - Example: Simulating the user answering all 100 questions and verifying the final eligibility result.

3. **Component-Based Testing with Storybook**:
   - Allows isolated testing of UI components to ensure they behave as expected under various states.
   - Example: Testing variations of the `Button` component (primary, secondary, disabled states).

### Test Cases Include:
- **Unit Tests**:
  - Validation logic for eligibility rules
  - Rendering and interaction of individual components
  - Handling of different user inputs and edge cases

- **E2E Tests**:
  - Complete flow of eligibility questions
  - Progress bar updates
  - Error handling for incomplete or invalid inputs

- **Storybook Tests**:
  - Visual consistency of components
  - Interactive testing with props and controls
  - Action logging for component events

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue if your problem isn't already reported
3. Contact the development team

## Future Enhancements

- Multi-language support
- Integration with local blood banks
- Appointment scheduling system
- Mobile app version
- Donor history tracking
- Expanded test coverage
- Automated visual regression testing

## Security

This application does not store any personal health information. All eligibility checks are performed client-side.

## Test Documentation

For comprehensive testing documentation:
1. Run Storybook (`npm run storybook`)
2. Navigate to the Docs tab for each component
3. Review test cases and interactions
4. Check action logs for event verification
```

---

