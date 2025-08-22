# Expo Essentials Boilerplate

A modern, production-ready Expo boilerplate for building local-first applications with minimal configuration. Skip the setup phase and jump straight into building your app with pre-configured essential packages and components.

## ✨ Features

- **Local-First Architecture** - Built with offline-first principles using MMKV for local storage
- **Modern State Management** - Legend State with persistent storage
- **Type-Safe Styling** - Unistyles for responsive, theme-aware styling
- **Pre-built Components** - Essential UI components ready to use
- **API Setup** - Axios configuration for network requests
- **Theme Support** - Light/dark theme toggle functionality
- **Expo Router** - File-based routing with TypeScript support

## ⚠️ Development Environment Requirements

**This project requires a prebuild and cannot run in Expo Go** due to the use of native dependencies:

- **react-native-mmkv** - Requires native code compilation
- **react-native-unistyles** - Requires native code compilation

For detailed information about prebuild and Continuous Native Generation (CNG), see the [Expo Prebuild documentation](https://docs.expo.dev/workflow/continuous-native-generation/).

## 📦 Pre-installed Packages

### Core Dependencies

- **@legendapp/state** - Modern, fast state management library
- **react-native-mmkv** - High-performance key-value storage for local data
- **lucide-react-native** - Beautiful, customizable icons
- **react-native-svg** - SVG support for React Native
- **axios** - HTTP client for API requests
- **react-native-unistyles** - Type-safe styling solution
- **react-native-nitro-modules** - Performance optimization modules
- **react-native-edge-to-edge** - Edge-to-edge display support

### Optional Dependencies

- **uuid** - Generate unique identifiers (commonly used in local-first apps)
- **react-native-get-random-values** - Required polyfill for UUID generation in Expo

> **Note**: The UUID packages are optional and can be removed if you don't need them. They're included because they're commonly used in local-first applications.

## 🧩 Pre-built Components

### Text Component

Customizable text component with consistent typography and theme support.

### Container Component

Flexible container component for consistent spacing and layout.

### HapticTouchableOpacity Component

Touchable opacity with haptic feedback for better user experience.

### Button Component

Reusable button component with multiple variants and states.

## 🛠️ Utilities

- **API Setup** - Pre-configured Axios instance with interceptors
- **Helper Functions** - Common utility functions for app development
- **Type Definitions** - TypeScript interfaces and types

## 🗄️ State Management

The boilerplate includes a complete state management setup using Legend State with MMKV for persistent local storage. Features include:

- App state management
- Theme toggle functionality (light/dark)
- Persistent data storage
- Type-safe state updates

## 🎨 Styling with Unistyles

The project uses Unistyles for type-safe, responsive styling. The setup includes:

- Theme-aware styling
- Responsive breakpoints
- Type-safe style definitions
- Dynamic theme switching

## ⚠️ Important Configuration Notes

### Entry Point Configuration

This boilerplate requires a custom entry point configuration. The `package.json` has been modified to use:

```json
{
  "main": "src/index.ts"
}
```

Instead of the default Expo Router entry point. This is necessary for proper Unistyles integration with Expo Router.

### Unistyles Setup

The `src/index.ts` file imports both Expo Router and Unistyles to ensure proper initialization order.

## 📁 Project Structure

```
src/
├── app/                 # Expo Router screens and layouts
├── components/          # Reusable UI components
├── constants/           # Colors, typography, and other constants
├── hooks/              # Custom React hooks
├── store/              # State management and storage
├── utils/              # Utility functions and API setup
└── unistyles.ts        # Unistyles configuration
```

## 🔧 Customization

### Adding New Components

Place new components in the `src/components/` directory and follow the existing component patterns.

### Modifying the Theme

Update theme colors and styles in `src/constants/colors.ts` and `src/unistyles.ts`.

### State Management

Add new state slices in `src/store/` following the Legend State patterns.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Legend State](https://legendapp.com/open-source/legend-state/) for state management
- [Unistyles](https://www.unistyl.es/) for type-safe styling
- [MMKV](https://github.com/mrousavy/react-native-mmkv) for high-performance storage

---

**Happy coding! 🚀**
