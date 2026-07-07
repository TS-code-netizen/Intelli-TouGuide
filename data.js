// Destination Database for Intelli-TourGuide
const curatedDestinations = {
  tokyo: {
    name: "Tokyo, Japan",
    tagline: "Where ancient traditions meet neon-lit futuristic technology.",
    coords: { lat: 35.6762, lng: 139.6503 },
    vibes: {
      culture: "Explore historic temples, serene shrines, and traditional tea ceremonies.",
      food: "Savor world-class sushi, sizzling ramen, street-food stalls, and themed cafés.",
      adventure: "Explore bustling urban alleys, futuristic arcade centers, and neon skyline views.",
      relaxation: "Stroll in peaceful Japanese gardens and visit relaxing public bathhouses.",
      family: "Enjoy anime shops, tech parks, themed museums, and kid-friendly attractions."
    },
    itineraries: {
      culture: [
        {
          day: 1,
          theme: "Historic Roots & Shinto Serenity",
          activities: [
            {
              time: "09:00 AM",
              title: "Senso-ji Temple & Nakamise-dori",
              description: "Explore Tokyo's oldest and most sacred Buddhist temple. Walk through Nakamise Shopping Street for traditional snacks.",
              story: "Senso-ji was founded in 645 AD, making it older than Tokyo itself. Legend says two fishermen scooped a golden statue of Kannon, the goddess of mercy, out of the Sumida River. Despite returning it to the river repeatedly, it always came back. Thus, the temple was built to honor her.",
              cost: 0,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Meiji Jingu Shrine & Yoyogi Park",
              description: "Walk through the massive wooden Torii gate into a dense forest sanctuary in the heart of Tokyo.",
              story: "The Meiji Shrine is dedicated to the deified spirits of Emperor Meiji and his consort, Empress Shoken. Over 100,000 trees from all over Japan were donated and planted by volunteers to create this sacred forest, which acts as a spiritual sound barrier against the noisy city.",
              cost: 0,
              category: "attraction"
            },
            {
              time: "06:00 PM",
              title: "Traditional Kabuki Performance in Ginza",
              description: "Watch stylized traditional Japanese drama at the Kabukiza Theater, appreciating the elaborate makeup and historic staging.",
              story: "Kabuki originated in the early 17th century when a female dancer named Izumo no Okuni began performing stylized dance-dramas in Kyoto. Today, it is performed exclusively by male actors who spend their entire lives mastering specific stock characters and vocal styles.",
              cost: 3000,
              category: "attraction"
            }
          ]
        },
        {
          day: 2,
          theme: "Imperial Gardens & Tea Rituals",
          activities: [
            {
              time: "09:30 AM",
              title: "Imperial Palace East Gardens",
              description: "Walk along the historic moats, defense walls, and foundations of the former Edo Castle.",
              story: "During the height of the 1980s Japanese asset price bubble, the land value of the Tokyo Imperial Palace grounds was estimated to be worth more than the value of all the real estate in the entire state of California!",
              cost: 0,
              category: "attraction"
            },
            {
              time: "01:30 PM",
              title: "Traditional Matcha Ceremony at Hamarikyu Gardens",
              description: "Enjoy powdered green tea and traditional wagashi sweets in a wooden tea house perched over a tidal pond.",
              story: "Hamarikyu Gardens served as a private duck-hunting ground for the Tokugawa Shoguns in the Edo period. The ponds are filled with seawater from Tokyo Bay, and lock gates adjust the water levels according to the rise and fall of the ocean tides.",
              cost: 800,
              category: "food"
            },
            {
              time: "05:00 PM",
              title: "Edo-Tokyo Museum Exploration",
              description: "Step into life-sized replicas of historic bridges, kabuki theaters, and homes from Tokyo's Edo era.",
              story: "Edo (old Tokyo) was one of the most populous and flammable cities in the pre-modern world. Its citizens were famous for rebuilding after frequent fires, which they philosophically called the 'Flowers of Edo'.",
              cost: 600,
              category: "attraction"
            }
          ]
        },
        {
          day: 3,
          theme: "Traditional Crafts & Tokyo Bay Views",
          activities: [
            {
              time: "10:00 AM",
              title: "Asakusa Craft Workshops",
              description: "Learn the art of folding complex origami, or try woodblock printing with local artisans.",
              story: "Traditional Japanese crafts emphasis the philosophy of 'Monozukuri'—the meticulous craftsmanship, dedication, and spiritual intent behind making objects by hand, passed down through generations.",
              cost: 2000,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Sumida River Cruise to Odaiba",
              description: "Board a futuristic water bus and cruise under historic bridges out into the scenic Tokyo Bay.",
              story: "The Sumida River has been the cultural and trade artery of Tokyo for centuries. In the 18th century, it was the focal point of summer fireworks festivals designed to comfort the spirits of those who died during epidemics.",
              cost: 1500,
              category: "transport"
            },
            {
              time: "07:00 PM",
              title: "Sunset dinner at Omoide Yokocho",
              description: "Dine on charcoal-grilled skewers in a narrow, atmospheric alley that preserves post-war Tokyo charm.",
              story: "Omoide Yokocho translates directly to 'Memory Lane', but locals affectionately call it 'Piss Alley'. It arose as an informal black market hub after WWII, where simple charcoal grills were set up in ruins to sell cheap, protein-rich offal to hungry workers.",
              cost: 2500,
              category: "food"
            }
          ]
        }
      ],
      food: [
        {
          day: 1,
          theme: "Michelin Street Feasts & Sushi Artistry",
          activities: [
            {
              time: "08:00 AM",
              title: "Tsukiji Outer Market Tasting Tour",
              description: "Sample fresh tamagoyaki (sweet omelet), fresh oysters, grilled wagyu, and strawberry daifuku.",
              story: "Tsukiji was the world's largest wholesale fish market for decades. While the wholesale auctions moved to Toyosu, Tsukiji's outer market remains a bustling maze of multi-generational food stands serving spectacular fresh seafood.",
              cost: 2500,
              category: "food"
            },
            {
              time: "01:00 PM",
              title: "Ramen Street at Tokyo Station",
              description: "Slurp a rich, hot bowl of Tsukemen (dipping noodles) or Tonkotsu ramen from curated legendary shops.",
              story: "Ramen was originally introduced to Japan by Chinese immigrants in the late 19th century. It transformed from a cheap, filling street food for laborers into a culinary art form where chefs spend decades perfecting complex broths made of pork bones, dried kelp, and secret spice blends.",
              cost: 1200,
              category: "food"
            },
            {
              time: "07:30 PM",
              title: "OMAKASE Sushi Experience",
              description: "Sit at a hinoki wood counter and watch a master chef prepare bite-sized pieces of sushi customized to the day's fresh catches.",
              story: "Omakase means 'I leave it to you'. The chef assesses your reactions to customize your meal. Authentic sushi rice is seasoned with a specific blend of vinegar and kept at human body temperature to ensure the fish melts instantly in your mouth.",
              cost: 12000,
              category: "food"
            }
          ]
        },
        {
          day: 2,
          theme: "Theme Cafés & Izakaya Culture",
          activities: [
            {
              time: "10:30 AM",
              title: "Fluffy Souffle Pancakes in Harajuku",
              description: "Taste three-inch-tall jiggly soufflé pancakes served with fresh whipped cream and maple syrup.",
              story: "Tokyo bakers perfected the fluffy pancake by whipping egg whites into stiff peaks before folding them into batter, cooking them slowly under metal domes. It reflects the Japanese trend of making food visually appealing and 'kawaii' (cute) for social sharing.",
              cost: 1500,
              category: "food"
            },
            {
              time: "02:00 PM",
              title: "Artisanal Drip Coffee in Kiyosumi Shirakawa",
              description: "Visit Tokyo's trendy third-wave coffee capital and experience meticulously poured hand-drip brews.",
              story: "Tokyo has a deep 'Kissaten' (old coffee house) history dating back to the Showa era, where patrons sat in quiet, smoky rooms listening to jazz. Modern roasters adapted this dedication to create hyper-precise extraction parameters for single-origin beans.",
              cost: 800,
              category: "food"
            },
            {
              time: "07:00 PM",
              title: "Izakaya Hopping in Golden Gai, Shinjuku",
              description: "Explore six narrow alleys packed with over 200 tiny micro-bars, each holding only 4-6 seats, serving yakitori and highballs.",
              story: "Golden Gai was spared from Shinjuku's modern commercial redevelopments because of strong local community resistance. Its tiny, wooden, double-decker bars have served as meeting spots for artists, writers, filmmakers, and musicians since the 1960s.",
              cost: 4500,
              category: "food"
            }
          ]
        },
        {
          day: 3,
          theme: "Depachika & Kaiseki Dinner",
          activities: [
            {
              time: "11:00 AM",
              title: "Depachika Exploration at Isetan Shinjuku",
              description: "Stroll through a luxury basement food hall packed with stunning French pastries, premium fruits, and bento boxes.",
              story: "In Japan, high-end department store basements are called 'Depachika'. Fruit is treated as a luxury gift item here—you can find perfectly spherical cantaloupes grown with individual paper hats to prevent sunburn, selling for over $100 each!",
              cost: 1200,
              category: "food"
            },
            {
              time: "03:00 PM",
              title: "Japanese Whisky Tasting Masterclass",
              description: "Sample award-winning single malts and learn about the unique mizunara oak casks used for aging.",
              story: "Japanese whisky was born in the 1920s when Masataka Taketsuru studied organic chemistry and distilling in Scotland, married a Scottish woman, and returned to establish Japan's whisky industry, blending Scottish techniques with pure Japanese spring waters.",
              cost: 3500,
              category: "food"
            },
            {
              time: "07:30 PM",
              title: "Traditional Kaiseki Multi-Course Feast",
              description: "Enjoy a hyper-seasonal, multi-course dinner displaying beautiful presentations of raw, steamed, and grilled delicacies.",
              story: "Kaiseki represents the pinnacle of Japanese culinary philosophy, focusing on harmony, balance, and the appreciation of the four seasons. Each ingredient is selected to reflect the exact micro-season, served on dishes chosen to complement the visual themes.",
              cost: 15000,
              category: "food"
            }
          ]
        }
      ],
      adventure: [
        {
          day: 1,
          theme: "Neon Heights & Electric Subculture",
          activities: [
            {
              time: "10:00 AM",
              title: "Akihabara Electric Town Scavenger Hunt",
              description: "Explore multi-level retro gaming stores, neon anime shops, and components markets.",
              story: "Akihabara started as a post-WWII black market for vacuum tubes and radio parts. It later evolved into the global hub for consumer electronics, anime, and the unique 'Otaku' culture of subcultural enthusiasts.",
              cost: 500,
              category: "attraction"
            },
            {
              time: "03:00 PM",
              title: "VR Action Arena at Tokyo Joypolis",
              description: "Play cutting-edge virtual reality games and ride indoor simulated rollercoasters in Odaiba.",
              story: "Joypolis is operated by SEGA, one of the pioneers of arcade gaming. It showcases Tokyo's obsession with pushing technological boundaries in gaming and interactive entertainment.",
              cost: 4500,
              category: "attraction"
            },
            {
              time: "08:00 PM",
              title: "Tokyo Tower & Roppongi Skyline Night Views",
              description: "Ascend to the observation deck for spectacular 360-degree night views over the glowing Tokyo metropolis.",
              story: "Tokyo Tower, completed in 1958, is modeled after the Eiffel Tower but stands 13 meters taller. It was painted white and international orange to comply with aviation safety laws and has become an iconic symbol of Japan's post-war industrial rebirth.",
              cost: 1200,
              category: "attraction"
            }
          ]
        },
        {
          day: 2,
          theme: "Mountain Trails & Scenic Lake Views",
          activities: [
            {
              time: "08:00 AM",
              title: "Mount Takao Hiking",
              description: "Hike up Mount Takao, a scenic mountain near central Tokyo offering beautiful views of Mount Fuji on clear days.",
              story: "Mount Takao has been a sacred center for mountain worship for over a thousand years. The mountain is said to be inhabited by 'Tengu', legendary long-nosed mountain spirits who act as messengers of the gods.",
              cost: 400,
              category: "attraction"
            },
            {
              time: "01:00 PM",
              title: "Cable Car Ride & Yakuo-in Temple",
              description: "Take the steepest cable car in Japan up the slopes and explore the ancient Yakuo-in temple complex.",
              story: "Yakuo-in was established in 744 AD by Emperor Shomu to pray for protection against disasters. The temple is famous for its carvings of Tengu carrying fans made of feathers to blow away bad luck and bring fortune.",
              cost: 1000,
              category: "attraction"
            }
          ]
        },
        { day: 3, theme: "Cyberpunk Alleyways & Gachapon", activities: [] }
      ],
      relaxation: [
        {
          day: 1,
          theme: "Urban Onsen & Zen Paths",
          activities: [
            {
              time: "10:00 AM",
              title: "Shinjuku Gyoen National Garden",
              description: "Stroll across manicured French, English, and traditional Japanese garden landscapes.",
              story: "Shinjuku Gyoen began as a residence of the Lord Naito, a daimyo (lord) in the Edo era. It was later converted into an imperial garden for the royal family before becoming a national park after the Second World War.",
              cost: 500,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Onsen Hot Springs Experience",
              description: "Soak in hot, mineral-rich thermal waters and enjoy relaxing steam baths and saunas.",
              story: "Bathed in volcanic activity, Japan is home to thousands of natural thermal springs. The bathing ritual is deeply rooted in Shinto purification rites. Etiquette is strict: you must wash thoroughly before entering the hot water, and no clothing or towels are allowed in the pools.",
              cost: 2000,
              category: "relaxation"
            }
          ]
        },
        { day: 2, theme: "Quiet Temples & Tea Houses", activities: [] },
        { day: 3, theme: "Coastal Solitude", activities: [] }
      ],
      family: [
        {
          day: 1,
          theme: "Magical Worlds & Science Parks",
          activities: [
            {
              time: "09:00 AM",
              title: "Ghibli Museum in Mitaka",
              description: "Explore the whimsical, maze-like museum dedicated to the animation of Studio Ghibli.",
              story: "The museum was personally designed by legendary director Hayao Miyazaki. His motto was 'Let's lose our way together'. There is no set path through the museum, encouraging children and adults to explore and discover hidden passages on their own.",
              cost: 1000,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Miraikan (Museum of Emerging Science)",
              description: "Interact with humanoid robots, view a giant LED globe, and explore futuristic biotechnology exhibits.",
              story: "Miraikan means 'Hall of the Future'. It is run by Japan's Science and Technology Agency and features ASIMO, the famous humanoid robot, performing live runs to explain how machine learning helps robotics map environments.",
              cost: 600,
              category: "attraction"
            }
          ]
        },
        { day: 2, theme: "Tokyo Disneyland Magic", activities: [] },
        { day: 3, theme: "Digital Art & Giant Robots", activities: [] }
      ]
    },
    hotels: [
      {
        name: "Nine Hours Capsule Hotel Shinjuku",
        tier: "budget",
        price: 4500,
        rating: 4.2,
        location: "Shinjuku",
        facilities: ["Free Wi-Fi", "Showers", "Locker room", "Sleeping Pod"],
        description: "Experience sleek, cyberpunk-style capsule living. Designed for optimal sleep quality and minimalist transit stays."
      },
      {
        name: "Hotel Gracery Shinjuku (The Godzilla Hotel)",
        tier: "mid",
        price: 18000,
        rating: 4.6,
        location: "Kabukicho, Shinjuku",
        facilities: ["Free Wi-Fi", "On-site Dining", "City Views", "24h Desk"],
        description: "A modern hotel topped with a giant life-sized Godzilla head looking down on the streets of Kabukicho. Clean, comfortable, and central."
      },
      {
        name: "Park Hyatt Tokyo",
        tier: "luxury",
        price: 75000,
        rating: 4.9,
        location: "Nishi-Shinjuku",
        facilities: ["Indoor Pool", "Luxury Spa", "Peak Lounge Bar", "Fitness Center"],
        description: "Iconic luxury hotel made famous in the film 'Lost in Translation'. Offers breathtaking panoramic views of Tokyo and Mount Fuji."
      }
    ],
    foodSuggestions: [
      {
        name: "Sushi Dai",
        location: "Toyosu Fish Market",
        dish: "Chef's Omakase Sushi Set",
        price: "$$$",
        dietary: "Seafood, Gluten-Free options available",
        description: "A tiny, legendary sushi shop inside the fish market. Patrons line up at 4:00 AM to taste the freshest morning catch."
      },
      {
        name: "Ichiran Ramen Shinjuku",
        location: "Shinjuku",
        dish: "Classic Tonkotsu Ramen",
        price: "$",
        dietary: "Pork broth (contains gluten)",
        description: "Famous for its individual dining booths where you order via ticket machine, customizing noodle texture and spice levels to your preference."
      },
      {
        name: "T's TanTan",
        location: "Tokyo Station (Keiyo Street)",
        dish: "Vegan Sesame DanDan Noodles",
        price: "$",
        dietary: "100% Vegan, Vegetarian",
        description: "A highly popular shop specializing in rich, savory vegan ramen and gyoza that rival traditional animal-broth versions."
      }
    ],
    transport: [
      {
        name: "Tokyo Subway & Metro",
        cost: "200 - 300 JPY ($1.50 - $2.00) per ride",
        speed: "Very Fast",
        convenience: "Excellent",
        tip: "Buy a prepaid IC Card (Suica or Pasmo) and tap to ride. Download Tokyo Metro Navigation app to find optimal transfers."
      },
      {
        name: "Taxis & Ride-Hailing (Go App)",
        cost: "Starting at 500 JPY + 400 JPY/km ($10 - $35 average)",
        speed: "Moderate (subject to traffic)",
        convenience: "High",
        tip: "Taxi doors open automatically; don't pull them! Drivers usually speak limited English, so have your address written in Japanese."
      },
      {
        name: "Walking",
        cost: "Free",
        speed: "Slow",
        convenience: "High (neighborhood scale)",
        tip: "Tokyo is highly pedestrian-friendly. Walking between Shinjuku and Shibuya is scenic, passing through Harajuku and parks."
      }
    ],
    costEstimates: {
      lodging: { budget: 5000, mid: 18000, luxury: 75000 },
      meals: { budget: 3000, mid: 7000, luxury: 25000 },
      transport: { budget: 800, mid: 2000, luxury: 8000 },
      attractions: { budget: 1000, mid: 4000, luxury: 12000 },
      shopping: { budget: 2000, mid: 6000, luxury: 20000 }
    }
  },
  paris: {
    name: "Paris, France",
    tagline: "The City of Light, celebrated for fashion, gastronomy, and historic art.",
    coords: { lat: 48.8566, lng: 2.3522 },
    vibes: {
      culture: "Wander through world-famous museums, gothic cathedrals, and palace architecture.",
      food: "Enjoy freshly baked croissants, gourmet cheese, cozy bistros, and Michelin-starred dining.",
      adventure: "Cycle along the Seine, explore underground catacombs, and climb historical monuments.",
      relaxation: "Lounge in manicured royal gardens and enjoy slow afternoons in sidewalk cafés.",
      family: "Discover science parks, boat cruises, carousel rides, and toy shops."
    },
    itineraries: {
      culture: [
        {
          day: 1,
          theme: "Gothic Masterpieces & Louvre Treasures",
          activities: [
            {
              time: "09:00 AM",
              title: "Louvre Museum Guided Tour",
              description: "Explore the glass pyramid and view legendary masterpieces including the Mona Lisa and Venus de Milo.",
              story: "The Louvre was originally built as a fortress in the late 12th century to protect Paris from Viking raids. You can still see the medieval foundations in the museum's basement. It was converted into a public museum during the French Revolution in 1793.",
              cost: 22,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Sainte-Chapelle & Notre-Dame Exterior",
              description: "Marvel at the spectacular 13th-century stained-glass panels inside Sainte-Chapelle, and view Notre-Dame's restoration.",
              story: "Sainte-Chapelle was constructed by King Louis IX to house his collection of Passion Relics, including Christ's Crown of Thorns. The crown alone cost three times more to purchase from the Emperor of Constantinople than it cost to build the entire chapel!",
              cost: 11.5,
              category: "attraction"
            },
            {
              time: "05:00 PM",
              title: "Stroll along Pont Neuf & Seine River Banks",
              description: "Walk along Paris's oldest bridge and browse the wooden stalls of the 'Bouquinistes' selling vintage books.",
              story: "Despite its name translating to 'New Bridge', Pont Neuf is the oldest standing bridge across the Seine. It was the first bridge in Paris to be built without houses on top of it, and the first to feature raised sidewalks to protect pedestrians from mud and carriage traffic.",
              cost: 0,
              category: "attraction"
            }
          ]
        },
        {
          day: 2,
          theme: "Bohemian Montmartre & Impressionist Masterpieces",
          activities: [
            {
              time: "09:30 AM",
              title: "Musee d'Orsay Exploration",
              description: "Admire the world's largest collection of Impressionist paintings housed inside a stunning former railway station.",
              story: "The Musee d'Orsay was originally the Gare d'Orsay railway station, built for the 1900 World's Fair. By 1939, its platforms were too short for modern trains, and it was almost demolished to build a luxury hotel before being saved and converted into an art museum in 1986.",
              cost: 16,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Montmartre Walking Tour & Sacre-Cœur",
              description: "Climb the cobblestone streets of the artists' quarter, visiting Place du Tertre, and view Paris from the white dome of Sacre-Cœur.",
              story: "Montmartre means 'Mountain of the Martyr'. In the late 19th and early 20th centuries, low rent and tax-free wine drew impoverished artists like Picasso, Van Gogh, and Toulouse-Lautrec here, transforming this village into the epicenter of the modern art world.",
              cost: 0,
              category: "attraction"
            }
          ]
        },
        {
          day: 3,
          theme: "Royal Gardens & Arc de Triomphe",
          activities: [
            {
              time: "10:00 AM",
              title: "Arc de Triomphe & Champs-Élysées Walk",
              description: "Climb to the top of the monumental arch dedicated to the French Imperial armies, then walk down the historic avenue.",
              story: "The Arc de Triomphe was commissioned by Napoleon in 1806 after his victory at Austerlitz, telling his soldiers, 'You will return home through arches of triumph!' Underneath the arch lies the Tomb of the Unknown Soldier from WWI, with an eternal flame rekindled every single evening at 6:30 PM.",
              cost: 13,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Luxembourg Gardens Relaxing",
              description: "Lounge in the iconic green metal chairs surrounding the Grand Bassin pond where children sail miniature wooden boats.",
              story: "These gardens were created starting in 1612 by Marie de' Medici, the widow of King Henry IV. Homesick for her native Florence, she had the Luxembourg Palace constructed to mimic the Palazzo Pitti, importing thousands of trees and commissioning complex fountains to emulate Italian style.",
              cost: 0,
              category: "attraction"
            }
          ]
        }
      ],
      food: [
        {
          day: 1,
          theme: "Boulangerie Secrets & French Bistro Classics",
          activities: [
            {
              time: "08:30 AM",
              title: "Boulangerie Croissant and Baguette Tasting",
              description: "Visit a neighborhood bakery to taste warm, flaky croissants and standard buttered baguettes.",
              story: "The French baguette is so culturally significant that in 2022, it was officially inscribed onto UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. French law dictates a traditional baguette must only contain four ingredients: flour, water, yeast, and salt.",
              cost: 6,
              category: "food"
            },
            {
              time: "12:30 PM",
              title: "Bistro lunch at Le Comptoir du Relais",
              description: "Taste traditional beef bourguignon or escargot with garlic butter in a classic Parisian bistro setting.",
              story: "The term 'bistro' allegedly originated in 1814 when Russian soldiers occupying Paris shouted 'Bystro!' (quickly!) to French tavern owners. The owners began serving fast, simple dishes like stews and steaks, creating the casual dining culture we see today.",
              cost: 35,
              category: "food"
            },
            {
              time: "04:30 PM",
              title: "French Cheese & Wine Pairing in a Vaulted Cellar",
              description: "Learn how to match aged Comté, soft Brie, and pungent Roquefort with French regional wines.",
              story: "Former President Charles de Gaulle once famously complained about governing France, saying: 'How can you govern a country which has 246 varieties of cheese?' Today, estimates of French cheese varieties exceed 1,000!",
              cost: 45,
              category: "food"
            }
          ]
        },
        { day: 2, theme: "Pastry Art & Fine Dining", activities: [] },
        { day: 3, theme: "Market Delights", activities: [] }
      ]
    },
    hotels: [
      {
        name: "Les Piaules Hostel Belleville",
        tier: "budget",
        price: 45,
        rating: 4.3,
        location: "Belleville",
        facilities: ["Free Wi-Fi", "Bar", "Rooftop Terrace", "Bunk Pods"],
        description: "A trendy hostel set in a vibrant, artistic neighborhood. Great social space, local craft beers, and a panoramic rooftop view of Paris."
      },
      {
        name: "Hotel Caron de Beaumarchais",
        tier: "mid",
        price: 180,
        rating: 4.7,
        location: "Le Marais",
        facilities: ["Free Wi-Fi", "French Breakfast", "Historic Styling", "A/C"],
        description: "Charming boutique hotel designed to feel like an elegant 18th-century Parisian home, located in the historic Marais district."
      },
      {
        name: "Hôtel Plaza Athénée",
        tier: "luxury",
        price: 950,
        rating: 4.9,
        location: "Avenue Montaigne",
        facilities: ["Michelin Dining", "Dior Spa", "Courtyard Garden", "Eiffel Views"],
        description: "The epitome of Parisian haute couture luxury, famous for its red awnings, geranium-filled window boxes, and views of the Eiffel Tower."
      }
    ],
    foodSuggestions: [
      {
        name: "L'As du Fallafel",
        location: "Le Marais",
        dish: "Special Large Falafel Pita",
        price: "$",
        dietary: "Vegetarian, Halal options, Kosher",
        description: "A legendary walk-up window in the Jewish quarter, famous for serving what is widely considered the best falafel sandwich in Paris."
      },
      {
        name: "Bouillon Chartier",
        location: "Grands Boulevards",
        dish: "Escargots & Confit de Canard",
        price: "$$",
        dietary: "Meat, Seafood",
        description: "Housed in a gorgeous 1896 Art Nouveau dining hall, serving traditional French comfort food at incredibly low prices."
      },
      {
        name: "Café de Flore",
        location: "Saint-Germain-des-Prés",
        dish: "Hot Chocolate (Chocolat Chaud Special) & Croque Monsieur",
        price: "$$$",
        dietary: "Vegetarian options",
        description: "One of Paris's oldest and most prestigious coffee houses, famous for being the intellectual hub of Jean-Paul Sartre and Simone de Beauvoir."
      }
    ],
    transport: [
      {
        name: "Paris Metro & RER",
        cost: "2.15 EUR ($2.30) per single ticket",
        speed: "Fast",
        convenience: "Very High",
        tip: "Buy a pack of 10 tickets (carnet) digitally on your phone or purchase a Navigo Easy card. Keep your ticket until you exit!"
      },
      {
        name: "Velib' Bikeshare",
        cost: "3 EUR per trip / 5 EUR daily pass ($3.20 - $5.40)",
        speed: "Fast in rush hour",
        convenience: "High",
        tip: "Paris features over 1,000 km of dedicated cycle paths. Grab a blue electric Velib bike to navigate along the riverbanks easily."
      },
      {
        name: "Parisian Taxis & Uber",
        cost: "Flat rates from airports (55-65 EUR); 15-30 EUR in city",
        speed: "Slow during rush hours",
        convenience: "Medium",
        tip: "Always hail official taxis at designated stands or use Uber. Beware of unlicensed drivers at transit stations."
      }
    ],
    costEstimates: {
      lodging: { budget: 50, mid: 180, luxury: 950 },
      meals: { budget: 25, mid: 65, luxury: 220 },
      transport: { budget: 8, mid: 18, luxury: 50 },
      attractions: { budget: 15, mid: 35, luxury: 80 },
      shopping: { budget: 10, mid: 45, luxury: 200 }
    }
  },
  newyork: {
    name: "New York City, USA",
    tagline: "The city that never sleeps, known for theater, high towers, and diverse food.",
    coords: { lat: 40.7128, lng: -74.0060 },
    vibes: {
      culture: "See Broadway shows, world-class art galleries, and historic immigrant landing sites.",
      food: "Grab giant dollar slices, local bagels, fine dry-aged steaks, and trendy food markets.",
      adventure: "Walk across historic suspension bridges, kayak on the Hudson, and ice-skate in parks.",
      relaxation: "Sunbathe in Central Park or walk high above the streets along linear parks.",
      family: "Visit giant toyshops, interactive science museums, and famous zoo parks."
    },
    itineraries: {
      culture: [
        {
          day: 1,
          theme: "Immigrant Pathways & Financial Heights",
          activities: [
            {
              time: "09:00 AM",
              title: "Statue of Liberty & Ellis Island Tour",
              description: "Board a ferry from Battery Park to stand beneath Lady Liberty and explore the immigrant processing archives.",
              story: "Ellis Island processed over 12 million immigrants between 1892 and 1954. It is estimated that nearly 40% of all current U.S. citizens can trace at least one ancestor directly through this hall.",
              cost: 25,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "9/11 Memorial & One World Observatory",
              description: "Pay respects at the reflection pools and ascend 102 floors for views of Manhattan.",
              story: "The twin reflecting pools are located in the exact footprints of the original Twin Towers. The names of the 2,983 victims are etched in bronze, arranged in 'meaningful adjacencies' based on personal relations and work networks.",
              cost: 45,
              category: "attraction"
            }
          ]
        },
        {
          day: 2,
          theme: "Midtown Landmarks & Museum Mile",
          activities: [
            {
              time: "10:00 AM",
              title: "Metropolitan Museum of Art (The Met)",
              description: "Explore five thousand years of art spanning global cultures in a massive Beaux-Arts building.",
              story: "The Met contains over 2 million works of art. One of its most impressive sections is the Temple of Dendur, a 15 BC Roman-era Egyptian temple which was dismantled and shipped block-by-block to New York in 661 crates to save it from flooding caused by the Aswan High Dam.",
              cost: 30,
              category: "attraction"
            },
            {
              time: "03:00 PM",
              title: "Central Park Walking Tour & Bow Bridge",
              description: "Stroll past Bethesda Fountain, Sheep Meadow, and cross the highly photogenic cast-iron Bow Bridge.",
              story: "Central Park was designed by landscape architects Frederick Law Olmsted and Calvert Vaux in 1858. It is entirely man-made, requiring the blasting of more gunpowder than was used in the Battle of Gettysburg to clear the swampy terrain and create the lakes, lawns, and paths.",
              cost: 0,
              category: "attraction"
            }
          ]
        },
        { day: 3, theme: "Brooklyn Bridge & Historic DUMBO", activities: [] }
      ]
    },
    hotels: [
      {
        name: "The Freehand New York",
        tier: "budget",
        price: 120,
        rating: 4.3,
        location: "Flatiron District",
        facilities: ["Free Wi-Fi", "Hip Rooftop Bar", "Gym", "Co-working Space"],
        description: "Housed in the historic George Washington Hotel, once home to writers and artists. Fun, artistic vibe with shared and private bunk rooms."
      },
      {
        name: "The Bowery Hotel",
        tier: "mid",
        price: 350,
        rating: 4.7,
        location: "East Village",
        facilities: ["Free Wi-Fi", "Free Bikes", "Italian Restaurant", "Fitness Room"],
        description: "Features factory-style windows, antique rugs, and wood-paneled walls. Combines industrial loft design with high-end comfort."
      },
      {
        name: "The Plaza Hotel",
        tier: "luxury",
        price: 900,
        rating: 4.9,
        location: "Midtown / Fifth Ave",
        facilities: ["Champagne Bar", "Guerlain Spa", "Butler Service", "Luxury Suites"],
        description: "New York's most iconic luxury hotel, located next to Central Park. Features crystal chandeliers, gilded finishes, and historic prestige."
      }
    ],
    foodSuggestions: [
      {
        name: "Joe's Pizza",
        location: "West Village",
        dish: "Plain Cheese Slice",
        price: "$",
        dietary: "Vegetarian options",
        description: "The classic Greenwich Village institution serving thin-crust, hot slices since 1975. Popular with students, actors, and late-night revelers."
      },
      {
        name: "Katz's Delicatessen",
        location: "Lower East Side",
        dish: "Legendary Pastrami on Rye Sandwich",
        price: "$$",
        dietary: "Kosher-style meat",
        description: "Founded in 1888, this bustling deli serves massive, hand-carved pastrami sandwiches cured for 30 days. Famous for the diner scene in 'When Harry Met Sally'."
      }
    ],
    transport: [
      {
        name: "NYC Subway",
        cost: "$2.90 per single ride",
        speed: "Fast (bypasses street grid)",
        convenience: "Very High",
        tip: "Tap your phone/credit card on OMNY turnstiles to ride. Subway runs 24/7, but check schedules for weekend route changes."
      },
      {
        name: "Walking",
        cost: "Free",
        speed: "Slow",
        convenience: "High",
        tip: "New York is laid out in a grid system in Midtown. Walking is the best way to appreciate the neighborhood architectures."
      }
    ],
    costEstimates: {
      lodging: { budget: 120, mid: 350, luxury: 900 },
      meals: { budget: 20, mid: 60, luxury: 180 },
      transport: { budget: 6, mid: 20, luxury: 60 },
      attractions: { budget: 0, mid: 40, luxury: 100 },
      shopping: { budget: 15, mid: 50, luxury: 250 }
    }
  },
  rome: {
    name: "Rome, Italy",
    tagline: "The Eternal City, holding nearly three thousand years of globally influential art.",
    coords: { lat: 41.9028, lng: 12.4964 },
    vibes: {
      culture: "Step back into the Roman Empire inside Colosseum ruins and Vatican museums.",
      food: "Indulge in authentic carbonara, crispy Roman-style pizza, and artisan gelato.",
      adventure: "Explore historic crypts, climb ancient hills, and bike the historic Appian Way.",
      relaxation: "Sip espresso in baroque piazzas, listening to historic fountains.",
      family: "Join gladiator training schools, visit park villas, and eat fresh pasta."
    },
    itineraries: {
      culture: [
        {
          day: 1,
          theme: "Imperial Glories & Ancient Forums",
          activities: [
            {
              time: "08:30 AM",
              title: "Colosseum & Roman Forum Guided Tour",
              description: "Walk where gladiators stood and see the administrative center of the Roman Empire.",
              story: "The Colosseum was built with travertine stone and concrete, financed by spoils taken from the Siege of Jerusalem in 70 AD. It held over 50,000 spectators and could be flooded with water to host mock naval battles!",
              cost: 18,
              category: "attraction"
            },
            {
              time: "02:00 PM",
              title: "Pantheon Exploration & Piazza Navona",
              description: "Look up through the giant open oculus of the world's largest unreinforced concrete dome.",
              story: "The Pantheon's dome is exactly as wide as it is tall—43.3 meters. It has survived intact for 1,900 years because Romans added heavy volcanic tufa rock at the bottom and lightweight pumice stone at the top, mixing it with high-durability volcanic ash mortar.",
              cost: 5,
              category: "attraction"
            }
          ]
        }
      ]
    },
    hotels: [
      {
        name: "The Beehive Hostel",
        tier: "budget",
        price: 35,
        rating: 4.4,
        location: "Termini Station",
        facilities: ["Free Wi-Fi", "Organic Café", "Cozy Garden", "Lounge"],
        description: "A cozy, clean, family-run guest house and hostel. Offers a peaceful garden and organic breakfast, just minutes from the main station."
      },
      {
        name: "Singer Palace Hotel",
        tier: "luxury",
        price: 450,
        rating: 4.9,
        location: "Via del Corso / Pantheon",
        facilities: ["Rooftop Restaurant", "Bar", "Luxury Bedding", "Central Location"],
        description: "Singer Palace is set in a historic 20th-century building (the former Singer sewing machine headquarters). Features a gorgeous art deco winding staircase and panoramic rooftop dining."
      }
    ],
    foodSuggestions: [
      {
        name: "Da Enzo al 29",
        location: "Trastevere",
        dish: "Rigatoni alla Carbonara & Carciofo alla Romana (Roman Artichoke)",
        price: "$$",
        dietary: "Meat (guanciale), gluten (pasta)",
        description: "A traditional Trastevere trattoria serving legendary, rich Roman pasta dishes. Lines are long, but the authentic flavors are worth the wait."
      }
    ],
    transport: [
      {
        name: "Rome Metro & Tram",
        cost: "1.50 EUR ($1.60) for 100 minutes of travel",
        speed: "Fast (limited routes)",
        convenience: "Medium",
        tip: "Rome's metro has only three lines (A, B, C) because workers constantly hit archaeological ruins whenever they try to dig new tunnels!"
      }
    ],
    costEstimates: {
      lodging: { budget: 40, mid: 140, luxury: 450 },
      meals: { budget: 20, mid: 50, luxury: 150 },
      transport: { budget: 3, mid: 10, luxury: 35 },
      attractions: { budget: 10, mid: 30, luxury: 70 },
      shopping: { budget: 10, mid: 40, luxury: 180 }
    }
  },
  bali: {
    name: "Bali, Indonesia",
    tagline: "The Island of the Gods, featuring forested volcanic mountains and sandy beaches.",
    coords: { lat: -8.4095, lng: 115.1889 },
    vibes: {
      culture: "Attend traditional fire dances, visit volcanic water temples, and explore artisan villages.",
      food: "Taste slow-roasted suckling pig, fresh coconut bowls, organic cafes, and beachside fish grills.",
      adventure: "Surf volcanic reef breaks, raft down river canyons, and climb active volcanoes at sunrise.",
      relaxation: "Lounge in cliffside infinity pools, practice yoga in Ubud forests, and enjoy spa therapy.",
      family: "Interact with monkeys in sacred forests, visit waterparks, and learn traditional crafts."
    },
    itineraries: {
      culture: [
        {
          day: 1,
          theme: "Sacred Forests & Temple Purification",
          activities: [
            {
              time: "08:30 AM",
              title: "Tirta Empul Holy Water Temple",
              description: "Participate in a traditional Hindu purification ritual under stone water spouts.",
              story: "Tirta Empul was founded in 962 AD. According to legend, the god Indra created the holy spring water to heal his troops, who had been poisoned by the demon king Mayadenawa. The spring bubbles up in a central pool, crystal clear and constantly replenishing.",
              cost: 50000,
              category: "attraction"
            },
            {
              time: "01:30 PM",
              title: "Sacred Monkey Forest Sanctuary in Ubud",
              description: "Walk through giant banyan trees and watch hundreds of long-tailed macaques playing around mossy stone carvings.",
              story: "The Monkey Forest is managed based on the Balinese philosophy of 'Tri Hita Karana'—the three causes of well-being: harmony with God, harmony among humans, and harmony with the natural environment.",
              cost: 80000,
              category: "attraction"
            }
          ]
        }
      ]
    },
    hotels: [
      {
        name: "Lay Day Surf Hostel",
        tier: "budget",
        price: 150000,
        rating: 4.3,
        location: "Canggu",
        facilities: ["Free Wi-Fi", "Swimming Pools", "Surf Rental", "Social Bar"],
        description: "A laid-back surf hostel featuring four pools, cozy lounging bags, and a great social vibe in the heart of Canggu's surf district."
      },
      {
        name: "Wapa di Ume Ubud",
        tier: "mid",
        price: 1500000,
        rating: 4.8,
        location: "Ubud",
        facilities: ["Infinity Pool", "Yoga Center", "Rainforest Spa", "On-site Dining"],
        description: "Boutique oasis overlooking active green rice fields. Traditional thatched roof designs with luxurious indoor/outdoor bathrooms."
      }
    ],
    foodSuggestions: [
      {
        name: "Warung Nia",
        location: "Seminyak",
        dish: "Nasi Campur Bali & Chicken Sate with Peanut Sauce",
        price: "$$",
        dietary: "Halal options, Gluten-Free options",
        description: "Cozy local eatery serving outstanding Balinese skewers on tiny charcoal tabletop grills, alongside fragrant seasoned rice."
      }
    ],
    transport: [
      {
        name: "Scooter Rental",
        cost: "70,000 - 100,000 IDR ($5 - $7) per day",
        speed: "Fast (cuts through traffic)",
        convenience: "Very High (requires license)",
        tip: "Scooters are the primary transport in Bali. Always wear a helmet, get international license endorsements, and drive on the left!"
      },
      {
        name: "Ride-Hailing (Grab / Gojek)",
        cost: "20,000 IDR (bike taxi) to 150,000 IDR (car) average",
        speed: "Bike: Fast; Car: Slow due to narrow lanes",
        convenience: "High",
        tip: "Gojek is extremely popular and cheap. You can hire a 'Gojek Bike' rider to pick you up and navigate congested lanes easily."
      }
    ],
    costEstimates: {
      lodging: { budget: 150000, mid: 1200000, luxury: 5000000 },
      meals: { budget: 80000, mid: 250000, luxury: 800000 },
      transport: { budget: 70000, mid: 200000, luxury: 800000 },
      attractions: { budget: 50000, mid: 150000, luxury: 500000 },
      shopping: { budget: 100000, mid: 400000, luxury: 1500000 }
    }
  }
};

