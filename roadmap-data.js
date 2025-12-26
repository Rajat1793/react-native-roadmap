// React Native Learning Roadmap Data
const roadmap = [
    {
        phase: "Phase 1: Foundations",
        timeRecommendation: "15-20 min/day | Weeks 1-3",
        topics: [
            {
                name: "React Native & Expo Intro",
                definition: "React Native lets you build real mobile apps (iOS & Android) using JavaScript. Expo is a toolkit that makes React Native easier - no complex setup needed.",
                whatYoullLearn: [
                    "What is React Native and why use it",
                    "What is Expo and its advantages",
                    "How one codebase works on both iOS and Android",
                    "Understanding cross-platform development"
                ],
                learningGuide: "React Native is like building a website, but instead of making web pages, you're making real mobile apps that feel native and smooth. Think of Expo as your training wheels - it handles all the complex native setup so you can focus on learning and building.",
                practice: "Read React Native docs (15 min), Watch Expo introduction video (10 min), Understand why companies like Facebook and Instagram use React Native",
                ignore: "Don't worry about native modules, ejecting from Expo, or comparisons with Flutter. Skip advanced architecture discussions.",
                references: [
                    { title: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
                    { title: "What is Expo?", url: "https://docs.expo.dev/introduction/overview/" }
                ]
            },
            {
                name: "Setup Node.js & Expo CLI",
                definition: "Node.js runs JavaScript on your computer. Expo CLI is the command-line tool to create and run React Native projects.",
                whatYoullLearn: [
                    "Install Node.js from nodejs.org",
                    "Install Expo CLI using npm",
                    "Install Expo Go app on your phone",
                    "Create your first project with 'npx create-expo-app'"
                ],
                learningGuide: "Think of this like setting up your art studio - you need the right tools before you can paint. Node.js is your foundation, Expo CLI is your toolbox, and Expo Go is your canvas (your phone).",
                practice: "Install all tools (15 min), Create first project, Run it on your phone using Expo Go, See 'Hello World' appear!",
                codeExample: `# Install Expo CLI
npm install -g expo-cli

# Create your first project
npx create-expo-app MyFirstApp

# Start the project
cd MyFirstApp
npx expo start

# Scan QR code with Expo Go app on phone`,
                ignore: "Skip Xcode or Android Studio installation, iOS Simulator or Android Emulator setup (use your phone first), and complex build configurations.",
                references: [
                    { title: "Expo Installation Guide", url: "https://docs.expo.dev/get-started/installation/" },
                    { title: "Expo Snack Crash Course", url: "https://www.youtube.com/watch?v=f6iD6FTrNwE" }
                ]
            },
            {
                name: "JavaScript Essentials",
                definition: "The programming language that powers React Native. You need to know variables, functions, arrays, objects, and basic control flow.",
                whatYoullLearn: [
                    "Variables (let, const) and data types",
                    "Functions and arrow functions",
                    "Arrays and array methods (map, filter)",
                    "Objects and object properties",
                    "Conditionals (if/else) and loops"
                ],
                learningGuide: "JavaScript is your building blocks. Before building a house (React Native app), you need to know how to handle bricks (data), tools (functions), and blueprints (logic).",
                practice: "Spend 20-30 min/day on JavaScript basics. Focus on ES6+ features: arrow functions, template literals, destructuring. Practice on javascript.info or MDN Web Docs.",
                codeExample: `// Variables
let name = "John";
const age = 25;

// Arrow Functions
const greet = (name) => "Hello " + name;

// Arrays
const fruits = ["apple", "banana"];
fruits.map(fruit => console.log(fruit));

// Objects
const person = {
    name: "John",
    age: 25,
    city: "NYC"
};`,
                ignore: "Skip Promises/async/await for now (learn in Week 6), class-based syntax (React uses functional components), and advanced array methods like reduce initially.",
                references: [
                    { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
                ]
            },
            {
                name: "React Fundamentals",
                definition: "React is the library that powers React Native. Learn about components (building blocks), props (passing data), and state (storing data).",
                whatYoullLearn: [
                    "Components are functions that return UI",
                    "Props pass data to components (like function parameters)",
                    "State stores data that can change (useState hook)",
                    "useEffect hook for side effects",
                    "JSX syntax (looks like HTML in JavaScript)"
                ],
                learningGuide: "Components are like LEGO blocks - small, reusable pieces that build your app. Props customize them, State makes them interactive. This is the heart of React.",
                practice: "Create 3-5 simple components, Build a counter app, Build a greeting component with props, Build a text input that updates as you type",
                codeExample: `import { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button 
                title="Add" 
                onPress={() => setCount(count + 1)} 
            />
        </View>
    );
}`,
                ignore: "Skip class components and this.setState, Context API (learn after mastering useState), and useReducer hook (too advanced).",
                references: [
                    { title: "React Docs", url: "https://react.dev/learn" },
                    { title: "React Native for Beginners", url: "https://www.youtube.com/watch?v=XQTfEkejsuQ" }
                ]
            },
            {
                name: "Expo Project Structure",
                definition: "Understanding which files do what in your React Native project. Know where to write code and what each file/folder is for.",
                whatYoullLearn: [
                    "App.js is your main entry point",
                    "package.json lists your dependencies",
                    "app.json/config contains app settings",
                    "How to organize components/screens in folders"
                ],
                learningGuide: "Your project structure is like organizing a kitchen - everything has its place. App.js is your main cooking area, package.json is your ingredient list, and folders organize your recipes.",
                practice: "Explore your first project structure (10 min), Create a components folder, Move a component to its own file, Import and use it in App.js",
                ignore: "Skip complex folder structures, native code folders (ios, android if you eject), and advanced configuration for now.",
                references: [
                    { title: "Expo Docs", url: "https://docs.expo.dev/introduction/overview/" }
                ]
            }
        ]
    },
    {
        phase: "Phase 2: Core Development Skills",
        timeRecommendation: "30-45 min/day | Weeks 4-8",
        topics: [
            {
                name: "Building UI: Core Components",
                definition: "React Native's pre-built components like View (container), Text, Image, Button - the building blocks of your interface.",
                whatYoullLearn: [
                    "View - Container component (like HTML div)",
                    "Text - Display text (only way to show text)",
                    "Image - Display images from URL or local",
                    "Button - Basic clickable button",
                    "TextInput - Text entry field",
                    "ScrollView - Make content scrollable"
                ],
                practice: "Build a Profile Card with image, name, bio. Create a form with TextInput and Button. Make a scrollable list of items.",
                codeExample: `import { View, Text, Image, Button, TextInput, ScrollView } from 'react-native';

function ProfileCard() {
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Image 
                    source={{ uri: 'https://example.com/avatar.jpg' }}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontSize: 24 }}>John Doe</Text>
                <Text>Software Developer</Text>
                <Button title="Follow" onPress={() => {}} />
            </View>
        </ScrollView>
    );
}`,
                ignore: "Skip custom components initially, complex gesture handlers, and advanced image handling.",
                references: [
                    { title: "Core Components Docs", url: "https://reactnative.dev/docs/components-and-apis" }
                ]
            },
            {
                name: "Touchable Components & User Interactions",
                definition: "Creating custom interactive elements with TouchableOpacity, Pressable, and understanding different touchable components for better user experience.",
                whatYoullLearn: [
                    "TouchableOpacity for fade effect on press",
                    "TouchableHighlight for background highlight",
                    "Pressable - modern replacement for Touchables",
                    "Creating custom buttons",
                    "Handling press events with feedback"
                ],
                learningGuide: "While Button is simple, real apps need custom interactive elements. TouchableOpacity and Pressable let you make any View tappable with visual feedback - essential for cards, list items, custom buttons, etc.",
                practice: "Create custom card that responds to press, Build icon button with TouchableOpacity, Use Pressable for advanced press states, Create social media post with multiple touchable areas",
                codeExample: `import { TouchableOpacity, Pressable, Text } from 'react-native';

function CustomButton() {
    return (
        <TouchableOpacity 
            style={{ padding: 15, backgroundColor: 'blue' }}
            onPress={() => console.log('Pressed!')}
            activeOpacity={0.7}
        >
            <Text style={{ color: 'white' }}>Press Me</Text>
        </TouchableOpacity>
    );
}

function ModernButton() {
    return (
        <Pressable
            onPress={() => console.log('Pressed!')}
            style={({ pressed }) => [{
                padding: 15,
                backgroundColor: pressed ? 'darkblue' : 'blue'
            }]}
        >
            <Text style={{ color: 'white' }}>Modern Press</Text>
        </Pressable>
    );
}`,
                ignore: "Skip complex gesture handlers, pan responders, and advanced touch handling initially.",
                references: [
                    { title: "TouchableOpacity Docs", url: "https://reactnative.dev/docs/touchableopacity" },
                    { title: "Pressable Docs", url: "https://reactnative.dev/docs/pressable" }
                ]
            },
            {
                name: "Modal, ActivityIndicator & UI Feedback",
                definition: "Essential UI components for showing loading states, dialogs, and overlays to improve user experience.",
                whatYoullLearn: [
                    "Modal for popups and dialogs",
                    "ActivityIndicator for loading spinners",
                    "Showing/hiding modals with state",
                    "Creating alert dialogs",
                    "Loading states during data fetch"
                ],
                learningGuide: "Users need feedback when things are happening. ActivityIndicator shows loading, Modal creates overlays for confirmations, forms, or details. These are essential for professional-feeling apps.",
                practice: "Create loading spinner while fetching data, Build confirmation dialog with Modal, Make image viewer with Modal, Add loading overlay during form submission",
                codeExample: `import { Modal, ActivityIndicator, View, Button, Text } from 'react-native';

function LoadingExample() {
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    
    if (loading) {
        return <ActivityIndicator size="large" color="blue" />;
    }
    
    return (
        <View>
            <Button title="Show Modal" onPress={() => setModalVisible(true)} />
            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text>This is a Modal!</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}`,
                ignore: "Skip custom modal libraries, complex animations, and gesture dismissal initially.",
                references: [
                    { title: "Modal Docs", url: "https://reactnative.dev/docs/modal" },
                    { title: "ActivityIndicator Docs", url: "https://reactnative.dev/docs/activityindicator" }
                ]
            },
            {
                name: "SafeAreaView, StatusBar & Screen Layout",
                definition: "Handling device notches, status bars, and ensuring your content displays properly on all devices including iPhone X and newer.",
                whatYoullLearn: [
                    "SafeAreaView to avoid notches and rounded corners",
                    "StatusBar component for customization",
                    "Handling different device screen shapes",
                    "Setting status bar color and style",
                    "Creating proper screen layouts"
                ],
                learningGuide: "Modern phones have notches, rounded corners, and home indicators. SafeAreaView ensures your content doesn't get cut off. StatusBar lets you customize the top system bar for a polished look.",
                practice: "Wrap screens in SafeAreaView, Change StatusBar color per screen, Create app with light/dark StatusBar, Build full-screen image viewer",
                codeExample: `import { SafeAreaView, StatusBar, View, Text } from 'react-native';

function SafeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor="white"
            />
            <View style={{ flex: 1, padding: 20 }}>
                <Text>Content safely displayed!</Text>
            </View>
        </SafeAreaView>
    );
}`,
                ignore: "Skip complex notch calculations, custom safe area implementations, and platform-specific edge cases.",
                references: [
                    { title: "SafeAreaView Docs", url: "https://reactnative.dev/docs/safeareaview" },
                    { title: "StatusBar Docs", url: "https://reactnative.dev/docs/statusbar" }
                ]
            },
            {
                name: "KeyboardAvoidingView & Form UX",
                definition: "Ensuring forms and text inputs work smoothly with the keyboard by preventing the keyboard from covering input fields.",
                whatYoullLearn: [
                    "KeyboardAvoidingView to shift content when keyboard appears",
                    "Different behavior modes (height, position, padding)",
                    "Dismissing keyboard on tap outside",
                    "ScrollView with keyboard handling",
                    "Creating smooth form experiences"
                ],
                learningGuide: "Nothing frustrates users more than typing in a form they can't see. KeyboardAvoidingView automatically adjusts your layout when the keyboard appears, keeping inputs visible.",
                practice: "Build login form with keyboard handling, Create chat input that stays above keyboard, Make registration form that scrolls with keyboard, Add tap to dismiss keyboard",
                codeExample: `import { KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

function LoginForm() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <TextInput 
                        placeholder="Email"
                        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                    />
                    <TextInput 
                        placeholder="Password"
                        secureTextEntry
                        style={{ borderWidth: 1, padding: 10 }}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}`,
                ignore: "Skip complex keyboard tracking, custom keyboard animations, and advanced input accessories.",
                references: [
                    { title: "KeyboardAvoidingView Docs", url: "https://reactnative.dev/docs/keyboardavoidingview" }
                ]
            },
            {
                name: "Platform-Specific Code & Dimensions",
                definition: "Writing code that works differently on iOS vs Android, and handling different screen sizes responsively.",
                whatYoullLearn: [
                    "Platform.OS to detect iOS or Android",
                    "Platform-specific file extensions (.ios.js, .android.js)",
                    "Dimensions API for screen width/height",
                    "Creating responsive layouts",
                    "Platform.select() for inline platform code"
                ],
                learningGuide: "iOS and Android have different design patterns and behaviors. Platform API lets you write code that adapts to each OS. Dimensions helps you create layouts that work on phones and tablets.",
                practice: "Show different UI on iOS vs Android, Create responsive layout based on screen size, Use Platform.select for styles, Build tablet-optimized view",
                codeExample: `import { Platform, Dimensions, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

function ResponsiveComponent() {
    const isIOS = Platform.OS === 'ios';
    const isSmallScreen = width < 375;
    
    return (
        <View style={{
            padding: Platform.select({
                ios: 20,
                android: 15
            }),
            width: width * 0.9
        }}>
            <Text>Screen width: {width}</Text>
            <Text>Platform: {Platform.OS}</Text>
        </View>
    );
}`,
                ignore: "Skip complex responsive libraries, device detection beyond Platform, and pixel density calculations initially.",
                references: [
                    { title: "Platform Docs", url: "https://reactnative.dev/docs/platform" },
                    { title: "Dimensions Docs", url: "https://reactnative.dev/docs/dimensions" }
                ]
            },
            {
                name: "Styling Your App",
                definition: "Making your app look good with StyleSheet, colors, fonts, spacing. Learn Flexbox for layouts.",
                whatYoullLearn: [
                    "StyleSheet.create() for organized styles",
                    "Common style properties (fontSize, color, padding, margin)",
                    "Flexbox layout (flexDirection, justifyContent, alignItems)",
                    "How to center content",
                    "Creating horizontal and vertical layouts"
                ],
                learningGuide: "Styling in React Native is like CSS but written as JavaScript objects. Flexbox is your layout superpower - it arranges items horizontally or vertically with perfect spacing.",
                practice: "Center a button on screen, Create a horizontal row of icons, Build a card with image, title, description, Style a login form",
                codeExample: `import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    }
});`,
                ignore: "Skip absolute positioning, advanced animations, and complex responsive designs initially.",
                references: [
                    { title: "StyleSheet Docs", url: "https://reactnative.dev/docs/style" },
                    { title: "Flexbox Guide", url: "https://reactnative.dev/docs/flexbox" },
                    { title: "Expo UI & Styling Video", url: "https://www.youtube.com/watch?v=H6K3paU1K-A" }
                ]
            },
            {
                name: "Managing State & User Interaction",
                definition: "Making your app interactive with event handlers (onPress, onChangeText) and state management with useState.",
                whatYoullLearn: [
                    "Event handling: onPress for buttons",
                    "onChangeText for text inputs",
                    "Updating state on user actions",
                    "Controlled components (input value tied to state)",
                    "Basic form handling"
                ],
                practice: "Build a counter app, Create a todo list, Build a calculator, Make a simple form that validates input",
                codeExample: `function TodoApp() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    
    const addTodo = () => {
        setTodos([...todos, text]);
        setText('');
    };
    
    return (
        <View>
            <TextInput 
                value={text}
                onChangeText={setText}
                placeholder="Enter todo"
            />
            <Button title="Add" onPress={addTodo} />
            {todos.map((todo, i) => (
                <Text key={i}>{todo}</Text>
            ))}
        </View>
    );
}`,
                ignore: "Skip complex form libraries, advanced validation patterns, and gesture handlers for now.",
                references: [
                    { title: "React Hooks", url: "https://react.dev/learn" }
                ]
            },
            {
                name: "Basic Navigation",
                definition: "Moving between different screens in your app using React Navigation. Essential for multi-page apps.",
                whatYoullLearn: [
                    "Install React Navigation packages",
                    "Create a Stack Navigator (screen A → screen B)",
                    "Navigate between screens",
                    "Pass data between screens",
                    "Add navigation headers"
                ],
                practice: "Create Home and Details screens, Navigate from Home to Details, Pass user data to Details screen, Add back button",
                codeExample: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Navigate: navigation.navigate('Details', { userId: 123 })`,
                ignore: "Skip Tab and Drawer navigation initially, deep linking, and complex navigation patterns.",
                references: [
                    { title: "React Navigation Docs", url: "https://reactnavigation.org/docs/getting-started/" },
                    { title: "Navigation Crash Course", url: "https://www.youtube.com/watch?v=TKHFYqUexUc" }
                ]
            },
            {
                name: "Fetching Data (APIs)",
                definition: "Loading data from the internet using fetch(). Essential for dynamic apps that show real data.",
                whatYoullLearn: [
                    "Using fetch() to make HTTP requests",
                    "Displaying loaded data in your UI",
                    "Handling loading states",
                    "Error handling for failed requests",
                    "Basic async/await syntax"
                ],
                practice: "Fetch weather data from OpenWeatherMap API, Display random quotes from an API, Load and show user list, Add loading spinner",
                codeExample: `function DataScreen() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);
    
    if (loading) return <Text>Loading...</Text>;
    return <Text>{data.title}</Text>;
}`,
                ignore: "Skip GraphQL, complex API libraries like Axios initially, and advanced caching strategies.",
                references: [
                    { title: "Using fetch in React Native", url: "https://reactnative.dev/docs/network" }
                ]
            },
            {
                name: "Lists and FlatList",
                definition: "Efficiently displaying scrollable lists using FlatList. Perfect for contacts, products, messages, etc.",
                whatYoullLearn: [
                    "FlatList vs ScrollView (performance difference)",
                    "Rendering list items with renderItem",
                    "Using keyExtractor for unique keys",
                    "Adding pull-to-refresh",
                    "Adding search/filter functionality"
                ],
                practice: "Create a contacts list, Build a products catalog, Add search functionality, Implement pull-to-refresh",
                codeExample: `import { FlatList } from 'react-native';

const data = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' }
];

function ListScreen() {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text>{item.name}</Text>
            )}
        />
    );
}`,
                ignore: "Skip SectionList and VirtualizedList initially, complex performance optimizations, and infinite scroll.",
                references: [
                    { title: "FlatList Docs", url: "https://reactnative.dev/docs/flatlist" }
                ]
            },
            {
                name: "Handling App Lifecycle",
                definition: "Understanding when components mount, update, and unmount. Using useEffect for side effects.",
                whatYoullLearn: [
                    "Component lifecycle basics",
                    "useEffect with empty dependency array (runs once)",
                    "useEffect with dependencies (runs when they change)",
                    "Cleanup functions in useEffect",
                    "When to use different useEffect patterns"
                ],
                practice: "Load data on component mount, Update document title when state changes, Clean up timers or subscriptions, Handle app background/foreground states",
                ignore: "Skip class component lifecycle methods, advanced hooks like useLayoutEffect, and complex effect dependencies.",
                references: [
                    { title: "React Docs", url: "https://react.dev/learn" }
                ]
            },
            {
                name: "Expo Assets: Images, Fonts",
                definition: "Loading and using local images and custom fonts in your app using Expo's asset system.",
                whatYoullLearn: [
                    "Loading local images with require()",
                    "Using custom fonts with expo-font",
                    "Preloading assets with SplashScreen",
                    "Optimizing image sizes"
                ],
                practice: "Add logo to your app, Use custom Google Font, Create icon set, Preload assets before app starts",
                ignore: "Skip complex asset pipelines, advanced font variations, and native asset catalogs.",
                references: [
                    { title: "Expo Docs", url: "https://docs.expo.dev/introduction/overview/" }
                ]
            }
        ]
    },
    {
        phase: "Phase 3: Intermediate Features",
        timeRecommendation: "45-60 min/day | Weeks 9-12",
        topics: [
            {
                name: "Forms and Validation",
                definition: "Building login forms, registration forms with proper validation and error messages.",
                whatYoullLearn: [
                    "Controlled form inputs (value tied to state)",
                    "Email and password validation",
                    "Displaying error messages",
                    "Form submission handling",
                    "Disabling submit button during processing"
                ],
                practice: "Build login form with validation, Create registration form, Add password strength indicator, Show field-specific errors",
                ignore: "Skip complex form libraries like Formik initially, advanced validation schemas, and multi-step forms.",
                references: [
                    { title: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" }
                ]
            },
            {
                name: "Async Storage/Basic Data Persistence",
                definition: "Saving data on the device so it persists between app restarts. Like localStorage for mobile.",
                whatYoullLearn: [
                    "Installing and using AsyncStorage",
                    "Saving simple data (strings, numbers)",
                    "Saving complex data (objects as JSON)",
                    "Loading data on app start",
                    "Clearing data on logout"
                ],
                practice: "Save user preferences, Remember login status, Store app settings, Cache API data offline",
                codeExample: `import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
