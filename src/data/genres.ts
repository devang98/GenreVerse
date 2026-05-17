import type { Genre } from '../types';

const publicImage = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

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

const soulslikeSources = [
  ...commonSources,
  {
    label: 'Wikipedia: Soulslike',
    url: 'https://en.wikipedia.org/wiki/Soulslike',
  },
  {
    label: 'Gameopedia: Difficulty, Deception and Death: The Design of a Souls-Like',
    url: 'https://gameopedia.com/blogs/difficulty-deception-and-death-the-design-of-a-souls-like',
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
      { title: 'Super Mario Bros.', year: 1985, note: 'Defined side-scrolling platform language for generations.', platforms: ['NES'] },
      { title: 'Sonic the Hedgehog', year: 1991, note: 'Turned momentum and speed into the central fantasy.', platforms: ['Sega Genesis'] },
      { title: 'Celeste', year: 2018, note: 'Modern precision platforming with expressive movement.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
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
      { title: 'Doom', year: 1993, note: 'A landmark first-person shooter focused on speed and aggression.', platforms: ['PC'] },
      { title: 'Half-Life 2', year: 2004, note: 'Blended shooting with physics, pacing, and authored set pieces.', platforms: ['PC', 'Xbox 360', 'PlayStation 3'] },
      { title: 'Halo: Combat Evolved', year: 2001, note: 'Popularized console FPS combat loops and shield recovery.', platforms: ['Xbox'] },
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
      { title: 'Tetris', year: 1984, note: 'A foundational falling-block puzzle game built on spatial pressure.', platforms: ['Arcade', 'Multiple platforms'] },
      { title: 'Portal', year: 2007, note: 'A physics puzzle game framed through first-person navigation.', platforms: ['PC', 'Xbox 360', 'PlayStation 3'] },
      { title: 'The Witness', year: 2016, note: 'A large-scale puzzle game about learning visual languages.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
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
      { title: 'Final Fantasy VII', year: 1997, note: 'A major console RPG known for party progression and cinematic story.', platforms: ['PlayStation', 'PC'] },
      { title: 'The Elder Scrolls V: Skyrim', year: 2011, note: 'A broad open-world RPG built around player choice.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
      { title: 'Baldur\'s Gate 3', year: 2023, note: 'A modern party RPG with tactical combat and branching choices.', platforms: ['PC', 'PlayStation'] },
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
      { title: 'Civilization', year: 1991, note: 'A defining 4X strategy game about empire-scale decisions.', platforms: ['PC'] },
      { title: 'StarCraft', year: 1998, note: 'A landmark RTS built on economy, scouting, and execution.', platforms: ['PC'] },
      { title: 'XCOM: Enemy Unknown', year: 2012, note: 'Turn-based tactics with squad risk and permanent consequences.', platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile'] },
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
      { title: 'Gran Turismo', year: 1997, note: 'A major racing sim series focused on cars and handling.', platforms: ['PlayStation'] },
      { title: 'Mario Kart 8', year: 2014, note: 'A famous kart racer built around items, drifting, and party competition.', platforms: ['Nintendo Switch'] },
      { title: 'Forza Horizon 5', year: 2021, note: 'Open-world racing with festival progression and varied events.', platforms: ['Xbox', 'PC'] },
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
      { title: 'FIFA International Soccer', year: 1993, note: 'Helped establish long-running football simulation play.', platforms: ['Multiple platforms'] },
      { title: 'NBA 2K11', year: 2010, note: 'A celebrated basketball sim with strong presentation and controls.', platforms: ['PC', 'PlayStation', 'Xbox'] },
      { title: 'Wii Sports', year: 2006, note: 'Made motion-controlled sports accessible to a broad audience.', platforms: ['Nintendo Wii'] },
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
    id: 'fighting',
    name: 'Fighting',
    shortDescription:
      'Competitive combat games about spacing, timing, reads, combos, and direct matchups.',
    fullDescription:
      'Fighting games focus on small-scale duels where every position, button, block, and whiff matters. Players learn move properties, manage distance, punish mistakes, and turn a single opening into a practiced combo or pressure sequence.',
    playerFantasy:
      'A tense duel of reads: the player wins by understanding both the character and the opponent.',
    coreMechanics: ['Spacing', 'Blocking', 'Combos', 'Punishes', 'Frame advantage'],
    famousGames: [
      { title: 'Street Fighter II', year: 1991, note: 'Helped define modern competitive fighting game structure.', platforms: ['Arcade', 'Multiple platforms'] },
      { title: 'Mortal Kombat', year: 1992, note: 'Made digitized characters and finishing moves culturally iconic.', platforms: ['Arcade', 'Multiple platforms'] },
      { title: 'Tekken 3', year: 1997, note: 'A landmark 3D fighter built around movement, strings, and matchup knowledge.', platforms: ['Arcade', 'PlayStation'] },
    ],
    subgenres: ['2D fighter', '3D fighter', 'Platform fighter', 'Arena fighter'],
    relatedTags: ['Versus', 'Arcade', 'Local multiplayer', 'Competitive'],
    demoType: 'fighting',
    sourceNotes: commonSources,
    accent: '#ec4899',
    imageUrl: publicImage('images/genre-fighting.svg'),
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
      { title: 'SimCity', year: 1989, note: 'A landmark city-building simulation about zoning and civic tradeoffs.', platforms: ['PC', 'Multiple platforms'] },
      { title: 'The Sims', year: 2000, note: 'A life simulation focused on needs, spaces, and social behavior.', platforms: ['PC', 'Multiple platforms'] },
      { title: 'Microsoft Flight Simulator', year: 1982, note: 'A long-running flight simulation series centered on aircraft realism.', platforms: ['PC'] },
    ],
    subgenres: ['Life sim', 'Vehicle sim', 'City builder', 'Management sim'],
    relatedTags: ['Sandbox', 'Creative', 'Economy', 'Realistic'],
    demoType: 'simulation',
    sourceNotes: commonSources,
    accent: '#0ea5e9',
    imageUrl: publicImage('images/genre-simulation.svg'),
  },
  {
    id: 'soulslike',
    name: 'Souls Like',
    shortDescription:
      'Methodical action RPGs about stamina, pattern reading, harsh death loops, and earned mastery.',
    fullDescription:
      'Souls like games are usually action RPGs built around deliberate combat, dangerous worlds, sparse checkpoints, and learning through failure. The player studies enemy timing, commits to attacks, manages stamina and healing, then risks lost currency or progress on the path back from defeat.',
    playerFantasy:
      'Hard-won mastery: the player survives because they learned the world, not because the world became harmless.',
    coreMechanics: [
      'Stamina and animation commitment',
      'Dodge, guard, or parry timing',
      'Bonfire-style checkpoints',
      'Death recovery loop',
      'Boss pattern learning',
    ],
    famousGames: [
      { title: 'Demon\'s Souls', year: 2009, note: 'Established many of the subgenre\'s modern foundations.', platforms: ['PlayStation 3', 'PlayStation 5'] },
      { title: 'Dark Souls', year: 2011, note: 'Popularized bonfire checkpoints, corpse-run recovery, and interconnected world design.', platforms: ['PC', 'PlayStation', 'Xbox'] },
      { title: 'Elden Ring', year: 2022, note: 'Expanded soulslike combat and progression into a broad open-world structure.', platforms: ['PC', 'PlayStation', 'Xbox'] },
    ],
    subgenres: ['Action RPG soulslike', '2D soulslike', 'Soulsborne', 'Boss-rush soulslike'],
    relatedTags: ['High difficulty', 'Stamina combat', 'Dark fantasy', 'Environmental storytelling'],
    demoType: 'soulslike',
    sourceNotes: soulslikeSources,
    accent: '#f43f5e',
    imageUrl: publicImage('images/genre-soulslike.svg'),
  },
  {
    id: 'adventure',
    name: 'Adventure',
    shortDescription:
      'Narrative-driven games centered on exploration, discovery, puzzles, and story progression.',
    fullDescription:
      'Adventure games prioritize storytelling, environmental puzzles, and exploration. Players uncover plot through dialogue, inventory management, and solving environmental challenges. Pacing shifts between story beats and interactive moments.',
    playerFantasy:
      'Discovery of hidden worlds: the player explores, solves mysteries, and uncovers a meaningful story.',
    coreMechanics: ['Exploration', 'Environmental puzzles', 'Dialogue choices', 'Inventory management', 'Story progression'],
    famousGames: [
      { title: 'The Secret of Monkey Island', year: 1990, note: 'A point-and-click adventure balancing humor with clever puzzles.', platforms: ['PC', 'Amiga'] },
      { title: 'Grim Fandango', year: 1998, note: 'A story-driven adventure about death, relationships, and film noir style.', platforms: ['PC', 'PlayStation'] },
      { title: 'Life is Strange', year: 2015, note: 'A narrative adventure with time manipulation and relationship-focused choices.', platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile'] },
    ],
    subgenres: ['Point-and-click', 'Text adventure', 'Interactive drama', 'Narrative adventure'],
    relatedTags: ['Story-rich', 'Puzzle-solving', 'Mystery', 'Character-driven'],
    demoType: 'adventure',
    sourceNotes: commonSources,
    accent: '#d97706',
    imageUrl:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'metroidvania',
    name: 'Metroidvania',
    shortDescription:
      'Exploration games with interconnected worlds, ability-gated progression, and backtracking.',
    fullDescription:
      'Metroidvanias blend platforming with exploration in open interconnected maps. Players gradually unlock new abilities that let them access previously unreachable areas, creating a satisfying loop of discovery, backtracking, and sequence-breaking.',
    playerFantasy:
      'The thrill of seeing the whole world gradually open up through earned power and exploration.',
    coreMechanics: ['Ability gating', 'Interconnected maps', 'Backtracking', 'Secret discovery', 'Boss progression'],
    famousGames: [
      { title: 'Metroid', year: 1986, note: 'Defined the genre with ability-gated exploration and isolated atmosphere.', platforms: ['NES'] },
      { title: 'Castlevania: Symphony of the Night', year: 1997, note: 'A landmark 2D Metroidvania with rich exploration and combat.', platforms: ['PlayStation', 'PC'] },
      { title: 'Hollow Knight', year: 2017, note: 'A modern Metroidvania blending intricate level design with challenging combat.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
    ],
    subgenres: ['Action Metroidvania', '3D Metroidvania', 'Pixel-art Metroidvania', 'Atmospheric Metroidvania'],
    relatedTags: ['Exploration', 'Non-linear', 'Platforming', 'Boss fights'],
    demoType: 'metroidvania',
    sourceNotes: commonSources,
    accent: '#8b5cf6',
    imageUrl:
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'roguelike',
    name: 'Roguelike',
    shortDescription:
      'Turn-based dungeon-crawlers with procedural generation, permanent death, and increasing runs.',
    fullDescription:
      'Roguelikes are turn-based adventures where procedurally generated dungeons reset on death. Players make tactical decisions each run, learning from failure and gradually mastering strategies and item synergies. The goal is depth through iteration, not a single victory.',
    playerFantasy:
      'Strategic mastery through learning: each run teaches new synergies and patterns until victory feels earned.',
    coreMechanics: ['Turn-based exploration', 'Permanent death', 'Procedural generation', 'Item synergy', 'Tactical depth'],
    famousGames: [
      { title: 'Rogue', year: 1980, note: 'The foundational roguelike defined procedural dungeons and permanent death.', platforms: ['Unix', 'PC'] },
      { title: 'Nethack', year: 1987, note: 'A complex turn-based roguelike with legendary depth and community-driven design.', platforms: ['PC', 'Multiple platforms'] },
      { title: 'Hades', year: 2020, note: 'A roguelike action game with narrative progress and gorgeous art.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
    ],
    subgenres: ['Dungeon crawler', 'Tactical roguelike', 'Action roguelike', 'Coffee-break roguelike'],
    relatedTags: ['Turn-based', 'Procedural', 'Death mechanics', 'Replayability'],
    demoType: 'roguelike',
    sourceNotes: commonSources,
    accent: '#f59e0b',
    imageUrl: publicImage('images/genre-roguelike.svg'),
  },
  {
    id: 'roguelite',
    name: 'Roguelite',
    shortDescription:
      'Action games with procedural generation, permadeath, and persistent progression across runs.',
    fullDescription:
      'Roguelites blend roguelike structure with persistent progression. While each run resets the map, players unlock permanent upgrades, better starting gear, or new mechanics that carry forward. Death stings but teaches; runs feel productive even without winning.',
    playerFantasy:
      'Progress through struggle: small victories compound into eventual mastery.',
    coreMechanics: ['Procedural generation', 'Permanent death', 'Persistent upgrades', 'Action-based combat', 'Run-based progression'],
    famousGames: [
      { title: 'The Binding of Isaac', year: 2011, note: 'A roguelite shooter with unlimited synergies and dark humor.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
      { title: 'Spelunky', year: 2008, note: 'A platforming roguelite balancing randomness and mastery-based play.', platforms: ['PC', 'Xbox', 'PlayStation', 'Nintendo Switch'] },
      { title: 'Dead Cells', year: 2018, note: 'A roguelite action-platformer with fluid combat and visual flair.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
    ],
    subgenres: ['Shooter roguelite', 'Action roguelite', 'Platformer roguelite', 'Deck-building roguelite'],
    relatedTags: ['Action', 'Replayability', 'Procedural', 'Persistent progression'],
    demoType: 'roguelite',
    sourceNotes: commonSources,
    accent: '#ec4899',
    imageUrl: publicImage('images/genre-roguelite.svg'),
  },
  {
    id: 'actionrpg',
    name: 'Action RPG',
    shortDescription:
      'Character progression games where real-time combat and skill execution matter as much as stats.',
    fullDescription:
      'Action RPGs combine RPG progression systems with real-time action gameplay. Players develop characters through leveling and equipment, but combat success also depends on reaction time, positioning, and manual timing. The genre sits between tactical RPGs and pure action games.',
    playerFantasy:
      'Becoming stronger through growth, then proving that strength through skilled execution.',
    coreMechanics: ['Character progression', 'Real-time combat', 'Equipment and stat growth', 'Skill execution', 'Exploration'],
    famousGames: [
      { title: 'The Legend of Zelda: Ocarina of Time', year: 1998, note: 'A genre-defining action RPG blending exploration, combat, and puzzle-solving.', platforms: ['Nintendo 64', 'Nintendo Switch'] },
      { title: 'Monster Hunter', year: 2004, note: 'An action RPG about learning enemy patterns and farming loot.', platforms: ['PlayStation', 'PC', 'Nintendo Switch', 'Mobile'] },
      { title: 'Dark Souls', year: 2011, note: 'An action RPG emphasizing skillful combat, exploration, and pattern learning.', platforms: ['PC', 'PlayStation', 'Xbox'] },
    ],
    subgenres: ['Hack-and-slash', 'Character-driven action RPG', 'Boss-rush action RPG', 'Loot-based action RPG'],
    relatedTags: ['Combat-focused', 'Exploration', 'Progression', 'Real-time action'],
    demoType: 'actionrpg',
    sourceNotes: commonSources,
    accent: '#10b981',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mmorpg',
    name: 'MMORPG',
    shortDescription:
      'Multiplayer role-playing games where players cooperate or compete in persistent shared worlds.',
    fullDescription:
      'MMORPGs are persistent online worlds where thousands of players explore, quest, and grow together. Character progression, social bonds, guild structures, and shared economies create emergent gameplay. Players find meaning in the journey, not always the destination.',
    playerFantasy:
      'Belonging to a living world: joining a community, finding your role, and earning respect.',
    coreMechanics: ['Character progression', 'Questing', 'Social bonds', 'Dungeons and raids', 'Economy and crafting'],
    famousGames: [
      { title: 'World of Warcraft', year: 2004, note: 'A landmark MMORPG defining the genre for two decades with rich worlds.', platforms: ['PC', 'Mobile'] },
      { title: 'Final Fantasy XIV', year: 2013, note: 'An MMORPG known for story depth, welcoming community, and regular content.', platforms: ['PC', 'PlayStation'] },
      { title: 'Guild Wars 2', year: 2012, note: 'An action-based MMORPG with dynamic events and player-driven economy.', platforms: ['PC', 'Mobile'] },
    ],
    subgenres: ['Fantasy MMORPG', 'Action MMORPG', 'Sci-fi MMORPG', 'Sandbox MMORPG'],
    relatedTags: ['Multiplayer', 'Community', 'Persistent world', 'Long-form progression'],
    demoType: 'mmorpg',
    sourceNotes: commonSources,
    accent: '#06b6d4',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'moba',
    name: 'MOBA',
    shortDescription:
      'Team-based action strategy games about objective control, character ability synergies, and team coordination.',
    fullDescription:
      'MOBAs pit two teams against each other on a fixed map with clear objectives (usually destroying a base). Each player controls a character with leveling and ability upgrades. Success requires individual skill, team coordination, objective priority, and understanding character synergies.',
    playerFantasy:
      'The thrill of a coordinated teamfight: everyone executing their role perfectly to turn a losing game.',
    coreMechanics: ['Hero selection', 'Leveling and ability upgrades', 'Map objectives', 'Team coordination', 'Economic tradeoffs'],
    famousGames: [
      { title: 'League of Legends', year: 2009, note: 'A genre-defining MOBA with huge esports presence and accessibility.', platforms: ['PC', 'Mobile'] },
      { title: 'Dota 2', year: 2013, note: 'A deep tactical MOBA with complex hero abilities and high skill ceiling.', platforms: ['PC', 'Mobile'] },
      { title: 'Heroes of the Storm', year: 2015, note: 'A team-focused MOBA with cross-franchise heroes and objective variety.', platforms: ['PC', 'Mobile'] },
    ],
    subgenres: ['Lane-based MOBA', 'Objective-focused MOBA', 'Fantasy MOBA', 'Mobile MOBA'],
    relatedTags: ['Competitive', 'Team-based', 'Esports', 'Tactical'],
    demoType: 'moba',
    sourceNotes: commonSources,
    accent: '#6366f1',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cardgame',
    name: 'Card Game',
    shortDescription:
      'Games centered on deck-building, card synergies, and strategic decision-making with a limited hand.',
    fullDescription:
      'Card games translate strategy into turn-based card play. Players build decks, draw from limited hands, and make tactical decisions under resource constraints. Success comes from understanding card synergies, reading opponents, and adapting strategies dynamically.',
    playerFantasy:
      'The satisfying synergy of a well-built deck executing perfectly in a critical moment.',
    coreMechanics: ['Deck-building', 'Hand management', 'Resource economy', 'Card synergy', 'Turn structure'],
    famousGames: [
      { title: 'Magic: The Gathering', year: 1993, note: 'A pioneering trading card game with decades of strategy and community.', platforms: ['Physical', 'PC', 'Mobile'] },
      { title: 'Hearthstone', year: 2014, note: 'A digital collectible card game known for accessibility and strategic depth.', platforms: ['PC', 'PlayStation', 'Mobile'] },
      { title: 'Slay the Spire', year: 2017, note: 'A deck-building roguelike that redefined card games for indie audiences.', platforms: ['PC', 'Nintendo Switch', 'PlayStation', 'Mobile'] },
    ],
    subgenres: ['Trading card game', 'Collectible card game', 'Deck-building roguelike', 'Auto-battler card game'],
    relatedTags: ['Strategy', 'Deck-building', 'Turn-based', 'Competitive'],
    demoType: 'cardgame',
    sourceNotes: commonSources,
    accent: '#ef4444',
    imageUrl:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rhythm',
    name: 'Rhythm',
    shortDescription:
      'Music-driven games where timing button presses or gestures to beat patterns is the core challenge.',
    fullDescription:
      'Rhythm games judge player inputs against a musical timeline. Perfect, good, or missed timing creates cascading scores and visual feedback. The genre is built on precision, flow state, and the pleasure of synchronizing with music.',
    playerFantasy:
      'Perfect flow: the player becomes one with the music through precise rhythmic execution.',
    coreMechanics: ['Timing precision', 'Beat reading', 'Input sequencing', 'Scoring multipliers', 'Visual feedback'],
    famousGames: [
      { title: 'Dance Dance Revolution', year: 1998, note: 'An arcade rhythm game that defined step-dance mechanics globally.', platforms: ['Arcade', 'PlayStation', 'PC'] },
      { title: 'Guitar Hero', year: 2007, note: 'A rhythm game with physical guitar controller that made rhythm games mainstream.', platforms: ['Multiple platforms'] },
      { title: 'Crypt of the NecroDancer', year: 2015, note: 'A roguelike where all movement and combat must follow the beat.', platforms: ['PC', 'Nintendo Switch', 'PlayStation', 'Mobile'] },
    ],
    subgenres: ['Dance game', 'Guitar/instrument simulator', 'Rhythm action', 'Music puzzle'],
    relatedTags: ['Music', 'Timing', 'Precision', 'Flow state'],
    demoType: 'rhythm',
    sourceNotes: commonSources,
    accent: '#ec4899',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'survival',
    name: 'Survival',
    shortDescription:
      'Resource management games where players balance hunger, health, crafting, and environmental threats.',
    fullDescription:
      'Survival games place players in harsh worlds where basic needs—food, shelter, safety—become the main pressure. Players gather resources, craft tools, manage inventory, and decide when to push forward vs. consolidate. The genre blends exploration, management, and personal risk.',
    playerFantasy:
      'Overcoming nature: the player adapts, builds, and gradually tames a hostile world through preparation.',
    coreMechanics: ['Resource gathering', 'Crafting', 'Health/hunger management', 'Base building', 'Environmental hazards'],
    famousGames: [
      { title: 'Minecraft', year: 2011, note: 'A sandbox survival game about building, exploring, and surviving in procedural worlds.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
      { title: 'Don\'t Starve', year: 2013, note: 'A roguelike survival game with dark humor and constant resource pressure.', platforms: ['PC', 'PlayStation', 'Mobile'] },
      { title: 'The Long Dark', year: 2014, note: 'An atmospheric survival game focused on wilderness immersion and danger.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
    ],
    subgenres: ['Crafting survival', 'Sandbox survival', 'Simulation survival', 'Urban survival'],
    relatedTags: ['Resource management', 'Base building', 'Exploration', 'Permadeath'],
    demoType: 'survival',
    sourceNotes: commonSources,
    accent: '#10b981',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'visualnovel',
    name: 'Visual Novel',
    shortDescription:
      'Narrative experiences with branching choices, character relationships, and story-driven gameplay.',
    fullDescription:
      'Visual novels are interactive novels where players read narrative, make dialogue or plot choices, and experience branching stories. Art, music, and writing carry the experience. Multiple playthroughs reveal different endings and character arcs.',
    playerFantasy:
      'Agency in storytelling: the player\'s choices shape the narrative and determine character relationships.',
    coreMechanics: ['Dialogue choices', 'Story branching', 'Character relationships', 'Multiple endings', 'Text progression'],
    famousGames: [
      { title: 'Steins;Gate', year: 2009, note: 'A science-fiction visual novel about time travel with beloved characters.', platforms: ['Multiple platforms'] },
      { title: 'Doki Doki Literature Club', year: 2017, note: 'A deceptive visual novel subverting genre expectations with meta-narrative.', platforms: ['PC', 'Nintendo Switch', 'PlayStation'] },
      { title: 'Hades', year: 2020, note: 'A roguelike with visual novel-style character interactions and dynamic dialogue.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
    ],
    subgenres: ['Dating sim', 'Kinetic novel', 'Interactive fiction', 'Story-driven visual novel'],
    relatedTags: ['Story-rich', 'Narrative choice', 'Character-driven', 'Text-based'],
    demoType: 'visualnovel',
    sourceNotes: commonSources,
    accent: '#f472b6',
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tacticalrpg',
    name: 'Tactical RPG',
    shortDescription:
      'Turn-based strategy games combining RPG progression with grid-based tactical combat.',
    fullDescription:
      'Tactical RPGs blend character progression and story with grid-based combat. Positioning, terrain, unit abilities, and turn order become critical. Players command squads through tactical challenges, leveling characters and unlocking abilities between battles.',
    playerFantasy:
      'Masterful command: the player outthinks opponents by positioning units perfectly and leveraging synergies.',
    coreMechanics: ['Grid-based positioning', 'Turn-based combat', 'Character leveling', 'Terrain advantage', 'Squad composition'],
    famousGames: [
      { title: 'Fire Emblem', year: 1990, note: 'A landmark tactical RPG series with permadeath, relationships, and strategy.', platforms: ['Multiple platforms'] },
      { title: 'XCOM 2', year: 2016, note: 'A tactical RPG about humanity\'s last stand with permadeath and consequence.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
      { title: 'Divinity: Original Sin 2', year: 2017, note: 'A tactical RPG with deep environmental interaction and cooperative gameplay.', platforms: ['PC', 'PlayStation', 'Xbox'] },
    ],
    subgenres: ['Grid-based tactics', 'Squad command', 'Isometric TRPG', 'Story-driven tactics'],
    relatedTags: ['Turn-based', 'Strategic positioning', 'Character progression', 'Story-rich'],
    demoType: 'tacticalrpg',
    sourceNotes: commonSources,
    accent: '#8b5cf6',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'deckbuilder',
    name: 'Deck Builder',
    shortDescription:
      'Strategy games where building and tuning a custom deck of cards is central to winning.',
    fullDescription:
      'Deck-building games place the meta-game of card selection above single-game tactics. Players gradually unlock or purchase cards to construct synergistic decks. The genre rewards experimentation and theory-crafting outside of actual matches.',
    playerFantasy:
      'Crafting the perfect deck and watching it execute flawlessly against opponents.',
    coreMechanics: ['Deck construction', 'Card synergy', 'Resource economy', 'Meta-game', 'Strategic building'],
    famousGames: [
      { title: 'Magic: The Gathering Arena', year: 2018, note: 'A digital CCG focusing on deck-building and competitive meta-game.', platforms: ['PC', 'Mobile'] },
      { title: 'Legends of Runeterra', year: 2020, note: 'A tactical card game with deck-building and innovative mechanics.', platforms: ['PC', 'Mobile'] },
      { title: 'Marvel Snap', year: 2022, note: 'A fast-paced deck-builder emphasizing quick matches and collection building.', platforms: ['PC', 'Mobile', 'Console'] },
    ],
    subgenres: ['Competitive deck-builder', 'Digital CCG', 'Limited deck-building', 'Roguelike deck-builder'],
    relatedTags: ['Strategy', 'Deck construction', 'Meta-game', 'Collection'],
    demoType: 'deckbuilder',
    sourceNotes: commonSources,
    accent: '#f59e0b',
    imageUrl:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'turnbasedstrategy',
    name: 'Turn-Based Strategy',
    shortDescription:
      'Large-scale strategy games where planning, positioning, and economy develop across extended turns.',
    fullDescription:
      'Turn-based strategies give players time to think through every decision. Economies grow, armies accumulate, diplomacy shifts, and long-term plans unfold over potentially hundreds of turns. The genre is about outthinking opponents through patience and foresight.',
    playerFantasy:
      'Strategic mastery: the player\'s careful planning and long-term vision defeats opponents.',
    coreMechanics: ['Resource management', 'Territory control', 'Diplomacy', 'Technology trees', 'Military planning'],
    famousGames: [
      { title: 'Civilization VI', year: 2016, note: 'A 4X strategy about building civilizations from ancient to modern era.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
      { title: 'Total War: Warhammer III', year: 2022, note: 'A strategy game blending grand strategy with real-time tactical battles.', platforms: ['PC'] },
      { title: 'Crusader Kings III', year: 2020, note: 'A dynastic strategy game about building empires across generations.', platforms: ['PC'] },
    ],
    subgenres: ['4X', 'Grand strategy', 'Wargame', 'Asynchronous strategy'],
    relatedTags: ['Planning', 'Diplomacy', 'Long-form', 'Competitive'],
    demoType: 'turnbasedstrategy',
    sourceNotes: commonSources,
    accent: '#06b6d4',
    imageUrl:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'realtimestrategy',
    name: 'Real-Time Strategy',
    shortDescription:
      'Action strategy games where resource gathering, base building, and unit production happen in real-time.',
    fullDescription:
      'Real-time strategies demand economic management and tactical decisions simultaneously. Players build bases, gather resources, train units, and engage enemies without pausing. Success requires multitasking, quick decision-making, and adaptation.',
    playerFantasy:
      'Rapid adaptation: the player manages chaos through quick decisions and superior strategy.',
    coreMechanics: ['Base building', 'Resource gathering', 'Unit production', 'Micromanagement', 'Real-time tactics'],
    famousGames: [
      { title: 'StarCraft II', year: 2010, note: 'A landmark RTS balancing three asymmetrical factions and demanding execution.', platforms: ['PC', 'Mobile'] },
      { title: 'Age of Empires IV', year: 2021, note: 'A historical RTS about leading civilizations through ages and warfare.', platforms: ['PC'] },
      { title: 'They Are Billions', year: 2019, note: 'A RTS roguelike about defending against procedural zombie waves.', platforms: ['PC', 'Nintendo Switch'] },
    ],
    subgenres: ['Sci-fi RTS', 'Historical RTS', 'Tower defense RTS', 'MOBA-inspired RTS'],
    relatedTags: ['Real-time', 'Base management', 'Competitive', 'Esports'],
    demoType: 'realtimestrategy',
    sourceNotes: commonSources,
    accent: '#14b8a6',
    imageUrl:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'idleclicker',
    name: 'Idle/Clicker',
    shortDescription:
      'Games where progress happens through repetitive actions or passive generation while player is away.',
    fullDescription:
      'Idle games reward clicking or tapping with incremental progress and unlocks. Many can progress while the player is idle. The appeal lies in satisfying feedback loops, watching numbers grow, and returning to find progress made without effort.',
    playerFantasy:
      'Effortless achievement: watching a system grow and multiply with minimal input.',
    coreMechanics: ['Clicking/tapping', 'Passive generation', 'Number growth', 'Upgrades and multipliers', 'Prestige systems'],
    famousGames: [
      { title: 'Cookie Clicker', year: 2013, note: 'A foundational idle game about clicking to make cookies and buying upgrades.', platforms: ['PC', 'Mobile'] },
      { title: 'Clicker Heroes', year: 2014, note: 'An idle game combining clicking with RPG progression and prestige loops.', platforms: ['PC', 'Mobile', 'Console'] },
      { title: 'Realm Grinder', year: 2014, note: 'An idle game blending strategy and RPG with faction systems.', platforms: ['PC', 'Mobile'] },
    ],
    subgenres: ['Incremental game', 'Passive idle', 'Active clicker', 'Prestige-based idle'],
    relatedTags: ['Casual', 'Incremental growth', 'Prestige', 'Long-term'],
    demoType: 'idleclicker',
    sourceNotes: commonSources,
    accent: '#f97316',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'dungeoncrawler',
    name: 'Dungeon Crawler',
    shortDescription:
      'First-person grid-based explorations of procedural dungeons with enemy encounters and loot.',
    fullDescription:
      'Dungeon crawlers place players in first-person perspective navigating grid-based mazes. Enemies ambush from darkness, loot awaits discovery, and careful resource management keeps players alive. The genre emphasizes atmosphere, surprise, and careful exploration.',
    playerFantasy:
      'Delving into mystery: the player discovers secrets in a dark, dangerous environment.',
    coreMechanics: ['Grid-based navigation', 'First-person perspective', 'Enemy encounters', 'Resource management', 'Procedural generation'],
    famousGames: [
      { title: 'Wizardry', year: 1981, note: 'A pioneering first-person dungeon crawler about surviving deep dungeons.', platforms: ['Apple II', 'PC'] },
      { title: 'The Elder Scrolls: Blades', year: 2019, note: 'A first-person dungeon crawler with streamlined exploration and combat.', platforms: ['Nintendo Switch', 'Mobile'] },
      { title: 'Everspace', year: 2016, note: 'A sci-fi dungeon crawler roguelike in first-person shooter perspective.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'] },
    ],
    subgenres: ['Grid-based dungeon crawler', 'FPS dungeon crawler', 'Sci-fi dungeon crawler', 'Roguelike dungeon crawler'],
    relatedTags: ['Exploration', 'Procedural', 'First-person', 'Dark atmosphere'],
    demoType: 'dungeoncrawler',
    sourceNotes: commonSources,
    accent: '#6b7280',
    imageUrl:
      'https://images.unsplash.com/photo-1538481143235-8d3c3f29f1a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hacknslash',
    name: 'Hack and Slash',
    shortDescription:
      'Action games emphasizing melee combat, combos, and defeating streams of enemies.',
    fullDescription:
      'Hack-and-slash games focus on satisfying melee combat against waves or hordes of enemies. Players learn attack chains, timing dodges, and managing crowd control. The appeal is flow state, visual spectacle, and the pleasure of executing practiced combos.',
    playerFantasy:
      'Effortless power: the player wades through enemies with practiced skill and style.',
    coreMechanics: ['Melee combos', 'Dodge timing', 'Crowd control', 'Special abilities', 'Enemy variety'],
    famousGames: [
      { title: 'Devil May Cry', year: 2001, note: 'A genre-defining action game about stylish melee combat and combos.', platforms: ['PlayStation', 'PC'] },
      { title: 'God of War', year: 2018, note: 'A narrative hack-and-slash blending epic story with fluid combat.', platforms: ['PlayStation', 'PC'] },
      { title: 'Bayonetta', year: 2009, note: 'A stylish action game built around weapon variety and combo depth.', platforms: ['Xbox 360', 'PlayStation', 'PC', 'Nintendo Switch'] },
    ],
    subgenres: ['Combo-focused action', 'Weapon-switching action', 'Narrative action', 'Character action game'],
    relatedTags: ['Combat-focused', 'Stylish', 'Melee', 'Crowd control'],
    demoType: 'hacknslash',
    sourceNotes: commonSources,
    accent: '#dc2626',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'twinstickshooter',
    name: 'Twin-Stick Shooter',
    shortDescription:
      'Top-down action games where one stick aims and the other moves, blending mobility with precision.',
    fullDescription:
      'Twin-stick shooters use dual analog sticks—one for movement, one for aiming—creating games demanding simultaneous precision and positioning. Waves of enemies, power-ups, and increasing difficulty create escalating intensity.',
    playerFantasy:
      'Perfect control under pressure: the player dances through enemy fire with precise aim.',
    coreMechanics: ['Dual-stick control', 'Precision aiming', 'Positioning', 'Wave progression', 'Power-up collection'],
    famousGames: [
      { title: 'Robotron: 2084', year: 1982, note: 'A pioneering twin-stick arcade shooter about controlling chaos.', platforms: ['Arcade', 'Multiple platforms'] },
      { title: 'Binding of Isaac', year: 2011, note: 'A twin-stick roguelike shooter blending bullet-hell with procedural generation.', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'] },
      { title: 'Baba Is You', year: 2019, note: 'A unique puzzle-action game subverting shooter conventions.', platforms: ['PC', 'Nintendo Switch'] },
    ],
    subgenres: ['Arcade twin-stick', 'Roguelike twin-stick', 'Bullet-hell twin-stick', 'Cooperative twin-stick'],
    relatedTags: ['Action', 'Arcade', 'Precision', 'Top-down'],
    demoType: 'twinstickshooter',
    sourceNotes: commonSources,
    accent: '#8b5cf6',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'shmup',
    name: 'Shmup',
    shortDescription:
      'Shoot-em-up games where vertical or horizontal scrolling and bullet dodging are central challenges.',
    fullDescription:
      'Shmups (shooters) automate player movement along a path while demanding precision dodging of dense bullet patterns. Difficulty escalates through patterns, enemy variety, and bullet-hell intensity. The genre rewards pattern learning and muscle memory.',
    playerFantasy:
      'Navigating the impossible: the player dodges through walls of bullets with perfect timing.',
    coreMechanics: ['Bullet dodging', 'Scrolling movement', 'Power-up collection', 'Pattern learning', 'Scoring multipliers'],
    famousGames: [
      { title: 'Galaga', year: 1981, note: 'A classic fixed-screen shooter about precision aiming and dodging.', platforms: ['Arcade', 'Multiple platforms'] },
      { title: 'Touhou Project', year: 2002, note: 'A bullet-hell shmup series known for intricate patterns and music.', platforms: ['PC'] },
      { title: '1942', year: 1984, note: 'A vertical scrolling shmup defining the genre\'s fundamentals.', platforms: ['Arcade', 'Multiple platforms'] },
    ],
    subgenres: ['Vertical shmup', 'Horizontal shmup', 'Bullet-hell', 'Arcade shmup'],
    relatedTags: ['Action', 'Precision', 'Arcade', 'High score'],
    demoType: 'shmup',
    sourceNotes: commonSources,
    accent: '#f59e0b',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tradingcardgame',
    name: 'Trading Card Game',
    shortDescription:
      'Physical or digital card games where players collect, trade, and build decks to compete.',
    fullDescription:
      'Trading card games build value around collecting rare cards. Players construct decks from their collection, play against opponents, and hunt for powerful or rare cards. Secondary markets and community trading create emergent social systems.',
    playerFantasy:
      'Collecting the perfect cards and building a deck that dominates opponents.',
    coreMechanics: ['Card collecting', 'Deck building', 'Card trading', 'Rarity tiers', 'Competitive play'],
    famousGames: [
      { title: 'Pokémon Trading Card Game', year: 1996, note: 'A foundational TCG about collecting Pokémon cards and competing.', platforms: ['Physical', 'Digital'] },
      { title: 'Yu-Gi-Oh!', year: 1999, note: 'A strategic TCG with complex card interactions and tournament play.', platforms: ['Physical', 'Digital'] },
      { title: 'Magic: The Gathering', year: 1993, note: 'A pioneering TCG with decades of strategy, formats, and community.', platforms: ['Physical', 'Digital'] },
    ],
    subgenres: ['Fantasy TCG', 'Anime TCG', 'Sports TCG', 'Digital TCG'],
    relatedTags: ['Collecting', 'Trading', 'Competitive', 'Community'],
    demoType: 'tradingcardgame',
    sourceNotes: commonSources,
    accent: '#10b981',
    imageUrl:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'autobattler',
    name: 'Auto-Battler',
    shortDescription:
      'Strategy games where you assemble and position units that fight automatically, then watch them battle.',
    fullDescription:
      'Auto-battlers shift the genre focus from real-time control to pre-battle composition and positioning. Players recruit units, place them on a board, and watch them auto-attack. Strategy lies in synergies, positioning, and adapting to opponent compositions.',
    playerFantasy:
      'The perfect team composition destroying opponents without requiring manual control.',
    coreMechanics: ['Unit recruitment', 'Positioning strategy', 'Synergy exploitation', 'Automatic combat', 'Economic management'],
    famousGames: [
      { title: 'Dota Auto Chess', year: 2019, note: 'A mod that spawned auto-battler genre emphasizing synergy and positioning.', platforms: ['PC', 'Mobile'] },
      { title: 'Teamfight Tactics', year: 2019, note: 'Riot\'s auto-battler refining the genre with League of Legends integration.', platforms: ['PC', 'Mobile'] },
      { title: 'Underlords', year: 2019, note: 'Valve\'s auto-battler entry focusing on draft variety and strategy.', platforms: ['PC', 'Mobile'] },
    ],
    subgenres: ['Synergy-focused auto-battler', 'Draft-based auto-battler', 'Fast auto-battler', 'Complex auto-battler'],
    relatedTags: ['Strategy', 'Composition', 'Synergy', 'Competitive'],
    demoType: 'autobattler',
    sourceNotes: commonSources,
    accent: '#6366f1',
    imageUrl:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
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
