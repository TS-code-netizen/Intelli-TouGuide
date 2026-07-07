// Intelli-TourGuide - Main Application Logic

// Application State
let state = {
  currentItinerary: null,
  savedItineraries: [],
  activeTab: 'itineraryTab',
  activeDay: 1,
  theme: 'dark',
  audioState: {
    utterance: null,
    isPlaying: false,
    activeStoryId: null
  },
  baseCostEstimates: null, // Holds the current base costs for calculation
  currentCalculatedCosts: null // Holds the current slider-adjusted costs
};

// Available autocomplete destinations
const autocompleteList = [
  { name: "Tokyo", country: "Japan", key: "tokyo" },
  { name: "Paris", country: "France", key: "paris" },
  { name: "New York", country: "United States", key: "newyork" },
  { name: "Rome", country: "Italy", key: "rome" },
  { name: "Bali", country: "Indonesia", key: "bali" },
  { name: "London", country: "United Kingdom", key: "" },
  { name: "Sydney", country: "Australia", key: "" },
  { name: "Barcelona", country: "Spain", key: "" },
  { name: "Cairo", country: "Egypt", key: "" },
  { name: "Singapore", country: "Singapore", key: "" }
];

// SVG Donut Chart Constants
const DONUT_CIRCUMFERENCE = 2 * Math.PI * 70; // 439.82

// Initial Setup on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  loadSavedTrips();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('itinerary-theme');
  if (savedTheme) {
    state.theme = savedTheme;
  } else {
    state.theme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcons();
}

function updateThemeIcons() {
  const sunIcon = document.getElementById('themeSunIcon');
  const moonIcon = document.getElementById('themeMoonIcon');
  if (state.theme === 'light') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('itinerary-theme', state.theme);
  updateThemeIcons();
}