await AsyncStorage.setItem('username', 'John');

// Load data
const username = await AsyncStorage.getItem('username');

// Save object
await AsyncStorage.setItem('user', JSON.stringify({ name: 'John', age: 25 }));`,
                ignore: "Skip complex database solutions like Realm or SQLite, encrypted storage, and sync strategies.",
                references: [
                    { title: "Expo AsyncStorage", url: "https://docs.expo.dev/versions/latest/sdk/async-storage/" }
                ]
            },
            {
                name: "Deep Dive into Navigation",
                definition: "Advanced navigation patterns: tabs, drawers, passing parameters, nested navigators, and deep linking for opening specific screens from URLs.",
                whatYoullLearn: [
                    "Tab Navigator for bottom tabs",
                    "Drawer Navigator for side menu",
                    "Passing and accessing route parameters",
                    "Nested navigators (tabs inside stack)",
                    "Customizing navigation headers",
                    "Basic deep linking setup",
                    "Opening specific screens from URLs"
                ],
                practice: "Add bottom tabs to app, Create drawer menu, Build Instagram-like navigation, Pass complex data between screens, Setup deep link to open specific product screen",
                ignore: "Skip complex navigation state management, custom navigators, and advanced deep link prefixes.",
                references: [
                    { title: "React Navigation Docs", url: "https://reactnavigation.org/docs/getting-started/" },
                    { title: "Deep Linking Guide", url: "https://reactnavigation.org/docs/deep-linking/" }
                ]
            },
            {
                name: "Environment Variables & Configuration",
                definition: "Managing API keys, environment-specific settings, and sensitive data securely using environment variables.",
                whatYoullLearn: [
                    "Creating .env files for configuration",
                    "Using expo-constants for environment variables",
                    "Storing API keys securely",
                    "Different configs for dev/staging/production",
                    "Accessing environment variables in code"
                ],
                learningGuide: "Never hardcode API keys or sensitive data in your code. Environment variables let you store configuration outside your code, making it easier to manage different environments and keep secrets safe.",
                practice: "Create .env file with API key, Access API key in fetch calls, Setup different configs for dev and production, Store backend URL as environment variable",
                codeExample: `// Install: npx expo install expo-constants
