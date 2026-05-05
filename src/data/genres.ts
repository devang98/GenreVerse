import type { Genre } from '../types';

const commonSources = [
  {
    label: 'game-genre.pdf: local print of Wikipedia List of video game genres',
  },
  {
    label: 'Wikipedia: List of video game genres',
    url: 'https://en.wikipedia.org/wiki/List_of_video_game_genres',
  },
  {
    label: 'MobyGames: Basic Genres taxonomy',
    url: 'https://www.mobygames.com/genre/',
  },
  {
    label: 'IGDB: Genre directory',
    url: 'https://www.igdb.com/genres',
  },
];

export const genres: Genre[] = [
  {
    id: 'platformer',
    name: 'Platformer',
    shortDescription:
      'Movement games built around jumping, timing, traversal, and spatial rhythm.',
    fullDescription:
      'Platformers challenge players to move through levels by reading space, timing jumps, and recovering from hazards. The drama is usually physical: ledges, enemies, moving platforms, momentum, and the question of whether a jump was judged correctly.',
    playerFantasy:
      'Mastery through motion: the player feels agile, precise, and increasingly fluent in the level layout.',
    coreMechanics: ['Jump arcs', 'Gravity', 'Hazard timing', 'Collectibles', 'Checkpoint flow'],
    famousGames: [
      { title: 'Super Mario Bros.', year: 1985, note: 'Defined side-scrolling platform language for generations.' },
      { title: 'Sonic the Hedgehog', year: 1991, note: 'Turned momentum and speed into the central fantasy.' },
      { title: 'Celeste', year: 2018, note: 'Modern precision platforming with expressive movement.' },
    ],
    subgenres: ['2D platformer', '3D platformer', 'Precision platformer', 'Metroidvania'],
    relatedTags: ['Side view', 'Exploration', 'Collectathon', 'Speedrunning'],
    demoType: 'platformer',
    sourceNotes: commonSources,
    accent: '#f97316',
    imageUrl:
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'shooter',
    name: 'Shooter',
    shortDescription:
      'Action games where aiming, firing, positioning, and target priority drive play.',
    fullDescription:
      'Shooters ask players to translate perception into fast decisions: identify threats, aim accurately, manage distance, and choose when to reload, retreat, or push. Perspective can vary, but the core loop is built around ranged combat.',
    playerFantasy:
      'Pressure under control: the player reads chaos, makes clean shots, and survives through accuracy.',
    coreMechanics: ['Aiming', 'Target priority', 'Line of sight', 'Ammo rhythm', 'Cover or evasive movement'],
    famousGames: [
      { title: 'Doom', year: 1993, note: 'A landmark first-person shooter focused on speed and aggression.' },
      { title: 'Half-Life 2', year: 2004, note: 'Blended shooting with physics, pacing, and authored set pieces.' },
      { title: 'Halo: Combat Evolved', year: 2001, note: 'Popularized console FPS combat loops and shield recovery.' },
    ],
    subgenres: ['First-person shooter', 'Third-person shooter', 'Hero shooter', 'Shoot em up'],
    relatedTags: ['Action', 'Sci-fi', 'Arena', 'Tactical'],
    demoType: 'shooter',
    sourceNotes: commonSources,
    accent: '#38bdf8',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    shortDescription:
      'Games centered on problem solving, pattern recognition, rules, and clever constraints.',
    fullDescription:
      'Puzzle games make understanding the system the main pleasure. The player learns rules, tests possibilities, and finds elegant solutions, often with minimal action pressure unless the puzzle is timed.',
    playerFantasy:
      'The satisfying click of insight: a confusing board becomes readable, then solvable.',
    coreMechanics: ['Rule discovery', 'Pattern matching', 'Spatial reasoning', 'Sequencing', 'Constraint solving'],
    famousGames: [
      { title: 'Tetris', year: 1984, note: 'A foundational falling-block puzzle game built on spatial pressure.' },
      { title: 'Portal', year: 2007, note: 'A physics puzzle game framed through first-person navigation.' },
      { title: 'The Witness', year: 2016, note: 'A large-scale puzzle game about learning visual languages.' },
    ],
    subgenres: ['Tile matching', 'Logic puzzle', 'Physics puzzle', 'Hidden object'],
    relatedTags: ['Abstract', 'Minimal', 'Single-player', 'Brain teaser'],
    demoType: 'puzzle',
    sourceNotes: commonSources,
    accent: '#22c55e',
    imageUrl:
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rpg',
    name: 'Role-playing Game',
    shortDescription:
      'Character-centered games about growth, choices, stats, quests, and long-form progression.',
    fullDescription:
      'RPGs focus on becoming someone over time. Players develop characters through abilities, equipment, dialogue, parties, and quests. Combat can be turn-based or real-time, but progression and identity remain central.',
    playerFantasy:
      'Becoming a hero, survivor, strategist, or wanderer whose choices and build matter.',
    coreMechanics: ['Character progression', 'Stats and builds', 'Dialogue choices', 'Inventory', 'Quest structure'],
    famousGames: [
      { title: 'Final Fantasy VII', year: 1997, note: 'A major console RPG known for party progression and cinematic story.' },
      { title: 'The Elder Scrolls V: Skyrim', year: 2011, note: 'A broad open-world RPG built around player choice.' },
      { title: 'Baldur\'s Gate 3', year: 2023, note: 'A modern party RPG with tactical combat and branching choices.' },
    ],
    subgenres: ['JRPG', 'Action RPG', 'Tactical RPG', 'MMORPG'],
    relatedTags: ['Fantasy', 'Story-rich', 'Open world', 'Party-based'],
    demoType: 'rpg',
    sourceNotes: commonSources,
    accent: '#a855f7',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'strategy',
    name: 'Strategy',
    shortDescription:
      'Decision-heavy games about planning, resources, positioning, and long-term advantage.',
    fullDescription:
      'Strategy games shift attention from reflex to command. Players manage units, territory, economy, timing, and risk. The genre can be real-time or turn-based, but the heart is choosing plans that survive contact with opponents or systems.',
    playerFantasy:
      'Seeing the whole board: the player wins by reading systems earlier than everyone else.',
    coreMechanics: ['Resource management', 'Unit control', 'Map control', 'Tech progression', 'Tactical tradeoffs'],
    famousGames: [
      { title: 'Civilization', year: 1991, note: 'A defining 4X strategy game about empire-scale decisions.' },
      { title: 'StarCraft', year: 1998, note: 'A landmark RTS built on economy, scouting, and execution.' },
      { title: 'XCOM: Enemy Unknown', year: 2012, note: 'Turn-based tactics with squad risk and permanent consequences.' },
    ],
    subgenres: ['RTS', 'Turn-based strategy', '4X', 'Tactics'],
    relatedTags: ['War', 'Economy', 'Base building', 'Competitive'],
    demoType: 'strategy',
    sourceNotes: commonSources,
    accent: '#14b8a6',
    imageUrl:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'racing',
    name: 'Racing',
    shortDescription:
      'Competition games about speed, racing lines, vehicle handling, and reaction windows.',
    fullDescription:
      'Racing games put players into contests of velocity and control. The central tension is how much speed can be carried through a course before traction, traffic, opponents, or mistakes turn advantage into loss.',
    playerFantasy:
      'Perfect control at high speed: the player threads risk through corners and finishes clean.',
    coreMechanics: ['Acceleration', 'Braking', 'Racing line', 'Drifting', 'Opponent pressure'],
    famousGames: [
      { title: 'Gran Turismo', year: 1997, note: 'A major racing sim series focused on cars and handling.' },
      { title: 'Mario Kart 8', year: 2014, note: 'A famous kart racer built around items, drifting, and party competition.' },
      { title: 'Forza Horizon 5', year: 2021, note: 'Open-world racing with festival progression and varied events.' },
    ],
    subgenres: ['Arcade racing', 'Racing simulation', 'Kart racing', 'Combat racing'],
    relatedTags: ['Driving', 'Sports', 'Time trial', 'Open world'],
    demoType: 'racing',
    sourceNotes: commonSources,
    accent: '#ef4444',
    imageUrl:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sports',
    name: 'Sports',
    shortDescription:
      'Games that translate athletic rules, timing, teamwork, and competition into play.',
    fullDescription:
      'Sports games adapt real or fictional athletic contests into systems of timing, positioning, tactics, and skill execution. Some emphasize simulation accuracy; others simplify the sport into fast readable decisions.',
    playerFantasy:
      'A decisive moment in competition: the player executes under pressure and changes the score.',
    coreMechanics: ['Aiming or timing', 'Team positioning', 'Rule simulation', 'Stamina or momentum', 'Scoring windows'],
    famousGames: [
      { title: 'FIFA International Soccer', year: 1993, note: 'Helped establish long-running football simulation play.' },
      { title: 'NBA 2K11', year: 2010, note: 'A celebrated basketball sim with strong presentation and controls.' },
      { title: 'Wii Sports', year: 2006, note: 'Made motion-controlled sports accessible to a broad audience.' },
    ],
    subgenres: ['Football/soccer', 'Basketball', 'Tennis', 'Arcade sports'],
    relatedTags: ['Simulation', 'Local multiplayer', 'Competitive', 'Management'],
    demoType: 'sports',
    sourceNotes: commonSources,
    accent: '#eab308',
    imageUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'simulation',
    name: 'Simulation',
    shortDescription:
      'System-driven games that model activities, machines, ecosystems, or real-world processes.',
    fullDescription:
      'Simulation games invite players to operate or shape a model. The model can be realistic, playful, or abstract, but the genre is defined by tuning variables, watching consequences, and learning how the system behaves.',
    playerFantasy:
      'Control over a living system: the player experiments, adjusts, and watches outcomes emerge.',
    coreMechanics: ['System modeling', 'Parameter tuning', 'Cause and effect', 'Growth curves', 'Scenario management'],
    famousGames: [
      { title: 'SimCity', year: 1989, note: 'A landmark city-building simulation about zoning and civic tradeoffs.' },
      { title: 'The Sims', year: 2000, note: 'A life simulation focused on needs, spaces, and social behavior.' },
      { title: 'Microsoft Flight Simulator', year: 1982, note: 'A long-running flight simulation series centered on aircraft realism.' },
    ],
    subgenres: ['Life sim', 'Vehicle sim', 'City builder', 'Management sim'],
    relatedTags: ['Sandbox', 'Creative', 'Economy', 'Realistic'],
    demoType: 'simulation',
    sourceNotes: commonSources,
    accent: '#0ea5e9',
    imageUrl:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=80',
  },
];

export const genreById = new Map(genres.map((genre) => [genre.id, genre]));

export const sourceLinks = [
  ...commonSources,
  {
    label: 'IGDB API: /v4/genres endpoint for future enrichment',
    url: 'https://api-docs.igdb.com/#genres',
  },
];
