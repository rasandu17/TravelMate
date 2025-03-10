# TravelMate 🌍✈️

TravelMate is an AI-powered travel planning assistant that creates personalized trip itineraries based on your preferences, budget, and travel style.

## Features

- **AI-Generated Itineraries**: Get custom travel plans tailored to your needs
- **Location Search**: Search for destinations worldwide using Google Places API
- **Budget Planning**: Specify your budget range for appropriate recommendations
- **Traveler Type Selection**: Customize plans based on who you're traveling with

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Places API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travelmate.git
   cd travelmate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Known Issues

### Google Places API Error

If you encounter the following error:
```
js?libraries=places&key=AIzaSyAG5f6sKJycQEIO3v3cXhBQN45Wx2yp24Q&callback=__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__:1041 
This API project is not authorized to use this API. Places API error: ApiNotActivatedMapError
```

This indicates that the Google Places API is not enabled for your Google API key. To fix this:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to "APIs & Services" > "Library"
4. Search for "Places API" and select it
5. Click "Enable" to activate the Places API for your project
6. Make sure billing is enabled for your Google Cloud project

Alternatively, you may need to check:
- If you've correctly set up the API key in your environment variables
- If there are any restrictions set on your API key (like domain restrictions)
- If your billing account is active and properly configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