// Create .env file:
// API_KEY=your_api_key_here
// API_URL=https://api.example.com

import Constants from 'expo-constants';

const API_KEY = Constants.expoConfig?.extra?.apiKey;
const API_URL = Constants.expoConfig?.extra?.apiUrl;

function fetchData() {
    fetch(\`\${API_URL}/data?key=\${API_KEY}\`)
        .then(res => res.json())
        .then(data => console.log(data));
}`,
                ignore: "Skip complex secret management systems, encrypted environment files, and CI/CD environment setups.",
                references: [
                    { title: "Expo Constants Docs", url: "https://docs.expo.dev/versions/latest/sdk/constants/" },
                    { title: "Environment Variables Guide", url: "https://docs.expo.dev/guides/environment-variables/" }
                ]
            },
            {
                name: "Expo APIs: Location, Camera, Notifications",
                definition: "Using device features like GPS, camera, and push notifications through Expo's easy APIs.",
                whatYoullLearn: [
                    "Get device GPS coordinates",
                    "Use camera to take photos/videos",
                    "Request permissions properly",
                    "Schedule local push notifications",
                    "Handle notification taps"
                ],
                practice: "Build location tracker, Create camera photo app, Make reminder app with notifications, Build QR code scanner",
                ignore: "Skip background location tracking, advanced camera features, and remote push notifications setup initially.",
                references: [
                    { title: "Expo Location", url: "https://docs.expo.dev/versions/latest/sdk/location/" },
                    { title: "Expo Camera", url: "https://docs.expo.dev/versions/latest/sdk/camera/" },
                    { title: "Expo Notifications", url: "https://docs.expo.dev/versions/latest/sdk/notifications/" }
                ]
            },
            {
                name: "Permissions Handling",
                definition: "Properly requesting and handling device permissions for camera, location, notifications, and other features with good UX.",
                whatYoullLearn: [
                    "Checking current permission status",
                    "Requesting permissions with explanations",
                    "Handling denied permissions gracefully",
                    "Different permission types (camera, location, media library)",
                    "Best practices for permission UX"
                ],
                learningGuide: "Users are protective of their privacy. Always check permission status first, explain why you need it, and handle rejections gracefully. Good permission UX builds trust.",
                practice: "Request camera permission before using camera, Ask for location with explanation, Handle denied location gracefully, Create permission flow for notifications",
                codeExample: `import * as Location from 'expo-location';
import * as Camera from 'expo-camera';

async function requestLocationPermission() {
    // Check current status
    const { status: existingStatus } = await Location.getForegroundPermissionsAsync();
    
    if (existingStatus !== 'granted') {
        // Request permission
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
            alert('Permission denied. Cannot access location.');
            return false;
        }
    }
    
    // Permission granted
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    return true;
}`,
                ignore: "Skip background permissions, advanced permission combinations, and system settings deep links initially.",
                references: [
                    { title: "Expo Permissions Guide", url: "https://docs.expo.dev/guides/permissions/" }
                ]
            },
            {
                name: "Basic Animations",
                definition: "Making your app feel smooth and polished with animations using Animated API or Lottie.",
                whatYoullLearn: [
                    "Using Animated.View for simple animations",
                    "Fade in/out animations",
                    "Slide and scale animations",
                    "Using Lottie for complex animations",
                    "Chaining multiple animations"
                ],
                practice: "Fade in components on load, Animate button press, Add loading spinner, Use Lottie success animation",
                ignore: "Skip Reanimated library initially, gesture-based animations, and complex animation sequences.",
                references: [
                    { title: "Animated API", url: "https://reactnative.dev/docs/animated" },
                    { title: "Expo Lottie", url: "https://docs.expo.dev/versions/latest/sdk/lottie/" }
                ]
            },
            {
                name: "Error Handling & App Debugging",
                definition: "Learning to debug issues, read error messages, and handle errors gracefully in your app.",
                whatYoullLearn: [
                    "Reading React Native error messages",
                    "Using console.log() for debugging",
                    "React Native Debugger tools",
                    "Try-catch for error handling",
                    "Showing user-friendly error messages"
                ],
                practice: "Debug API fetch errors, Add try-catch to async code, Create error boundary, Show retry button on errors",
                ignore: "Skip advanced debugging tools, performance profiling, and crash reporting services initially.",
                references: [
                    { title: "Expo Troubleshooting", url: "https://docs.expo.dev/troubleshooting/common-issues/" }
                ]
            }
        ]
    },
    {
        phase: "Phase 4: Advanced Skills",
        timeRecommendation: "60+ min/day | Weeks 13+",
        topics: [
            {
                name: "Third-Party UI Component Libraries",
                definition: "Using pre-built, polished UI component libraries to speed up development and maintain consistent design.",
                whatYoullLearn: [
                    "React Native Paper (Material Design)",
                    "React Native Elements (general purpose)",
                    "NativeBase (customizable components)",
                    "When to use UI libraries vs custom components",
                    "Customizing library themes"
                ],
                learningGuide: "Don't reinvent the wheel. UI libraries provide beautiful, accessible, tested components out of the box. They're perfect for MVPs and production apps alike.",
                practice: "Install React Native Paper, Build screen with Paper components, Use built-in Button, Card, TextInput, Compare different libraries for your needs",
                codeExample: `// React Native Paper Example
import { Button, Card, Title, Paragraph } from 'react-native-paper';

function ProductCard() {
    return (
        <Card>
            <Card.Cover source={{ uri: 'image.jpg' }} />
            <Card.Content>
                <Title>Product Name</Title>
                <Paragraph>Product description here</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Buy Now</Button>
            </Card.Actions>
        </Card>
    );
}`,
                ignore: "Skip building custom component libraries, complex theming systems, and comparing all available libraries.",
                references: [
                    { title: "React Native Paper", url: "https://callstack.github.io/react-native-paper/" },
                    { title: "React Native Elements", url: "https://reactnativeelements.com/" },
                    { title: "NativeBase", url: "https://nativebase.io/" }
                ]
            },
            {
                name: "Expo vs React Native CLI",
                definition: "Understanding the differences between Expo and bare React Native CLI, and when you might need to transition.",
                whatYoullLearn: [
                    "Expo advantages (easier setup, OTA updates, managed workflow)",
                    "React Native CLI advantages (full native access, smaller app size)",
                    "When to use each approach",
                    "How to eject from Expo if needed",
                    "Understanding the trade-offs"
                ],
                learningGuide: "Expo is perfect for most apps and learning. React Native CLI gives you full control but requires native development knowledge. Most apps never need to eject - Expo's managed workflow is powerful enough.",
                practice: "Understand your current project setup, Research Expo limitations for your use case, Learn when ejecting makes sense, Explore Expo modules in bare React Native",
                ignore: "Skip ejecting unless absolutely necessary, complex native module development, and brownfield app integration.",
                references: [
                    { title: "Expo vs React Native CLI", url: "https://docs.expo.dev/faq/#expo-vs-react-native" },
                    { title: "When to Use Expo", url: "https://docs.expo.dev/introduction/why-not-expo/" }
                ]
            },
            {
                name: "App Theming and Global Styles",
                definition: "Creating consistent look across your app with themes, including light/dark mode support.",
                whatYoullLearn: [
                    "Creating theme object with colors",
                    "Using Context API for theme",
                    "Implementing dark mode toggle",
                    "Using styled-components (optional)",
                    "Consistent spacing and typography"
                ],
                practice: "Create theme with primary/secondary colors, Add dark mode switch, Apply theme to all screens, Create reusable styled components",
                ignore: "Skip complex theme libraries, CSS-in-JS debate, and advanced style inheritance patterns.",
                references: [
                    { title: "React Context", url: "https://react.dev/learn" }
                ]
            },
            {
                name: "State Management (Redux, Context)",
                definition: "Managing complex app state that needs to be shared across many components.",
                whatYoullLearn: [
                    "When to use global state (vs local state)",
                    "Context API for simple global state",
                    "Redux basics (store, actions, reducers)",
                    "When Redux is overkill",
                    "Redux Toolkit for easier setup"
                ],
                practice: "Manage auth state globally, Share cart items across screens, Create global loading state, Build notification system",
                ignore: "Skip Redux Saga/Thunk initially, complex middleware, and advanced Redux patterns.",
                references: [
                    { title: "Redux Docs", url: "https://redux.js.org/" }
                ]
            },
            {
                name: "Authentication (Login/Signup)",
                definition: "Building complete authentication flow with login, registration, and protected routes.",
                whatYoullLearn: [
                    "Creating login/signup forms",
                    "Storing auth tokens securely",
                    "Protected routes (must be logged in)",
                    "Auto-login on app restart",
                    "Logout and token refresh"
                ],
                practice: "Build login screen, Implement registration, Add protected screens, Store token in AsyncStorage, Add logout button",
                ignore: "Skip OAuth initially, biometric authentication, and complex token refresh strategies.",
                references: [
                    { title: "React Native Auth Guide", url: "https://reactnative.dev/docs/getting-started" }
                ]
            },
            {
                name: "Advanced Networking",
                definition: "Improving API calls with caching, offline mode, and better error handling.",
                whatYoullLearn: [
                    "Caching API responses",
                    "Handling offline scenarios",
                    "Request interceptors",
                    "Retry failed requests",
                    "RESTful API best practices"
                ],
                practice: "Cache API data, Show cached data offline, Add retry mechanism, Implement request queue, Handle token expiry",
                ignore: "Skip GraphQL, WebSockets, and complex state sync strategies initially.",
                references: [
                    { title: "Network Docs", url: "https://reactnative.dev/docs/network" }
                ]
            },
            {
                name: "Performance Optimization",
                definition: "Making your app faster and more responsive by optimizing rendering and memory usage.",
                whatYoullLearn: [
                    "Profiling app performance",
                    "Optimizing FlatList rendering",
                    "Using React.memo for components",
                    "Optimizing images",
                    "Lazy loading components"
                ],
                practice: "Profile slow screens, Optimize large lists, Reduce bundle size, Fix memory leaks, Improve app startup time",
                ignore: "Skip native performance optimization, advanced profiling tools, and over-optimization initially.",
                references: [
                    { title: "React Native Performance Video", url: "https://www.youtube.com/watch?v=3pAkk5v8Szw" }
                ]
            },
            {
                name: "Testing (Unit & Component)",
                definition: "Writing tests to ensure your code works correctly and prevent bugs.",
                whatYoullLearn: [
                    "Jest for unit testing",
                    "React Native Testing Library",
                    "Testing components",
                    "Testing user interactions",
                    "Writing good test cases"
                ],
                practice: "Test utility functions, Test component rendering, Test button clicks, Test form submission, Add test coverage",
                ignore: "Skip E2E testing with Detox, advanced mocking, and 100% test coverage initially.",
                references: [
                    { title: "Testing Library", url: "https://testing-library.com/docs/react-native-testing-library/intro/" }
                ]
            },
            {
                name: "App Deployment",
                definition: "Building and submitting your app to App Store and Google Play Store.",
                whatYoullLearn: [
                    "Using Expo build service (EAS Build)",
                    "Creating app icons and splash screen",
                    "Generating release builds",
                    "App Store submission requirements",
                    "Google Play submission process"
                ],
                practice: "Create app icon, Generate splash screen, Build release APK, Submit to Google Play, Prepare App Store listing",
                ignore: "Skip custom native builds initially, continuous deployment, and complex release strategies.",
                references: [
                    { title: "Publishing with Expo", url: "https://docs.expo.dev/publish/introduction/" }
                ]
            }
        ]
    }
];
