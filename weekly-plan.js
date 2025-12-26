// 12-Week Daily Learning Plan for React Native
// Each week has 5 days (Mon-Fri) with weekends for review/practice

const weeklyPlan = [
    {
        week: 1,
        title: "Week 1: Understanding React Native & JavaScript Basics",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "What is React Native?",
                    content: "React Native is like a magic translator. You write code in JavaScript (a language that works everywhere), and React Native turns it into real mobile apps for iPhone and Android. Imagine writing a letter once, and it automatically translates perfectly into any language - that's React Native for mobile apps!",
                    keyPoint: "One codebase = Two apps (iOS + Android)"
                },
                practice: {
                    task: "Watch the official React Native introduction video (10 min). Then, write down 3 reasons why companies use React Native instead of building separate apps.",
                    time: "15 minutes"
                },
                reflection: "If you were building a mobile app idea today, would you choose React Native? Why or why not?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "What is Expo and Why Use It?",
                    content: "Expo is like training wheels for React Native. Normally, setting up React Native requires installing lots of complicated tools (Xcode, Android Studio). Expo handles all that for you! You just write code and immediately see it on your phone. It's perfect for beginners.",
                    keyPoint: "Expo = Easy setup, instant testing on your phone"
                },
                practice: {
                    task: "Install Expo Go app on your phone from the App Store or Google Play. Open it and try the example projects in the 'Projects' tab. Play with them!",
                    time: "20 minutes"
                },
                reflection: "What surprised you most about seeing an app running on your phone instantly?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Setting Up Your Development Environment",
                    content: "Today you'll install Node.js (the engine that runs JavaScript) and create your first React Native project. Think of Node.js as the power source for your development tools. Without it, nothing works. With it, everything is possible!",
                    keyPoint: "Node.js + Expo CLI = Your development toolkit"
                },
                practice: {
                    task: "Install Node.js from nodejs.org. Then run: 'npx create-expo-app MyFirstApp' and 'cd MyFirstApp' then 'npx expo start'. Scan the QR code with Expo Go. See 'Hello World' on your phone!",
                    time: "25 minutes"
                },
                reflection: "How did it feel to create and run your first app on your phone?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "JavaScript Variables & Data Types",
                    content: "Variables are like labeled boxes that store information. 'let' creates a box you can change, 'const' creates a box that stays the same. You can store text (strings), numbers, true/false (booleans), lists (arrays), or groups of related data (objects).",
                    keyPoint: "let = changeable, const = permanent"
                },
                practice: {
                    task: "Open your App.js file. Create 3 variables: your name (string), your age (number), and whether you like coding (boolean). Use console.log() to print them. Check the terminal output.",
                    time: "20 minutes"
                },
                reflection: "When would you use 'let' vs 'const' in a real app?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "JavaScript Functions Basics",
                    content: "Functions are like recipes. You write the steps once (define the function), then use those steps whenever needed (call the function). Functions can take ingredients (parameters) and give back results (return values). Modern JavaScript uses arrow functions: const greet = (name) => 'Hello ' + name;",
                    keyPoint: "Functions = Reusable code recipes"
                },
                practice: {
                    task: "Create 3 functions: one that adds two numbers, one that greets someone by name, and one that checks if a number is even. Test each function with console.log().",
                    time: "25 minutes"
                },
                reflection: "What real-world app feature could you build using functions?"
            }
        ]
    },
    {
        week: 2,
        title: "Week 2: React Fundamentals - Components & Props",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "Understanding React Components",
                    content: "Components are like LEGO blocks. Each piece is independent but fits together to build something bigger. A component is just a JavaScript function that returns what should appear on screen. You can reuse components anywhere!",
                    keyPoint: "Component = Function that returns UI"
                },
                practice: {
                    task: "Create a WelcomeMessage component that shows 'Welcome to React Native!'. Replace the default content in App.js with your component. See it on your phone!",
                    time: "20 minutes"
                },
                reflection: "What parts of an app (like Instagram) do you think are separate components?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "Using Props to Pass Data",
                    content: "Props (properties) let you customize components by passing data into them - like function parameters. If a component is a cake recipe, props are the flavors you choose. Same recipe, different results!",
                    keyPoint: "Props = Data flowing into components"
                },
                practice: {
                    task: "Create a Greeting component that takes a 'name' prop. Use it 3 times with different names: <Greeting name='Alice' />, <Greeting name='Bob' />, etc. See all three greetings appear!",
                    time: "25 minutes"
                },
                reflection: "How do props make components reusable?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Introduction to State with useState",
                    content: "State is a component's memory. When state changes, the component re-renders (updates what's shown). The useState hook creates state: const [count, setCount] = useState(0). 'count' is the value, 'setCount' changes it.",
                    keyPoint: "State = Component's memory that triggers updates"
                },
                practice: {
                    task: "Build a counter: Create state with useState(0), show the count in Text, add a Button that increases the count when pressed. Watch the number change!",
                    time: "30 minutes"
                },
                reflection: "What's the difference between props (passed in) and state (owned by component)?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "Handling User Input with TextInput",
                    content: "TextInput is how users type into your app. To make it work, connect it to state: the 'value' prop shows the state, 'onChangeText' updates the state. This is called a 'controlled component'.",
                    keyPoint: "Controlled input: value={state}, onChangeText={setState}"
                },
                practice: {
                    task: "Create a state variable for text. Add TextInput with value and onChangeText connected to that state. Add Text below that shows what you type in real-time.",
                    time: "25 minutes"
                },
                reflection: "Why does React want you to control inputs with state?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "Building Your First Interactive App",
                    content: "Today you'll combine everything: components, props, state, and user input. You'll build a simple greeting app that asks your name and shows a personalized message.",
                    keyPoint: "Combining: Components + State + Events = Interactive App"
                },
                practice: {
                    task: "Build an app with TextInput (for name), Button (to submit), and Text (to show 'Hello [name]!'). Only show the greeting after button press.",
                    time: "30 minutes"
                },
                reflection: "What other simple interactive apps could you build with these skills?"
            }
        ]
    },
    {
        week: 3,
        title: "Week 3: React Advanced - useEffect & Lists",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "Understanding the useEffect Hook",
                    content: "useEffect runs code at specific times: when the component loads, when certain values change, or when it unloads. Think of it as 'side effects' - things that happen outside of just rendering UI.",
                    keyPoint: "useEffect = Run code when things happen"
                },
                practice: {
                    task: "Create a component with useEffect that console.logs 'Component loaded!' when it first appears. Use empty dependency array: useEffect(() => {...}, [])",
                    time: "20 minutes"
                },
                reflection: "When would you need to run code when a component loads?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "Working with Arrays and map()",
                    content: "The map() function transforms arrays. For UI, you use it to turn data into components. If you have an array of names, map() can turn each name into a Text component. It's like a factory assembly line!",
                    keyPoint: "array.map(item => <Component />) = Turn data into UI"
                },
                practice: {
                    task: "Create an array of 5 fruits. Use map() to display each fruit as a Text component. Add a key prop (required for lists): key={index}",
                    time: "25 minutes"
                },
                reflection: "Why does React need the 'key' prop for list items?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Building a Todo List (Part 1)",
                    content: "A todo list combines state (for the list), TextInput (to add items), and map() (to display items). Today you'll build the 'add' feature. State will be an array of strings.",
                    keyPoint: "Todo = Array state + TextInput + map()"
                },
                practice: {
                    task: "Create state for todos array and input text. Add TextInput and Button. When button pressed, add input to todos array using [...todos, newItem]. Display list with map().",
                    time: "30 minutes"
                },
                reflection: "What was challenging about managing an array in state?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "Adding Delete Functionality to Todo List",
                    content: "To delete items, use filter() method. filter() creates a new array without the item you want to remove. In React, always create new arrays (don't modify existing ones) to trigger re-renders.",
                    keyPoint: "Delete = filter() to create new array without item"
                },
                practice: {
                    task: "Add a 'Delete' button next to each todo item. When clicked, remove that item from the todos array using filter(). Hint: filter by index.",
                    time: "25 minutes"
                },
                reflection: "Why do we create a new array instead of modifying the existing one?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "Project: Complete Todo App",
                    content: "Today you'll polish your todo app. Add input validation (don't add empty todos), clear input after adding, and style it to look nice. This is your first complete functional app!",
                    keyPoint: "Polish = Validation + UX + Styling"
                },
                practice: {
                    task: "Enhance your todo app: 1) Don't add empty items, 2) Clear input after adding, 3) Add basic styling with flex and padding, 4) Test thoroughly on your phone.",
                    time: "30 minutes"
                },
                reflection: "What features would you add next to make this a real app?"
            }
        ]
    },
    {
        week: 4,
        title: "Week 4: Styling & Layout with Flexbox",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "Introduction to StyleSheet",
                    content: "StyleSheet is how you add styles in React Native. It's like CSS but written as JavaScript objects. Use StyleSheet.create() to define styles, then apply them with the style prop. Properties use camelCase: backgroundColor instead of background-color.",
                    keyPoint: "StyleSheet = CSS as JavaScript objects"
                },
                practice: {
                    task: "Create a StyleSheet with 3 styles: container (with padding and backgroundColor), title (with fontSize and fontWeight), and button (with backgroundColor and borderRadius). Apply them to components.",
                    time: "25 minutes"
                },
                reflection: "What's different about styling in React Native vs regular CSS?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "Flexbox Basics - Direction and Alignment",
                    content: "Flexbox arranges items in rows or columns. flexDirection: 'row' = horizontal, 'column' = vertical (default). justifyContent aligns along main axis (center, flex-start, flex-end, space-between). alignItems aligns along cross axis.",
                    keyPoint: "flexDirection + justifyContent + alignItems = Layout control"
                },
                practice: {
                    task: "Create a container with 3 colored boxes. Try different combinations: flexDirection: 'row' with justifyContent: 'space-between', then 'column' with alignItems: 'center'. See how they move!",
                    time: "30 minutes"
                },
                reflection: "When would you use flexDirection: 'row' vs 'column'?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Creating Card Layouts",
                    content: "Cards are common UI patterns - a container with image, title, and description. Use View as container, add padding, backgroundColor, borderRadius for rounded corners, and shadowColor for depth (iOS) or elevation (Android).",
                    keyPoint: "Card = View + padding + borderRadius + shadow"
                },
                practice: {
                    task: "Create a UserCard component with: profile image (Image), name (Text with bold font), bio (Text with smaller font), and Follow button. Style it like a social media card.",
                    time: "30 minutes"
                },
                reflection: "What other apps use card-style layouts?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "Centering Content",
                    content: "Centering is one of the most common tasks. To center everything in a full-screen view: use flex: 1 (take all space), justifyContent: 'center' (center vertically), alignItems: 'center' (center horizontally). This is your go-to pattern!",
                    keyPoint: "Center everything: flex: 1 + justifyContent + alignItems 'center'"
                },
                practice: {
                    task: "Create a welcome screen with centered content: app logo (use emoji or Image), title text, and 'Get Started' button. Everything perfectly centered on screen.",
                    time: "25 minutes"
                },
                reflection: "Why is flex: 1 important for full-screen layouts?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "Project: Profile Screen UI",
                    content: "Today you'll build a complete profile screen UI with header (image + name), stats row (posts/followers/following counts in a row), and bio section. This combines all layout skills you've learned.",
                    keyPoint: "Real UI = Multiple layout patterns combined"
                },
                practice: {
                    task: "Build a profile screen: 1) Header with circular profile image and name, 2) Stats row with 3 numbers (use flexDirection: 'row'), 3) Bio text below, 4) Edit Profile button at bottom.",
                    time: "30 minutes"
                },
                reflection: "What layout challenges did you face and how did you solve them?"
            }
        ]
    },
    {
        week: 5,
        title: "Week 5: Navigation Between Screens",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "Installing React Navigation",
                    content: "React Navigation is the standard library for navigation in React Native. It handles moving between screens, navigation history, and header bars. You'll install it with npm and set up the basic structure.",
                    keyPoint: "React Navigation = Moving between screens"
                },
                practice: {
                    task: "Install React Navigation: 'npm install @react-navigation/native @react-navigation/native-stack' and expo packages: 'npx expo install react-native-screens react-native-safe-area-context'",
                    time: "20 minutes"
                },
                reflection: "Why do apps need multiple screens instead of one long scrolling page?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "Creating Your First Stack Navigator",
                    content: "Stack Navigator manages screens like a stack of cards. You can push new screens on top (navigate) and pop them off (go back). Wrap your app in NavigationContainer, create a Stack with screens, and each screen is a component.",
                    keyPoint: "Stack = Screens stacked like cards, navigate = add to stack"
                },
                practice: {
                    task: "Create two screen components: HomeScreen and AboutScreen. Set up Stack Navigator with both screens. Run the app and verify you see HomeScreen first.",
                    time: "25 minutes"
                },
                reflection: "How is a Stack Navigator like the back button on your phone?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Navigating Between Screens",
                    content: "Each screen gets a 'navigation' prop automatically. Use navigation.navigate('ScreenName') to go to another screen. Use navigation.goBack() to return. The header back button works automatically!",
                    keyPoint: "navigation.navigate('Name') = Go to screen"
                },
                practice: {
                    task: "Add a button to HomeScreen that navigates to AboutScreen. Add a button to AboutScreen that goes back. Test navigation works both ways.",
                    time: "20 minutes"
                },
                reflection: "What happens to state when you navigate away and come back?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "Passing Data Between Screens",
                    content: "You can pass data when navigating: navigation.navigate('Details', { userId: 123 }). The receiving screen accesses it with route.params: const { userId } = route.params. This is how you show specific content.",
                    keyPoint: "Pass data: navigate('Screen', { data }), receive: route.params"
                },
                practice: {
                    task: "Create a ListScreen with 3 buttons (different names). When clicked, navigate to DetailScreen and pass that name. DetailScreen shows 'Details for [name]'.",
                    time: "30 minutes"
                },
                reflection: "What real-world scenarios need to pass data between screens?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "Project: Multi-Screen App",
                    content: "Build a complete 3-screen app: 1) HomeScreen with a list of items, 2) DetailScreen showing clicked item details, 3) AboutScreen with app info. Use all navigation concepts together.",
                    keyPoint: "Real navigation = Multiple screens + data passing + back button"
                },
                practice: {
                    task: "Create an app with HomeScreen (list of 5 fruits), DetailScreen (shows fruit name + description), and AboutScreen. Add navigation and data passing.",
                    time: "30 minutes"
                },
                reflection: "How does navigation make your app feel more professional?"
            }
        ]
    },
    {
        week: 6,
        title: "Week 6: Working with APIs and Data",
        days: [
            {
                day: "Monday",
                lesson: {
                    title: "Understanding APIs",
                    content: "API (Application Programming Interface) is a way to request data from a server. Think of it like ordering food: you make a request (order), the restaurant (server) processes it, and returns the food (data). APIs use URLs to specify what you want.",
                    keyPoint: "API = Request data from server using URLs"
                },
                practice: {
                    task: "Research and write down: 1) What is a REST API? 2) What is JSON? 3) Find 3 free public APIs you could use (like weather, quotes, or jokes APIs).",
                    time: "20 minutes"
                },
                reflection: "What data would your dream app need to fetch from an API?"
            },
            {
                day: "Tuesday",
                lesson: {
                    title: "Making Your First API Call with fetch()",
                    content: "fetch() is JavaScript's way to request data. It returns a Promise (a 'future value'). Use .then() to handle the response: fetch(url).then(response => response.json()).then(data => use data). It's asynchronous - doesn't block your app.",
                    keyPoint: "fetch(url).then(res => res.json()).then(data => ...)"
                },
                practice: {
                    task: "Fetch data from 'https://jsonplaceholder.typicode.com/todos/1' and console.log the result. Use fetch().then().then() pattern. Check your console!",
                    time: "25 minutes"
                },
                reflection: "Why do we need .json() before accessing the data?"
            },
            {
                day: "Wednesday",
                lesson: {
                    title: "Using useEffect to Fetch Data on Load",
                    content: "Combine useEffect + fetch to load data when component mounts. Put fetch inside useEffect with empty dependency array []. This loads data once when the screen appears. Save data to state, then display it.",
                    keyPoint: "useEffect(() => fetch(), []) = Load data on mount"
                },
                practice: {
                    task: "Create a component that fetches a random quote from 'https://api.quotable.io/random' when it loads. Store in state, display the quote text and author.",
                    time: "30 minutes"
                },
                reflection: "What would happen if you fetched data without useEffect?"
            },
            {
                day: "Thursday",
                lesson: {
                    title: "Handling Loading States",
                    content: "While fetching data, show a loading indicator. Use a state variable: const [loading, setLoading] = useState(true). Before fetch: loading is true. After data arrives: set loading to false. Show 'Loading...' text or ActivityIndicator when loading.",
                    keyPoint: "Loading state: show indicator while waiting for data"
                },
                practice: {
                    task: "Enhance yesterday's quote app: Add loading state. Show 'Loading...' while fetching. Add a 'Get New Quote' button that fetches again. Test the loading state.",
                    time: "25 minutes"
                },
                reflection: "Why is showing loading feedback important for user experience?"
            },
            {
                day: "Friday",
                lesson: {
                    title: "Project: Weather or News App",
                    content: "Build a complete app that fetches real data: either weather (OpenWeatherMap API) or news (News API). Show multiple pieces of data in a nice layout. Handle loading and errors gracefully.",
                    keyPoint: "Real API app = fetch + loading + error handling + nice UI"
                },
                practice: {
                    task: "Build a weather app: Fetch weather for a city, show temperature, description, and icon. Add loading state. Style it nicely with card layout. (Or use any free API you prefer)",
                    time: "30 minutes"
                },
                reflection: "What challenges did you face working with real API data?"
            }
        ]
    }
];

// Helper function to get current week progress
function getCurrentWeekNumber() {
    const startDate = localStorage.getItem('learningStartDate');
    if (!startDate) return 1;
    
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weekNumber = Math.ceil(diffDays / 7);
    
    return Math.min(weekNumber, weeklyPlan.length);
}