// Event Listeners Registration
function setupEventListeners() {
  // Theme Toggle
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Vibe Selection Pills
  const vibePills = document.querySelectorAll('.vibe-pill');
  vibePills.forEach(pill => {
    pill.addEventListener('click', () => {
      vibePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Dietary Selection Pills (Multi-select)
  const dietPills = document.querySelectorAll('.diet-pill');
  dietPills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
    });
  });

  // Autocomplete search listener
  const destInput = document.getElementById('destinationInput');
  const autoDropdown = document.getElementById('autocompleteDropdown');

  destInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      autoDropdown.style.display = 'none';
      return;
    }

    const matches = autocompleteList.filter(item => 
      item.name.toLowerCase().includes(val) || 
      item.country.toLowerCase().includes(val)
    );

    if (matches.length > 0) {
      autoDropdown.innerHTML = '';
      matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'autocomplete-suggestion';
        div.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span><strong>${match.name}</strong>, ${match.country}</span>
        `;
        div.addEventListener('click', () => {
          destInput.value = `${match.name}, ${match.country}`;
          autoDropdown.style.display = 'none';
        });
        autoDropdown.appendChild(div);
      });
      autoDropdown.style.display = 'block';
    } else {
      autoDropdown.style.display = 'none';
    }
  });

  // Close Autocomplete on clicking outside
  document.addEventListener('click', (e) => {
    if (e.target !== destInput && e.target !== autoDropdown) {
      autoDropdown.style.display = 'none';
    }
  });

  // Form Submit (Generate Button)
  document.getElementById('itineraryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    triggerGenerationFlow();
  });

  // Dashboard Edit Preferences / Back button
  document.getElementById('backToHomeBtn').addEventListener('click', () => {
    stopSpeaking();
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('landingView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Tab switching handler
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      switchTab(targetTabId);
    });
  });

  // Budget Adjuster Sliders
  document.getElementById('sliderLodging').addEventListener('input', () => updateBudgetCalculator(false));
  document.getElementById('sliderMeals').addEventListener('input', () => updateBudgetCalculator(false));
  document.getElementById('sliderTransport').addEventListener('input', () => updateBudgetCalculator(false));
  document.getElementById('sliderShopping').addEventListener('input', () => updateBudgetCalculator(false));

  // Save Trip Button
  document.getElementById('saveItineraryBtn').addEventListener('click', saveCurrentTrip);

  // Saved Trips dropdown change loader
  document.getElementById('savedTripsSelect').addEventListener('change', (e) => {
    const tripId = e.target.value;
    if (tripId) {
      loadTripFromStorage(tripId);
    }
  });
}

// Tab Switching
function switchTab(tabId) {
  stopSpeaking(); // Turn off audio if user navigates tabs
  
  // Set tab buttons active
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Set panels active
  const panels = document.querySelectorAll('.tab-content');
  panels.forEach(panel => {
    if (panel.id === tabId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  state.activeTab = tabId;
}

// AI Simulating Loading Sequence
function triggerGenerationFlow() {
  const destInput = document.getElementById('destinationInput').value.trim();
  const duration = parseInt(document.getElementById('durationInput').value);
  const budget = document.getElementById('budgetInput').value;
  
  const activeVibePill = document.querySelector('.vibe-pill.active');
  const vibe = activeVibePill ? activeVibePill.getAttribute('data-vibe') : 'culture';
  
  const activeDiets = [];
  document.querySelectorAll('.diet-pill.active').forEach(p => {
    activeDiets.push(p.getAttribute('data-diet'));
  });

  if (!destInput) return;

  // Show loading overlay
  const loader = document.getElementById('loadingScreen');
  loader.style.display = 'flex';

  // Animate loading items
  const steps = ['step1', 'step2', 'step3', 'step4'];
  steps.forEach(s => {
    const el = document.getElementById(s);
    el.classList.remove('active', 'done');
  });

  // Step 1
  document.getElementById('step1').classList.add('active');

  setTimeout(() => {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step1').classList.add('done');
    document.getElementById('step2').classList.add('active');
  }, 1000);

  setTimeout(() => {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step2').classList.add('done');
    document.getElementById('step3').classList.add('active');
  }, 2000);

  setTimeout(() => {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step3').classList.add('done');
    document.getElementById('step4').classList.add('active');
  }, 3000);

  setTimeout(() => {
    document.getElementById('step4').classList.remove('active');
    document.getElementById('step4').classList.add('done');
    
    // Complete generation logic
    generateItinerary(destInput, duration, budget, vibe, activeDiets);

    // Hide loader & display dashboard
    loader.style.display = 'none';
    document.getElementById('landingView').style.display = 'none';
    document.getElementById('dashboardView').style.display = 'block';
    
    // Reset to first tab
    switchTab('itineraryTab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 3800);
}

// Generate Itinerary Object (combining curated & procedural templates)
function generateItinerary(destinationText, duration, budget, vibe, diets) {
  // Check matching key in curated database
  const destClean = destinationText.split(',')[0].toLowerCase().trim();
  let baseData = curatedDestinations[destClean];
  let isCurated = true;

  if (!baseData) {
    isCurated = false;
    baseData = makeProceduralDestination(destinationText, vibe, budget);
  }

  // Combine details
  const finalItinerary = {
    id: 'trip_' + Date.now(),
    destination: baseData.name,
    tagline: baseData.tagline,
    duration: duration,
    vibe: vibe,
    budgetTier: budget,
    diets: diets,
    hotels: selectHotels(baseData.hotels, budget),
    foodSuggestions: filterFoodSuggestions(baseData.foodSuggestions, diets),
    transport: baseData.transport || fallbackTemplates.transport,
    costEstimates: baseData.costEstimates || fallbackTemplates.costEstimates,
    days: []
  };

  // Compile Itinerary Days (combining curated steps and fallbacks if user requests extra days)
  const itinerarySource = baseData.itineraries[vibe] || baseData.itineraries['culture'] || [];
  
  for (let i = 1; i <= duration; i++) {
    // Find matching day in source
    const matchDay = itinerarySource.find(d => d.day === i);
    if (matchDay && matchDay.activities.length > 0) {
      finalItinerary.days.push(matchDay);
    } else {
      // Procedurally generate this day
      finalItinerary.days.push(generateProceduralDay(i, finalItinerary.destination, vibe));
    }
  }

  state.currentItinerary = finalItinerary;

  // Initialize Base Cost Calculations
  initializeCosts(finalItinerary);

  // Render Dashboard Contents
  renderDashboard();
}

// Select suitable accommodation based on budget preference
function selectHotels(hotelList, budgetTier) {
  if (!hotelList || hotelList.length === 0) return [];
  // Return matching lodging level or sorted items
  return hotelList.filter(h => h.tier === budgetTier || h.tier === 'mid');
}

// Filter restaurants/dishes matching diet requirements
function filterFoodSuggestions(foodList, diets) {
  if (!foodList || foodList.length === 0) return [];
  if (diets.length === 0) return foodList;

  return foodList.map(food => {
    // Add match indicators
    let isMatch = false;
    diets.forEach(diet => {
      if (food.dietary.toLowerCase().includes(diet.toLowerCase())) {
        isMatch = true;
      }
    });
    return { ...food, matchesDiet: isMatch };
  });
}

// Construct fallbacks when destination is not in base database
function makeProceduralDestination(destinationText, vibe, budget) {
  const name = destinationText.split(',')[0];
  const capName = name.charAt(0).toUpperCase() + name.slice(1);
  
  // Custom procedural descriptions
  const taglines = {
    culture: `A historic city holding beautiful artistic heritage, scenic views, and local museums.`,
    food: `A global gastronomy destination known for organic food halls and unique street foods.`,
    adventure: `An exciting location filled with mountainous nature trails and urban views.`,
    relaxation: `A quiet sanctuary ideal for walking tours, scenic gardens, and thermal spas.`,
    family: `A highly engaging family-oriented place with interactive science museums and theme parks.`
  };

  const genericHotels = fallbackTemplates.hotels.map(h => ({
    ...h,
    location: `${capName} Central District`,
  }));

  const genericFood = fallbackTemplates.foodSuggestions.map(f => ({
    ...f,
    location: `${capName} Arts Quarter`,
  }));

  return {
    name: `${capName}, Explorer's Haven`,
    tagline: taglines[vibe] || `Explore the beautiful avenues, history, and culinary secrets of ${capName}.`,
    itineraries: {
      culture: []
    },
    hotels: genericHotels,
    foodSuggestions: genericFood,
    transport: fallbackTemplates.transport,
    costEstimates: fallbackTemplates.costEstimates
  };
}

