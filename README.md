# Project Structure (React JS)
A well-organized project structure enhances code clarity, facilitates scaling the application, and ensures that developers can easily navigate and understand the codebase. Below is a suggested project structure for a React project using TypeScript:

## Project Structure with TypeScript

![image](https://github.com/user-attachments/assets/2a971804-09fc-428b-b84f-127adfd9a50e)
![image](https://github.com/user-attachments/assets/6d4cf398-391c-4dae-a37d-5a153e85ea46)

## Explanation of Key Folders/Files

- **components/**: Contains reusable UI components such as buttons, headers, etc.
- **hooks/**: Holds custom hooks for reusable logic, such as authentication.
- **pages/**: Includes components that represent different pages of your application, like Home or Login.
- **services/**: Manages API calls. `api.ts` might include all your endpoints and functions to interact with the backend.
- **utils/**: Stores utility functions and constants. `constants.ts` can hold fixed values like API URLs, while `helpers.ts` includes reusable functions.
- **assets/**: Contains static files like images, fonts, and styles.
- **mock.ts**: Keeps mock API responses for testing purposes.
- **App.tsx**: The main application component.
- **index.tsx**: The entry point for React.
- **routes.tsx**: Manages application routes.

## Naming Conventions

- **Folders**: Use kebab-case (all lowercase with hyphens) for folder names for consistency and readability. Example: `components`, `hooks`, `utils`, `services`, `context`.

- **Files**:
  - **PascalCase**: Use for components and classes. Example: `MyComponent.tsx`, `UserProfile.tsx`, `Dashboard.tsx`.
  - **camelCase**: Use for utility functions, hooks, and lower-level files. Example: `myVariableName.ts`, `validateEmail.ts`, `userFetchData.ts`.

- **Strings File**: If your project supports multiple languages or has many user-facing strings, consider adding a `strings.ts` file in the `utils/` folder.

- **Constants**: Store values that don’t change, such as API base URLs, status codes, or fixed options. Use uppercase letters with underscores. Example: `API_BASE_URL`, `STATUS_OK`.

- **Variables**: Use camelCase for variable names and ensure they are meaningful. Example: `userName`, `isLoading`.

- **Functions**: Use camelCase for function names, and ensure they are descriptive. Example: `calculateTotal`, `handleClick`.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

git clone https://github.com/yogesh1490/react-project-structure.git
cd react-project-structure
npm install

To start the development server:

npm start

![image](https://github.com/user-attachments/assets/ef8d8584-6a0b-422c-971d-de85baa550f5)

