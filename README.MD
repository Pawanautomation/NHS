Here's the updated README.md incorporating all the testing information:

```markdown
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

### Running Storybook
To test components in isolation:
```bash
npm run storybook
```
This will start Storybook at http://localhost:6006

### Testing Specific Components
You can test specific questions without going through the entire flow:
1. Using URL parameters:
   ```
   http://localhost:6006/path=/story/donor-eligibilityquestion--question-90?args=questionNumber:76
   ```
2. Using the Controls panel in Storybook
3. Using specific story variations

### Storybook Features
- Interactive testing environment
- Real-time component manipulation
- Action logging for interactions
- Visual feedback for state changes
- Component isolation for focused testing

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
- Lucide React for icons
- shadcn/ui components

## Development Commands

```bash
# Start development server
npm run dev

# Run Storybook for component testing
npm run storybook

# Build the application
npm run build

# Build Storybook
npm run build-storybook
```

## Testing Strategy

The application uses a component-based testing approach with Storybook:
1. Isolated component testing
2. Direct testing of specific questions
3. Interactive state management
4. Visual regression testing capabilities
5. Action logging for interaction verification

### Test Cases Include:
- Basic question rendering
- Specific question scenarios (e.g., Question 90)
- Progress bar functionality
- Answer submission verification
- UI state management

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

This updated README includes:
- Storybook testing information
- Updated project structure
- Testing strategy details
- New development commands
- Component testing documentation
- Test case examples
- URL parameter testing information