// Procedural Generator Engine Template Data for fallback cities
const fallbackTemplates = {
  names: ["Central Park", "Old Town Square", "City Cathedral", "Main Arts Museum", "Botanical Conservatory", "Panoramic Viewpoint", "Local Food Market", "Riverside Walkway", "Historic Castle Ruins"],
  descriptions: [
    "Explore this gorgeous local landmark, perfect for taking photos and enjoying local atmosphere.",
    "Walk through the historic pathways and learn about the local culture and design.",
    "A stunning location offering breathtaking views, architecture, and historical context.",
    "A vibrant hub of local activity, filled with colors, aromas, and friendly locals."
  ],
  stories: [
    "This location has stood for centuries as a testament to the city's resilience. Originally commissioned by a local ruler in the 17th century, it survived wars and natural disasters. Local legend says that rubbing the entrance gate brings visitors safety and good luck in their subsequent travels.",
    "Architects from three different countries worked on this structure over a span of forty years, creating a unique blend of structural designs. It was once the center of trade for the entire province, housing merchants who traded fine silk, spices, and copper wares.",
    "Underneath these foundations lie ancient tunnels dating back to the Roman and Medieval eras, which were used by guards to secretly transport materials during sieges. In the spring, the surrounding trees bloom with vibrant colors, drawing painters from all over the country.",
    "This site is famous for its acoustic echoes. If you whisper into the corner walls, the sound travels along the curved dome ceiling and can be heard clearly by someone standing on the opposite end. It represents the creative genius of pre-modern engineering."
  ],
  activities: [
    { time: "09:30 AM", title: "Historic Landmark Exploration", duration: 2 },
    { time: "01:30 PM", title: "Local Craft & Market Tasting", duration: 3 },
    { time: "06:00 PM", title: "Panoramic Viewpoint & Sunset Dinner", duration: 2 }
  ],
  hotels: [
    {
      name: "City Cozy Hostel",
      tier: "budget",
      rating: 4.2,
      facilities: ["Free Wi-Fi", "Common Lounge", "Kitchen Access"],
      description: "Clean, budget-friendly and highly social. Perfect for backpackers and solo travelers."
    },
    {
      name: "Grand Central Plaza Hotel",
      tier: "mid",
      rating: 4.5,
      facilities: ["Free Wi-Fi", "Breakfast Buffet", "Fitness Center", "A/C"],
      description: "A comfortable, centrally located hotel with great access to public transit and local restaurants."
    },
    {
      name: "The Royal Crown Resort & Spa",
      tier: "luxury",
      rating: 4.9,
      facilities: ["Infinity Pool", "Wellness Spa", "Fine Dining Room", "Valet Parking"],
      description: "A luxurious experience featuring modern architecture, world-class dining, and premium relaxation facilities."
    }
  ],
  foodSuggestions: [
    {
      name: "Local Heritage Kitchen",
      dish: "Signature Local Delicacy Plate",
      price: "$$",
      dietary: "Vegetarian & Gluten-free choices",
      description: "A popular family-owned bistro serving authentic local dishes passed down through three generations."
    },
    {
      name: "The Green Sprout",
      dish: "Fresh Seasonal Salad & Avocado Toast",
      price: "$",
      dietary: "100% Vegan, Vegetarian, Organic",
      description: "A bright, modern café offering plant-based meals, freshly squeezed juices, and specialty coffees."
    }
  ],
  transport: [
    {
      name: "Local Subway / Bus Transit",
      cost: "$2.00 - $3.00 per ride",
      speed: "Fast",
      convenience: "High",
      tip: "Purchase a day pass at the terminal to save money and tap to board all buses and trams."
    },
    {
      name: "Ride-Hailing & Local Taxis",
      cost: "$8.00 - $20.00 depending on distance",
      speed: "Moderate",
      convenience: "High",
      tip: "Use the local ride-hailing app to secure fixed prices and avoid taxi fare scams."
    },
    {
      name: "Bicycle Hire & Walking",
      cost: "Free to $10.00 daily",
      speed: "Slow",
      convenience: "Excellent",
      tip: "The central district is highly walkable and has dedicated paths for bicycles. It is the best way to explore local neighborhoods."
    }
  ],
  costEstimates: {
    lodging: { budget: 35, mid: 120, luxury: 450 },
    meals: { budget: 15, mid: 45, luxury: 120 },
    transport: { budget: 5, mid: 15, luxury: 45 },
    attractions: { budget: 10, mid: 25, luxury: 60 },
    shopping: { budget: 10, mid: 30, luxury: 120 }
  }
};
