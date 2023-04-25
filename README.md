# Incident Reporting Web App

This is a web application built with React and Firebase that allows users to report incidents and receive notifications when new incidents are reported.

## Features
- Users can report incidents by filling out a form with details about the incident.
- Users can delete incident report
- Users receive notifications when new incidents are reported, as long as they have logged in before.
- Incidents are stored in Firebase Realtime database, making it easy to view and manage reported incidents.



## Installation
1. Clone the repository
```
git clone https://github.com/JUNNY12/expense_manager.git

```
2. Install dependencies

```
cd <REPOSITORY-NAME>
Yarn install

```
3. Create a new Firebase project and add a web app to it.

4. Copy the Firebase configuration to src/firebase/firebase.ts file.

Start the development server:

5. Start the React App

```
yarn dev

```

6. Open the app in your browser at
 ``` 
http://127.0.0.1:5173/
 
 ```
# Usage

- Open your browser and go tohttp://127.0.0.1:5173/
- Login using google  auth.
- Report new incidents by filling out the incident report form.
- Your reported incidents are listed in the /report routes.
- All reported incidents are listed in the /incident routes

# Technology Used
- React
- Typescript
- Firebase
- Tailwind CSS

Contributions are welcome! Please open an issue or pull request for any bug fixes or feature requests.

## License 
This project is licensed under the MIT License - see the [MIT LICENSE](LICENSE) for details.