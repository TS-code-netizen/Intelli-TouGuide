# Implementation Plan - Intelli-TourGuide Web Application

Create a premium, interactive, and visually stunning client-side web application for **Intelli-TourGuide**. It will feature an AI-style travel planner, audio guide simulator, accommodation/food suggestions, transport comparison, and interactive cost calculation.

## User Review Required

> [!IMPORTANT]
> The application will run entirely client-side. To make it feel like a real AI generator without requiring server API keys, we will implement:
> 1. A rich, hand-curated dataset for top world destinations (**Tokyo, Paris, New York, Rome, Bali**) detailing itinerary days, authentic local stories, hotels, restaurants, and transport tips.
> 2. A dynamic **Procedural Generator Engine** that generates customized plans for *any* other city entered by the user based on travel vibe, duration, and budget.
> 3. Integration of the **Web Speech API** to power the "Attraction Audio Guide Storytelling" feature, allowing the browser to read descriptions aloud in a natural voice.

## Proposed Changes

### Core Web Assets

We will create a lightweight, high-performance vanilla frontend.

---

#### [NEW] [index.html](file:///d:/project/AI/Gravity/Intelli-TourGuide/index.html)
- Main structure with responsive panels.
- **Landing Screen**: Centered form with glassmorphic cards, destination autocomplete, budget selectors ($ / $$ / $$$), vibes (Culture, Food, Adventure, Relax, Family), and dietary filters.
- **Loading Overlay**: Custom animations simulating AI model reasoning steps.
- **Dashboard View**:
  - **Header**: Branding, Saved Itineraries manager, and Light/Dark mode toggle.
  - **Tabs**: Itinerary Timeline, Stories & Audio Guide, Accommodations, Foodie Guide, Transport comparison, and interactive Budget Calculator.
- Footer with app details.

#### [NEW] [styles.css](file:///d:/project/AI/Gravity/Intelli-TourGuide/styles.css)
- Premium UI styling:
  - Deep dark mode default with a vibrant accent gradient (`#8B5CF6` to `#EC4899`).
  - Light mode support using custom CSS properties (variables).
  - Glassmorphic card styles (`backdrop-filter: blur(12px)`).
  - Smooth transitions for tab changes and hover states.
  - Custom timeline timeline track and badge styling.
  - Animated sound waves for the audio player mockup.

#### [NEW] [data.js](file:///d:/project/AI/Gravity/Intelli-TourGuide/data.js)
- Travel database for curated cities:
  - **Tokyo, Paris, New York, Rome, Bali**.
  - Includes specific storytelling facts, hotel pricing tiers, signature dishes, transport pricing, and local tips.
- Fallback dataset templates for procedural generation of other destinations.

#### [NEW] [app.js](file:///d:/project/AI/Gravity/Intelli-TourGuide/app.js)
- State management: `currentItinerary`, `savedItineraries`, `theme`.
- Form validation and autocomplete listener.
- Loading simulation controller (sequential updates: "Analyzing transit...", "Generating budget...").
- Tab controller to swap content instantly.
- **Audio Guide Engine**: Web Speech API wrapper with play/pause, progress bar update, and visual sound waves toggle.
- **Budget Simulator**: Interactive expense breakdowns, SVG dynamic pie/donut chart, and cost customization slider.
- **Local Storage Manager**: Save itineraries, show list of saved trips.

## Verification Plan

### Automated Tests
As this is a pure frontend project, we will verify using manual visual inspection and console logs.
- Verify browser SpeechSynthesis compatibility.
- Ensure CSS properties adapt smoothly across viewports (mobile, tablet, desktop).

### Manual Verification
1. Open the application in the browser.
2. Select "Tokyo", "Mid-range", "Foodie Tour", 3 Days, and click "Generate".
3. Check loading sequence and wait for dashboard.
4. Test "Play Audio Guide" on an attraction to hear speech output and observe visualizer.
5. Click on the "Accommodations" and "Food" tabs to verify matches against filters.
6. Go to the "Budget" tab, slide the budget multiplier, and observe the cost values and SVG chart update.
7. Save the itinerary, reload the page, and check if it can be retrieved from "Saved Trips".
8. Test dark/light mode toggle.