// Generate procedurally formatted day using templates
function generateProceduralDay(dayNum, cityTitle, vibe) {
  const cityName = cityTitle.split(',')[0];
  const themes = {
    culture: ["Historic Foundations & Ancient Architecture", "Local Crafts & Masterful Sculptures", "Traditional Neighborhoods & Art Halls"],
    food: ["Local Bakery Secrets & Heritage Markets", "Café Cultures & Artisan Coffee Tastings", "Scenic Sunset Dining & Street Bites"],
    adventure: ["Summit Nature Hiking & Forest Viewpoints", "Canyon Trails & River Floating", "High Tower Skylines & Electric Arcades"],
    relaxation: ["Strolling Botanical Conservatories", "Spa Purification & Organic Tea Rituals", "Coastal Sunset Relaxing"],
    family: ["Interactive Science Labs & Game Arenas", "Zoo Gardens & Whimsical Playgrounds", "Modern Art Installations & Giant Robots"]
  };

  const vibeThemes = themes[vibe] || themes['culture'];
  const dayTheme = vibeThemes[(dayNum - 1) % vibeThemes.length];

  const activities = fallbackTemplates.activities.map((act, index) => {
    // Generate attraction names with local context
    const nameIndex = (dayNum + index) % fallbackTemplates.names.length;
    const descIndex = (dayNum * index) % fallbackTemplates.descriptions.length;
    const storyIndex = (dayNum + index) % fallbackTemplates.stories.length;

    const name = `${cityName} ${fallbackTemplates.names[nameIndex]}`;
    const desc = fallbackTemplates.descriptions[descIndex];
    const story = `Did you know? ${fallbackTemplates.stories[storyIndex]} This adds a rich layer of heritage to ${name}.`;

    return {
      time: act.time,
      title: name,
      description: desc,
      story: story,
      cost: Math.floor(Math.random() * 25) + 5,
      category: "attraction"
    };
  });

  return {
    day: dayNum,
    theme: dayTheme,
    activities: activities
  };
}

// Cost Initialization
function initializeCosts(itinerary) {
  const costs = itinerary.costEstimates;
  const days = itinerary.duration;
  const tier = itinerary.budgetTier;

  // Base costs mapped to lodging tier
  const lodgingUnit = costs.lodging[tier] || costs.lodging.mid;
  const mealUnit = costs.meals[tier] || costs.meals.mid;
  const transportUnit = costs.transport[tier] || costs.transport.mid;
  
  // Calculate base estimates
  state.baseCostEstimates = {
    lodging: lodgingUnit * days,
    meals: mealUnit * days,
    transport: transportUnit * days,
    attractions: (costs.attractions[tier] || costs.attractions.mid) * days,
    shopping: (costs.shopping[tier] || costs.shopping.mid) * days
  };

  // Reset sliders to 1.0
  document.getElementById('sliderLodging').value = 1.0;
  document.getElementById('sliderMeals').value = 1.0;
  document.getElementById('sliderTransport').value = 1.0;
  document.getElementById('sliderShopping').value = 1.0;

  updateBudgetCalculator(true);
}

// Calculate slider adjustments
function updateBudgetCalculator(isInitial = false) {
  if (!state.baseCostEstimates) return;

  const multLodging = parseFloat(document.getElementById('sliderLodging').value);
  const multMeals = parseFloat(document.getElementById('sliderMeals').value);
  const multTransport = parseFloat(document.getElementById('sliderTransport').value);
  const multShopping = parseFloat(document.getElementById('sliderShopping').value);

  const finalCosts = {
    lodging: Math.round(state.baseCostEstimates.lodging * multLodging),
    meals: Math.round(state.baseCostEstimates.meals * multMeals),
    transport: Math.round(state.baseCostEstimates.transport * multTransport),
    attractions: state.baseCostEstimates.attractions, // Attractions static per schedule
    shopping: Math.round(state.baseCostEstimates.shopping * multShopping)
  };

  state.currentCalculatedCosts = finalCosts;

  // Update slider label costs
  document.getElementById('lblLodging').textContent = formatCurrency(finalCosts.lodging);
  document.getElementById('lblMeals').textContent = formatCurrency(finalCosts.meals);
  document.getElementById('lblTransport').textContent = formatCurrency(finalCosts.transport);
  document.getElementById('lblShopping').textContent = formatCurrency(finalCosts.shopping);

  const total = finalCosts.lodging + finalCosts.meals + finalCosts.transport + finalCosts.attractions + finalCosts.shopping;
  
  // Render total budgets on view
  document.getElementById('lblTotalCalculated').textContent = formatCurrency(total);
  document.getElementById('donutTotalVal').textContent = formatCurrency(total);
  document.getElementById('summaryCost').textContent = formatCurrency(total);

  // Redraw Donut Chart SVG
  drawDonutChart(finalCosts, total);
}

// Format currency depending on values (keep it generic or standard $)
function formatCurrency(amount) {
  // If it looks like IDR or JPY (large numbers), format appropriately, otherwise standard $
  if (amount > 10000) {
    return '¥' + amount.toLocaleString();
  } else if (amount > 1000) {
    return '$' + amount.toLocaleString();
  } else {
    return '$' + amount;
  }
}

// REDRAW SVG DONUT CHART
function drawDonutChart(costs, total) {
  const segments = [
    { el: document.getElementById('segLodging'), amount: costs.lodging },
    { el: document.getElementById('segMeals'), amount: costs.meals },
    { el: document.getElementById('segTransport'), amount: costs.transport },
    { el: document.getElementById('segAttractions'), amount: costs.attractions },
    { el: document.getElementById('segShopping'), amount: costs.shopping }
  ];

  let accumulatedPercent = 0;

  segments.forEach(seg => {
    if (!seg.el) return;

    if (total === 0) {
      seg.el.style.strokeDasharray = `0 ${DONUT_CIRCUMFERENCE}`;
      return;
    }

    const percentage = seg.amount / total;
    const strokeDash = percentage * DONUT_CIRCUMFERENCE;
    const strokeOffset = DONUT_CIRCUMFERENCE - strokeDash;
    
    // Set values
    seg.el.style.strokeDasharray = `${strokeDash} ${DONUT_CIRCUMFERENCE}`;
    
    // Rotate offset to place sectors sequentially
    const offsetRotation = - (accumulatedPercent * DONUT_CIRCUMFERENCE);
    seg.el.style.strokeDashoffset = offsetRotation;

    accumulatedPercent += percentage;
  });
}

// Render Dashboard View components
function renderDashboard() {
  const trip = state.currentItinerary;
  if (!trip) return;

  // Header meta summary
  document.getElementById('summaryDestName').textContent = trip.destination;
  document.getElementById('summaryTagline').textContent = trip.tagline;
  document.getElementById('summaryDuration').textContent = `${trip.duration} Day${trip.duration > 1 ? 's' : ''}`;
  document.getElementById('summaryVibe').textContent = trip.vibe;

  // Render Daily Timeline Days Selector
  const daySelect = document.getElementById('daySelectorContainer');
  const daySchedules = document.getElementById('daysSchedulesContainer');
  
  daySelect.innerHTML = '';
  daySchedules.innerHTML = '';

  trip.days.forEach((day, index) => {
    const isFirst = index === 0;
    
    // Create Day selector button
    const btn = document.createElement('button');
    btn.className = `day-btn ${isFirst ? 'active' : ''}`;
    btn.textContent = `Day ${day.day}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.day-schedule-wrapper').forEach(w => w.classList.remove('active'));
      document.getElementById(`dayWrapper_${day.day}`).classList.add('active');
      state.activeDay = day.day;
      stopSpeaking(); // stop speaking when swapping days
    });
    daySelect.appendChild(btn);

    // Create Day Timeline activities wrap
    const wrapper = document.createElement('div');
    wrapper.id = `dayWrapper_${day.day}`;
    wrapper.className = `day-schedule-wrapper ${isFirst ? 'active' : ''}`;

    const themeHeader = document.createElement('h4');
    themeHeader.style.marginBottom = '1.5rem';
    themeHeader.style.fontSize = '1.1rem';
    themeHeader.style.color = 'var(--secondary)';
    themeHeader.textContent = `Theme: ${day.theme}`;
    wrapper.appendChild(themeHeader);

    if (day.activities.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.style.color = 'var(--text-muted)';
      emptyMsg.textContent = 'Relaxation day - explore the city sights at your own leisure.';
      wrapper.appendChild(emptyMsg);
    } else {
      const timelineDiv = document.createElement('div');
      timelineDiv.className = 'timeline';

      day.activities.forEach((act, actIdx) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        // Cost tag
        const costTag = act.cost > 0 ? `<span class="activity-cost-badge">Approx: ${formatCurrency(act.cost)}</span>` : '<span class="activity-cost-badge">Free</span>';

        item.innerHTML = `
          <div class="timeline-node"></div>
          <div class="glass-panel timeline-card">
            <div class="timeline-header">
              <span class="time-tag">${act.time}</span>
              ${costTag}
            </div>
            <h4 style="font-size: 1.15rem; color: var(--text-primary);">${act.title}</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">${act.description}</p>
          </div>
        `;
        timelineDiv.appendChild(item);
      });
      wrapper.appendChild(timelineDiv);
    }
    daySchedules.appendChild(wrapper);
  });

  // Render Storyteller / Attractions Tab
  const attractionsGrid = document.getElementById('attractionsGridContainer');
  attractionsGrid.innerHTML = '';
  
  let hasStories = false;
  trip.days.forEach(day => {
    day.activities.forEach((act, actIndex) => {
      if (act.story) {
        hasStories = true;
        const card = document.createElement('div');
        card.className = 'glass-panel attraction-card';
        
        const storyId = `story_${day.day}_${actIndex}`;

        card.innerHTML = `
          <div class="attraction-img-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 9h11.25a4.5 4.5 0 0 0 4.5-9M2.25 15A2.25 2.25 0 0 1 4.5 12.75h15A2.25 2.25 0 0 1 21.75 15M2.25 15v-1.875c0-.621.504-1.125 1.125-1.125H16.5M3 3h18M3 6h18M3 9h18" />
            </svg>
            <span class="attraction-tag">Day ${day.day} Stop</span>
          </div>
          
          <div class="attraction-info">
            <h3 style="font-size: 1.2rem;">${act.title}</h3>
            
            <div class="story-box" id="text_${storyId}">
              ${act.story}
            </div>

            <!-- Audio Guide Simulator -->
            <div class="audio-player-panel" id="player_${storyId}">
              <button class="audio-btn" onclick="toggleAudioGuide('${storyId}')" aria-label="Play Audio Story">
                <svg id="playIcon_${storyId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                <svg id="pauseIcon_${storyId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </button>
              
              <div class="sound-waves" id="waves_${storyId}">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; tracking: 0.05em;">Audio Guide</span>
            </div>
          </div>
        `;
        attractionsGrid.appendChild(card);
      }
    });
  });

  if (!hasStories) {
    attractionsGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No specific storytelling landmarks generated for this configuration.</p>';
  }

  // Render Accommodations Tab
  const hotelsGrid = document.getElementById('hotelsGridContainer');
  hotelsGrid.innerHTML = '';
  
  if (trip.hotels.length === 0) {
    hotelsGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No accommodations suggestions fit your current selection parameters.</p>';
  } else {
    trip.hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.className = 'glass-panel hotel-card';

      const facilitiesList = hotel.facilities.map(f => `<span class="card-badge badge-blue">${f}</span>`).join('');

      card.innerHTML = `
        <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            <h3 style="font-size: 1.2rem;">${hotel.name}</h3>
            <span class="card-badge badge-gold">★ ${hotel.rating}</span>
          </div>
          
          <p style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${hotel.location}
          </p>
          
          <p style="font-size: 0.95rem; color: var(--text-secondary);">${hotel.description}</p>
          
          <div class="card-badge-container">
            ${facilitiesList}
          </div>
        </div>
        
        <div class="card-price-row" style="padding: 1rem 1.5rem;">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Average Price</span>
            <div class="price-value">${formatCurrency(hotel.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/ night</span></div>
          </div>
          <button class="btn-primary" style="width: auto; padding: 0.5rem 1rem; font-size: 0.85rem; margin: 0;">Book Room</button>
        </div>
      `;
      hotelsGrid.appendChild(card);
    });
  }

  // Render Food Suggestions Tab
  const dishesGrid = document.getElementById('dishesGridContainer');
  dishesGrid.innerHTML = '';
  
  const restaurantsGrid = document.getElementById('restaurantsGridContainer');
  restaurantsGrid.innerHTML = '';

  // Standard local foods (Tokyo/Paris specific if curated, generic fallback otherwise)
  const defaultDishes = {
    tokyo: [
      { name: "Edomae Sushi", desc: "Fresh raw fish served over vinegared rice. Traditional style focuses on soy-marinated tuna and sea eel." },
      { name: "Tonkotsu Ramen", desc: "Wheat noodles served in a thick, rich pork bone broth cooked over days to dissolve marrow." },
      { name: "Tempura", desc: "Light, crispy seafood and seasonal vegetables coated in dynamic batter and deep fried." }
    ],
    paris: [
      { name: "Coq au Vin", desc: "Chicken slowly braised in red Burgundy wine, lardons, mushrooms, and fresh herbs." },
      { name: "Croissant au Beurre", desc: "Flaky, crescent-shaped puff pastry containing layers of premium French butter." },
      { name: "Crème Brûlée", desc: "Rich custard dessert topped with a layer of hardened caramelized sugar shell." }
    ]
  };

  const currentDestClean = trip.destination.split(',')[0].toLowerCase().trim();
  const destDishes = defaultDishes[currentDestClean] || [
    { name: "Traditional Regional Platter", desc: "The staple local meal, featuring fresh seasonal ingredients prepared according to historical heritage styles." },
    { name: "Artisanal Dessert Pastry", desc: "Sweet dessert baked daily by local confectioners, capturing traditional local spices." }
  ];

  destDishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'glass-panel food-card';
    card.style.padding = '1.25rem';
    card.innerHTML = `
      <h4 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.5rem;">${dish.name}</h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary);">${dish.desc}</p>
    `;
    dishesGrid.appendChild(card);
  });

  // Restaurants
  if (trip.foodSuggestions.length === 0) {
    restaurantsGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No specific dining suggestions generated.</p>';
  } else {
    trip.foodSuggestions.forEach(rest => {
      const card = document.createElement('div');
      card.className = 'glass-panel food-card';

      const matchBadge = rest.matchesDiet ? `<span class="card-badge badge-green">✔ Diet Match</span>` : '';

      card.innerHTML = `
        <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            <h3 style="font-size: 1.2rem;">${rest.name}</h3>
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--success);">${rest.price}</span>
          </div>

          <p style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${rest.location}
          </p>

          <p style="font-size: 0.95rem; color: var(--text-secondary);">${rest.description}</p>
          
          <div style="margin-top: 0.5rem;">
            <strong style="font-size: 0.85rem; color: var(--text-primary);">Signature:</strong>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${rest.dish}</span>
          </div>

          <div class="card-badge-container">
            <span class="card-badge badge-blue">${rest.dietary}</span>
            ${matchBadge}
          </div>
        </div>
      `;
      restaurantsGrid.appendChild(card);
    });
  }

  // Render Transport comparisons
  const transportTable = document.getElementById('transportTableBody');
  transportTable.innerHTML = '';
  
  trip.transport.forEach(mode => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
        ${mode.name}
      </td>
      <td>${mode.cost}</td>
      <td>${mode.speed}</td>
      <td><span class="card-badge ${mode.convenience === 'Excellent' || mode.convenience === 'High' ? 'badge-green' : 'badge-blue'}">${mode.convenience}</span></td>
      <td style="font-size: 0.9rem; color: var(--text-secondary);">${mode.tip}</td>
    `;
    transportTable.appendChild(row);
  });

  const adviceCard = document.getElementById('localTransportAdviceCard');
  adviceCard.innerHTML = `
    <h4 style="margin-bottom: 0.75rem; color: var(--secondary);">Local Navigation Strategy</h4>
    <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
      When navigating ${trip.destination}, planning transit in advance is key. 
      For short distances, walking offers excellent neighborhood discovery. 
      Always secure regional transit passes upon arrival at primary hubs (train station or airport terminal) to streamline fare connections.
    </p>
  `;
}

// Web Speech API Audio Guide Simulator
function toggleAudioGuide(storyId) {
  const storyText = document.getElementById(`text_${storyId}`).textContent.trim();
  const player = document.getElementById(`player_${storyId}`);
  const playIcon = document.getElementById(`playIcon_${storyId}`);
  const pauseIcon = document.getElementById(`pauseIcon_${storyId}`);
  const waves = document.getElementById(`waves_${storyId}`);

  // Check if speech synthesis is speaking this specific story
  if (state.audioState.isPlaying && state.audioState.activeStoryId === storyId) {
    // PAUSE
    stopSpeaking();
    return;
  }

  // If speaking another story, stop it first
  if (state.audioState.isPlaying) {
    stopSpeaking();
  }

  // Start new speech
  if ('speechSynthesis' in window) {
    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(storyText);
    utterance.rate = 0.95; // slightly slower for premium tour guide pacing
    
    // Attempt to pick a high quality English voice (preferably British or nice local if available)
    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'));
    if (premiumVoice) {
      utterance.voice = premiumVoice;
    }

    utterance.onend = () => {
      resetAudioState(storyId);
    };

    utterance.onerror = () => {
      resetAudioState(storyId);
      showToast("Speech synthesis encountered an error.", true);
    };

    state.audioState.utterance = utterance;
    state.audioState.isPlaying = true;
    state.audioState.activeStoryId = storyId;

    window.speechSynthesis.speak(utterance);
    
    // Update visual states
    player.classList.add('playing');
    waves.classList.add('playing');
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    // Mock simulation if browser doesn't support Web Speech API
    showToast("Speech API not supported. Simulating guide audio...");
    
    state.audioState.isPlaying = true;
    state.audioState.activeStoryId = storyId;
    player.classList.add('playing');
    waves.classList.add('playing');
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';

    // Mock timeout to simulate speaking duration
    state.audioState.mockTimer = setTimeout(() => {
      resetAudioState(storyId);
    }, 8000);
  }
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (state.audioState.mockTimer) {
    clearTimeout(state.audioState.mockTimer);
  }
  if (state.audioState.activeStoryId) {
    resetAudioState(state.audioState.activeStoryId);
  }
}

function resetAudioState(storyId) {
  const player = document.getElementById(`player_${storyId}`);
  const playIcon = document.getElementById(`playIcon_${storyId}`);
  const pauseIcon = document.getElementById(`pauseIcon_${storyId}`);
  const waves = document.getElementById(`waves_${storyId}`);

  if (player) player.classList.remove('playing');
  if (waves) waves.classList.remove('playing');
  if (playIcon) playIcon.style.display = 'block';
  if (pauseIcon) pauseIcon.style.display = 'none';

  state.audioState.isPlaying = false;
  state.audioState.activeStoryId = null;
  state.audioState.utterance = null;
}

// Local Storage Saved Trips Manager
function saveCurrentTrip() {
  const trip = state.currentItinerary;
  if (!trip) return;

  // Include calculated final costs inside saved trip metadata
  trip.customCosts = state.currentCalculatedCosts;
  
  // Save sliders levels as well
  trip.sliderLevels = {
    lodging: parseFloat(document.getElementById('sliderLodging').value),
    meals: parseFloat(document.getElementById('sliderMeals').value),
    transport: parseFloat(document.getElementById('sliderTransport').value),
    shopping: parseFloat(document.getElementById('sliderShopping').value)
  };

  // Add to state list
  const idx = state.savedItineraries.findIndex(t => t.destination === trip.destination && t.duration === trip.duration && t.vibe === trip.vibe);
  if (idx > -1) {
    state.savedItineraries[idx] = trip;
  } else {
    state.savedItineraries.push(trip);
  }

  localStorage.setItem('saved-itineraries', JSON.stringify(state.savedItineraries));
  
  loadSavedTrips();
  showToast("Itinerary saved successfully!");
}

function loadSavedTrips() {
  const raw = localStorage.getItem('saved-itineraries');
  if (raw) {
    try {
      state.savedItineraries = JSON.parse(raw);
    } catch (e) {
      state.savedItineraries = [];
    }
  }

  const dropdownContainer = document.getElementById('savedTripsDropdown');
  const selectEl = document.getElementById('savedTripsSelect');

  if (state.savedItineraries.length > 0) {
    dropdownContainer.style.display = 'block';
    
    // Save existing value if any
    const prevVal = selectEl.value;
    selectEl.innerHTML = '<option value="">-- Saved Trips --</option>';
    
    state.savedItineraries.forEach(trip => {
      const opt = document.createElement('option');
      opt.value = trip.id;
      opt.textContent = `${trip.destination} (${trip.duration}d - ${trip.vibe})`;
      selectEl.appendChild(opt);
    });

    selectEl.value = prevVal;
  } else {
    dropdownContainer.style.display = 'none';
  }
}

function loadTripFromStorage(tripId) {
  const trip = state.savedItineraries.find(t => t.id === tripId);
  if (!trip) return;

  stopSpeaking();
  state.currentItinerary = trip;
  
  // Setup view fields
  document.getElementById('landingView').style.display = 'none';
  document.getElementById('dashboardView').style.display = 'block';

  renderDashboard();

  // Load custom costs and restore slider values
  if (trip.customCosts && trip.sliderLevels) {
    // Restore base costs mapping
    initializeCosts(trip);
    
    // Set restored sliders
    document.getElementById('sliderLodging').value = trip.sliderLevels.lodging;
    document.getElementById('sliderMeals').value = trip.sliderLevels.meals;
    document.getElementById('sliderTransport').value = trip.sliderLevels.transport;
    document.getElementById('sliderShopping').value = trip.sliderLevels.shopping;

    updateBudgetCalculator(false);
  } else {
    initializeCosts(trip);
  }

  switchTab('itineraryTab');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toast notification helper
function showToast(message, isError = false) {
  const toast = document.getElementById('successToast');
  const msgEl = document.getElementById('toastMessage');
  
  msgEl.textContent = message;
  
  if (isError) {
    toast.classList.add('error');
    toast.querySelector('.toast-icon').classList.remove('success');
    toast.querySelector('.toast-icon').classList.add('error');
  } else {
    toast.classList.remove('error');
    toast.querySelector('.toast-icon').classList.remove('error');
    toast.querySelector('.toast-icon').classList.add('success');
  }

  toast.style.display = 'flex';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}
