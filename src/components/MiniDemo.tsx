import { Pause, Play, RotateCcw, Send, Shield, Zap } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { Genre } from '../types';

type MiniDemoProps = {
  genre: Genre;
};

export function MiniDemo({ genre }: MiniDemoProps) {
  return (
    <section className="demo-panel" style={{ '--accent': genre.accent } as CSSProperties}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Playable sample</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">{genre.name} mechanic</h2>
        </div>
        <span className="demo-badge">{genre.demoType}</span>
      </div>

      <div className="mt-6">
        {genre.demoType === 'platformer' && <PlatformerDemo />}
        {genre.demoType === 'shooter' && <ShooterDemo />}
        {genre.demoType === 'puzzle' && <PuzzleDemo />}
        {genre.demoType === 'rpg' && <RpgDemo />}
        {genre.demoType === 'strategy' && <StrategyDemo />}
        {genre.demoType === 'racing' && <RacingDemo />}
        {genre.demoType === 'sports' && <SportsDemo />}
        {genre.demoType === 'fighting' && <FightingDemo />}
        {genre.demoType === 'simulation' && <SimulationDemo />}
        {genre.demoType === 'soulslike' && <SoulslikeDemo />}
        {genre.demoType === 'adventure' && <AdventureDemo />}
        {genre.demoType === 'metroidvania' && <MetroidvaniaDemo />}
        {genre.demoType === 'roguelike' && <RoguelikeDemo />}
        {genre.demoType === 'roguelite' && <RogueLiteDemo />}
        {genre.demoType === 'actionrpg' && <ActionRpgDemo />}
        {genre.demoType === 'mmorpg' && <MmorpgDemo />}
        {genre.demoType === 'moba' && <MobaDemo />}
        {genre.demoType === 'cardgame' && <CardGameDemo />}
        {genre.demoType === 'rhythm' && <RhythmDemo />}
        {genre.demoType === 'survival' && <SurvivalDemo />}
        {genre.demoType === 'visualnovel' && <VisualNovelDemo />}
        {genre.demoType === 'tacticalrpg' && <TacticalRpgDemo />}
        {genre.demoType === 'deckbuilder' && <DeckBuilderDemo />}
        {genre.demoType === 'turnbasedstrategy' && <TurnBasedStrategyDemo />}
        {genre.demoType === 'realtimestrategy' && <RealTimeStrategyDemo />}
        {genre.demoType === 'idleclicker' && <IdleClickerDemo />}
        {genre.demoType === 'dungeoncrawler' && <DungeonCrawlerDemo />}
        {genre.demoType === 'hacknslash' && <HackNSlashDemo />}
        {genre.demoType === 'twinstickshooter' && <TwinStickShooterDemo />}
        {genre.demoType === 'shmup' && <ShmupDemo />}
        {genre.demoType === 'tradingcardgame' && <TradingCardGameDemo />}
        {genre.demoType === 'autobattler' && <AutoBattlerDemo />}
      </div>
    </section>
  );
}

function PlatformerDemo() {
  const [jumping, setJumping] = useState(false);
  const [jumps, setJumps] = useState(0);

  function jump() {
    if (jumping) return;
    setJumping(true);
    setJumps((value) => value + 1);
    window.setTimeout(() => setJumping(false), 520);
  }

  return (
    <div className="demo-stack">
      <div className="platform-stage" tabIndex={0} onKeyDown={(event) => event.code === 'Space' && jump()}>
        <span className={`platform-hero ${jumping ? 'is-jumping' : ''}`} />
        <span className="platform-block block-a" />
        <span className="platform-block block-b" />
        <span className="coin" />
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={jump} type="button">
          <Zap size={18} aria-hidden="true" />
          Jump
        </button>
        <p className="demo-score">Jumps: {jumps}</p>
      </div>
    </div>
  );
}

function ShooterDemo() {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState({ left: 58, top: 34 });

  function hitTarget() {
    setScore((value) => value + 1);
    setTarget({
      left: 12 + Math.round(Math.random() * 70),
      top: 14 + Math.round(Math.random() * 56),
    });
  }

  return (
    <div className="demo-stack">
      <div className="shooter-stage">
        <button
          aria-label="Target"
          className="target-button"
          onClick={hitTarget}
          style={{ left: `${target.left}%`, top: `${target.top}%` }}
          type="button"
        />
        <span className="reticle" />
      </div>
      <div className="demo-actions">
        <p className="demo-score">Clean hits: {score}</p>
        <button className="secondary-action" onClick={() => setScore(0)} type="button">
          <RotateCcw size={17} aria-hidden="true" />
          Reset
        </button>
      </div>
    </div>
  );
}

function PuzzleDemo() {
  const [tiles, setTiles] = useState(['N', 'S', 'U']);
  const [selected, setSelected] = useState<number | null>(null);
  const solved = tiles.join('') === 'SUN';

  function selectTile(index: number) {
    if (selected === null) {
      setSelected(index);
      return;
    }

    setTiles((current) => {
      const next = [...current];
      [next[selected], next[index]] = [next[index], next[selected]];
      return next;
    });
    setSelected(null);
  }

  return (
    <div className="demo-stack">
      <div className="puzzle-board">
        {tiles.map((tile, index) => (
          <button
            className={`puzzle-tile ${selected === index ? 'is-selected' : ''}`}
            key={`${tile}-${index}`}
            onClick={() => selectTile(index)}
            type="button"
          >
            {tile}
          </button>
        ))}
      </div>
      <div className="demo-actions">
        <p className="demo-score">{solved ? 'Solved pattern' : 'Pattern shifted'}</p>
        <button className="secondary-action" onClick={() => setTiles(['N', 'S', 'U'])} type="button">
          <RotateCcw size={17} aria-hidden="true" />
          Shuffle
        </button>
      </div>
    </div>
  );
}

function RpgDemo() {
  const [choice, setChoice] = useState('Aid the scout');
  const outcomes: Record<string, string> = {
    'Aid the scout': '+2 reputation, new forest route',
    'Demand payment': '+40 gold, scout remembers',
    'Ask for rumors': '+1 clue, hidden shrine marked',
  };

  return (
    <div className="demo-stack">
      <div className="rpg-window">
        <p className="rpg-speaker">Roadside scout</p>
        <p className="mt-3 text-lg font-bold text-slate-950">The bridge is out. I know another path.</p>
        <div className="mt-5 grid gap-2">
          {Object.keys(outcomes).map((option) => (
            <button
              className={`choice-button ${choice === option ? 'choice-button-active' : ''}`}
              key={option}
              onClick={() => setChoice(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <p className="demo-score">Outcome: {outcomes[choice]}</p>
    </div>
  );
}

function StrategyDemo() {
  const [selectedUnits, setSelectedUnits] = useState(['Scout']);
  const control = Math.min(100, 24 + selectedUnits.length * 18);
  const units = ['Scout', 'Builder', 'Archer', 'Guard'];

  function toggleUnit(unit: string) {
    setSelectedUnits((current) =>
      current.includes(unit) ? current.filter((item) => item !== unit) : [...current, unit],
    );
  }

  return (
    <div className="demo-stack">
      <div className="strategy-map">
        {units.map((unit, index) => (
          <button
            className={`unit-token unit-${index} ${selectedUnits.includes(unit) ? 'unit-selected' : ''}`}
            key={unit}
            onClick={() => toggleUnit(unit)}
            type="button"
          >
            {unit.slice(0, 1)}
          </button>
        ))}
        <span className="resource-node" />
      </div>
      <div>
        <div className="meter">
          <span style={{ width: `${control}%` }} />
        </div>
        <div className="demo-actions mt-3">
          <p className="demo-score">Map control: {control}%</p>
          <button className="primary-action" type="button">
            <Shield size={18} aria-hidden="true" />
            Hold
          </button>
        </div>
      </div>
    </div>
  );
}

function RacingDemo() {
  const [lane, setLane] = useState(1);
  const [running, setRunning] = useState(true);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => setDistance((value) => value + 1), 420);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div className="demo-stack">
      <div className="racing-track">
        {[0, 1, 2].map((trackLane) => (
          <span className="lane-line" key={trackLane} />
        ))}
        <span className="car" style={{ left: `${16 + lane * 30}%` }} />
        <span className="rival-car" />
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={() => setLane((value) => Math.max(0, value - 1))} type="button">
          Left
        </button>
        <button className="secondary-action" onClick={() => setLane((value) => Math.min(2, value + 1))} type="button">
          Right
        </button>
        <button className="primary-action" onClick={() => setRunning((value) => !value)} type="button">
          {running ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          {running ? 'Pause' : 'Run'}
        </button>
        <p className="demo-score">Distance: {distance}</p>
      </div>
    </div>
  );
}

function SportsDemo() {
  const [power, setPower] = useState(44);
  const [direction, setDirection] = useState(1);
  const [shots, setShots] = useState(0);
  const made = power >= 45 && power <= 65;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPower((value) => {
        if (value >= 96) setDirection(-1);
        if (value <= 6) setDirection(1);
        return value + direction * 4;
      });
    }, 120);
    return () => window.clearInterval(timer);
  }, [direction]);

  return (
    <div className="demo-stack">
      <div className="sports-court">
        <span className="goal-ring" />
        <span className={`ball ${made ? 'ball-made' : ''}`} />
      </div>
      <div className="meter sports-meter">
        <span style={{ width: `${power}%` }} />
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={() => setShots((value) => value + 1)} type="button">
          <Send size={18} aria-hidden="true" />
          Shoot
        </button>
        <p className="demo-score">{shots === 0 ? 'Ready' : made ? 'Shot made' : 'Rim out'}</p>
      </div>
    </div>
  );
}

function FightingDemo() {
  const [range, setRange] = useState(54);
  const [guard, setGuard] = useState(68);
  const [combo, setCombo] = useState(0);
  const inRange = range >= 42 && range <= 66;

  function advance() {
    setRange((value) => Math.min(88, value + 8));
  }

  function retreat() {
    setRange((value) => Math.max(12, value - 8));
    setGuard((value) => Math.min(100, value + 7));
  }

  function strike() {
    if (!inRange) {
      setCombo(0);
      setGuard((value) => Math.max(0, value - 8));
      return;
    }

    setCombo((value) => value + 1);
    setGuard((value) => Math.max(0, value - 18));
  }

  return (
    <div className="demo-stack">
      <div className="fighting-stage">
        <span className="fighter fighter-player" style={{ left: `${range - 28}%` }} />
        <span className="fighter fighter-rival" style={{ left: `${range + 18}%` }} />
        <span className={`hit-spark ${inRange ? 'is-live' : ''}`} />
      </div>
      <div>
        <div className="meter guard-meter">
          <span style={{ width: `${guard}%` }} />
        </div>
        <div className="demo-actions mt-3">
          <button className="secondary-action" onClick={retreat} type="button">
            Backstep
          </button>
          <button className="secondary-action" onClick={advance} type="button">
            Step in
          </button>
          <button className="primary-action" onClick={strike} type="button">
            <Zap size={18} aria-hidden="true" />
            Strike
          </button>
          <p className="demo-score">{inRange ? `Combo: ${combo}` : 'Out of range'}</p>
        </div>
      </div>
    </div>
  );
}

function SimulationDemo() {
  const [housing, setHousing] = useState(52);
  const [parks, setParks] = useState(34);
  const [transit, setTransit] = useState(46);

  const cityScore = useMemo(() => Math.round(housing * 0.34 + parks * 0.28 + transit * 0.38), [housing, parks, transit]);

  return (
    <div className="demo-stack">
      <div className="city-grid">
        <span className="tower" style={{ height: `${40 + housing * 0.7}px` }} />
        <span className="park" style={{ transform: `scale(${0.7 + parks / 160})` }} />
        <span className="rail" style={{ width: `${70 + transit * 1.2}px` }} />
      </div>
      <div className="slider-grid">
        <Slider label="Housing" value={housing} onChange={setHousing} />
        <Slider label="Parks" value={parks} onChange={setParks} />
        <Slider label="Transit" value={transit} onChange={setTransit} />
      </div>
      <p className="demo-score">City stability: {cityScore}%</p>
    </div>
  );
}

function SoulslikeDemo() {
  const [stamina, setStamina] = useState(100);
  const [enemyGuard, setEnemyGuard] = useState(74);
  const [souls, setSouls] = useState(420);
  const [lostSouls, setLostSouls] = useState(0);
  const [message, setMessage] = useState('Read the opening. Commit when stamina is ready.');
  const exhausted = stamina < 22;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStamina((value) => Math.min(100, value + 5));
      setEnemyGuard((value) => Math.min(100, value + 3));
    }, 300);
    return () => window.clearInterval(timer);
  }, []);

  function strike() {
    if (exhausted) {
      setMessage('Too winded. Step back and let stamina return.');
      return;
    }

    const nextGuard = Math.max(0, enemyGuard - 28);
    setStamina((value) => Math.max(0, value - 24));
    setEnemyGuard(nextGuard);
    if (nextGuard === 0) {
      setSouls((value) => value + 120);
      setEnemyGuard(100);
      setMessage('Posture broken. The next route opens.');
      return;
    }

    setMessage('Hit landed. Watch the counter swing.');
  }

  function dodge() {
    if (stamina < 16) {
      setMessage('No roll left. Greed got punished.');
      return;
    }

    setStamina((value) => Math.max(0, value - 16));
    setMessage('Clean dodge. Small window earned.');
  }

  function fall() {
    setLostSouls(souls);
    setSouls(0);
    setStamina(100);
    setEnemyGuard(74);
    setMessage('You fell. Recover the dropped souls before the next mistake.');
  }

  function recover() {
    if (lostSouls === 0) {
      setMessage('No bloodstain waiting. Keep pushing toward the next rest point.');
      return;
    }

    setSouls((value) => value + lostSouls);
    setLostSouls(0);
    setMessage('Recovered. The run is alive again.');
  }

  return (
    <div className="demo-stack">
      <div className="soulslike-stage">
        <span className={`soulslike-hero ${exhausted ? 'is-exhausted' : ''}`} />
        <span className="soulslike-boss" />
        <span className="soulslike-bonfire" />
        {lostSouls > 0 && <button className="bloodstain" onClick={recover} type="button">Recover</button>}
      </div>

      <div className="soulslike-meters">
        <div>
          <p>Stamina</p>
          <div className="meter stamina-meter">
            <span style={{ width: `${stamina}%` }} />
          </div>
        </div>
        <div>
          <p>Enemy posture</p>
          <div className="meter posture-meter">
            <span style={{ width: `${enemyGuard}%` }} />
          </div>
        </div>
      </div>

      <div className="demo-actions">
        <button className="primary-action" onClick={strike} type="button">
          <Zap size={18} aria-hidden="true" />
          Strike
        </button>
        <button className="secondary-action" onClick={dodge} type="button">
          Dodge
        </button>
        <button className="secondary-action" onClick={fall} type="button">
          Fall
        </button>
        <p className="demo-score">Souls: {souls} {lostSouls > 0 ? `| dropped: ${lostSouls}` : ''}</p>
      </div>

      <p className="demo-score">{message}</p>
    </div>
  );
}

function AdventureDemo() {
  const inventory = ['Map', 'Key'];
  const [message, setMessage] = useState('Examine the strange door ahead.');
  const items = ['Map', 'Key', 'Torch', 'Compass'];

  function tryItem(item: string) {
    if (item === 'Key' && inventory.includes('Key')) {
      setMessage('✓ The door unlocks. New paths revealed.');
    } else if (inventory.includes(item)) {
      setMessage(`The ${item} helps, but doesn't unlock this mystery...`);
    } else {
      setMessage(`You don't have the ${item} yet.`);
    }
  }

  return (
    <div className="demo-stack">
      <div className="adventure-window">
        <p className="rpg-speaker">Adventure</p>
        <p className="mt-3 text-lg font-bold text-slate-950">{message}</p>
        <div className="mt-5 grid gap-2">
          {items.map((item) => (
            <button
              className={`choice-button ${inventory.includes(item) ? 'choice-button-active' : 'opacity-50'}`}
              key={item}
              onClick={() => tryItem(item)}
              disabled={!inventory.includes(item)}
              type="button"
            >
              {inventory.includes(item) ? `Use ${item}` : `${item} (not found)`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetroidvaniaDemo() {
  const [abilities, setAbilities] = useState(['dash']);
  const [accessible, setAccessible] = useState(1);
  const allAbilities = ['dash', 'doublejump', 'wallcling'];

  function unlock(ability: string) {
    if (!abilities.includes(ability)) {
      setAbilities([...abilities, ability]);
      setAccessible((v) => v + 2);
    }
  }

  return (
    <div className="demo-stack">
      <div className="metroid-map">
        <div className="map-area" style={{ opacity: accessible > 0 ? 1 : 0.4 }}>⬜</div>
        <div className="map-area" style={{ opacity: accessible > 2 ? 1 : 0.4 }}>⬜</div>
        <div className="map-area" style={{ opacity: accessible > 4 ? 1 : 0.4 }}>⬜</div>
      </div>
      <div className="demo-actions">
        {allAbilities.map((ab) => (
          <button
            key={ab}
            className={`secondary-action ${abilities.includes(ab) ? 'opacity-50' : ''}`}
            onClick={() => unlock(ab)}
            disabled={abilities.includes(ab)}
            type="button"
          >
            {abilities.includes(ab) ? `✓ ${ab}` : `Get ${ab}`}
          </button>
        ))}
        <p className="demo-score">Accessible: {accessible}/6 areas</p>
      </div>
    </div>
  );
}

function RoguelikeDemo() {
  const [floor, setFloor] = useState(1);
  const [items, setItems] = useState(['Sword']);
  const [runs, setRuns] = useState(0);

  function descend() {
    setFloor((f) => f + 1);
  }

  function death() {
    setFloor(1);
    setItems(['Sword']);
    setRuns((r) => r + 1);
  }

  return (
    <div className="demo-stack">
      <div className="roguelike-dungeon" style={{ opacity: 0.8 }}>
        <p className="text-center font-bold">Floor {floor}</p>
        <p className="text-center text-sm">Enemies: {floor * 2 - 1}</p>
        <p className="text-center text-sm">Items: {items.join(', ')}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={descend} type="button">
          <Zap size={18} aria-hidden="true" />
          Descend
        </button>
        <button className="secondary-action" onClick={death} type="button">
          Fall
        </button>
        <p className="demo-score">Floor: {floor} | Runs: {runs}</p>
      </div>
    </div>
  );
}

function RogueLiteDemo() {
  const [level, setLevel] = useState(1);
  const [maxHealth, setMaxHealth] = useState(20);
  const [runs, setRuns] = useState(0);

  function progressRun() {
    setLevel((l) => l + 1);
  }

  function upgrade() {
    setMaxHealth((h) => h + 5);
  }

  function endRun() {
    setLevel(1);
    setRuns((r) => r + 1);
  }

  return (
    <div className="demo-stack">
      <div className="roguelite-upgrade">
        <p className="text-center font-bold">Level {level}</p>
        <p className="text-center text-sm">Max HP: {maxHealth}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={progressRun} type="button">
          <Zap size={18} aria-hidden="true" />
          Progress
        </button>
        <button className="secondary-action" onClick={upgrade} type="button">
          Upgrade HP
        </button>
        <button className="secondary-action" onClick={endRun} type="button">
          End Run
        </button>
        <p className="demo-score">Run {runs} | Level {level}</p>
      </div>
    </div>
  );
}

function ActionRpgDemo() {
  const [level, setLevel] = useState(1);
  const [health, setHealth] = useState(30);
  const [combo, setCombo] = useState(0);
  const canAttack = health > 5;

  function attack() {
    if (canAttack) {
      setCombo((c) => c + 1);
      setHealth((h) => Math.max(0, h - 4));
    }
  }

  function heal() {
    setHealth(Math.min(30, health + 10));
    setCombo(0);
  }

  function levelUp() {
    setLevel((l) => l + 1);
    setHealth(30);
    setCombo(0);
  }

  return (
    <div className="demo-stack">
      <div className="rpg-stats">
        <p>Level: {level} | HP: {health}/30 | Combo: {combo}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={attack} disabled={!canAttack} type="button">
          <Zap size={18} aria-hidden="true" />
          Attack
        </button>
        <button className="secondary-action" onClick={heal} type="button">
          Heal
        </button>
        <button className="secondary-action" onClick={levelUp} type="button">
          Level Up
        </button>
        <p className="demo-score">{health > 0 ? 'In battle' : 'Defeated'}</p>
      </div>
    </div>
  );
}

function MmorpgDemo() {
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [party, setParty] = useState(['You', 'Ally']);
  const expNeeded = level * 100;

  function quest() {
    setExp((e) => Math.min(expNeeded, e + 45));
    if (exp + 45 >= expNeeded) {
      setLevel((l) => l + 1);
      setExp(0);
    }
  }

  function recruit() {
    if (party.length < 4) {
      setParty([...party, `Member ${party.length}`]);
    }
  }

  return (
    <div className="demo-stack">
      <div className="mmorpg-ui">
        <p className="font-bold">Level {level} | Party: {party.length}/4</p>
        <div className="meter">
          <span style={{ width: `${(exp / expNeeded) * 100}%` }} />
        </div>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={quest} type="button">
          <Zap size={18} aria-hidden="true" />
          Run Quest
        </button>
        <button className="secondary-action" onClick={recruit} disabled={party.length >= 4} type="button">
          Recruit
        </button>
        <p className="demo-score">EXP: {exp}/{expNeeded}</p>
      </div>
    </div>
  );
}

function MobaDemo() {
  const [selected, setSelected] = useState(['Warrior']);
  const [kills, setKills] = useState(0);
  const heroes = ['Warrior', 'Mage', 'Healer', 'Assassin'];

  function pickHero(hero: string) {
    if (!selected.includes(hero)) {
      setSelected([...selected, hero]);
    }
  }

  function teamfight() {
    setKills((k) => k + selected.length);
  }

  return (
    <div className="demo-stack">
      <div className="moba-picks">
        <p className="text-sm font-bold">Team ({selected.length})</p>
        <div className="flex gap-2 flex-wrap">
          {heroes.map((h) => (
            <button
              key={h}
              className={`text-xs px-2 py-1 rounded ${selected.includes(h) ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              onClick={() => pickHero(h)}
              disabled={selected.includes(h) || selected.length >= 5}
              type="button"
            >
              {h}
            </button>
          ))}
        </div>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={teamfight} type="button">
          <Zap size={18} aria-hidden="true" />
          Teamfight
        </button>
        <p className="demo-score">Kills: {kills} | Team: {selected.length}</p>
      </div>
    </div>
  );
}

function CardGameDemo() {
  const [hand, setHand] = useState(['Creature', 'Spell']);
  const [played, setPlayed] = useState<string[]>([]);
  const [mana, setMana] = useState(7);

  function playCard(card: string) {
    if (mana >= 3) {
      setPlayed([...played, card]);
      setHand(hand.filter((c) => c !== card));
      setMana((m) => m - 3);
    }
  }

  function drawCard() {
    setHand([...hand, 'Card']);
  }

  return (
    <div className="demo-stack">
      <div className="card-game-ui">
        <p className="text-sm font-bold">Mana: {mana}/7 | Played: {played.length}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {hand.map((card, i) => (
            <button
              key={`${card}-${i}`}
              className="px-3 py-2 bg-purple-600 text-white text-xs rounded"
              onClick={() => playCard(card)}
              disabled={mana < 3}
              type="button"
            >
              {card}
            </button>
          ))}
        </div>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={drawCard} type="button">
          Draw
        </button>
        <p className="demo-score">Hand: {hand.length} | Field: {played.length}</p>
      </div>
    </div>
  );
}

function RhythmDemo() {
  const [score, setScore] = useState(0);
  const [beat, setBeat] = useState(0);
  const [feedback, setFeedback] = useState('Ready');
  const beats = ['Perfect!', 'Good', 'Okay', 'Miss'];

  function hitBeat() {
    const accuracy = Math.random();
    let points = 0;
    let result = 'Miss';
    if (accuracy > 0.7) {
      points = 300;
      result = 'Perfect!';
    } else if (accuracy > 0.5) {
      points = 150;
      result = 'Good';
    } else if (accuracy > 0.2) {
      points = 50;
      result = 'Okay';
    }
    setScore((s) => s + points);
    setBeat((b) => b + 1);
    setFeedback(result);
  }

  return (
    <div className="demo-stack">
      <div className="rhythm-display">
        <p className="text-center font-bold text-2xl">♪ ♪ ♪</p>
        <p className="text-center text-sm mt-2">{beats[Math.floor(Math.random() * 4)]}</p>
        <p className="text-center text-sm mt-2">{feedback}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={hitBeat} type="button">
          <Zap size={18} aria-hidden="true" />
          Hit Beat
        </button>
        <p className="demo-score">Score: {score} | Beats: {beat}</p>
      </div>
    </div>
  );
}

function SurvivalDemo() {
  const [hunger, setHunger] = useState(60);
  const [health, setHealth] = useState(80);
  const [resources, setResources] = useState(5);

  function gather() {
    setResources((r) => r + 2);
    setHunger((h) => Math.max(0, h - 5));
  }

  function cook() {
    if (resources >= 2) {
      setResources((r) => r - 2);
      setHunger(Math.min(100, hunger + 30));
    }
  }

  function rest() {
    setHealth(Math.min(100, health + 15));
    setHunger((h) => Math.max(0, h - 10));
  }

  return (
    <div className="demo-stack">
      <div className="survival-ui">
        <p className="text-sm">Hunger: {hunger}% | Health: {health}% | Resources: {resources}</p>
        <div className="flex gap-2 mt-2">
          <div className="flex-1">
            <div className="meter" style={{ height: '8px' }}>
              <span style={{ width: `${hunger}%`, background: '#f97316' }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="meter" style={{ height: '8px' }}>
              <span style={{ width: `${health}%`, background: '#10b981' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={gather} type="button">
          Gather
        </button>
        <button className="secondary-action" onClick={cook} disabled={resources < 2} type="button">
          Cook
        </button>
        <button className="primary-action" onClick={rest} type="button">
          <Zap size={18} aria-hidden="true" />
          Rest
        </button>
        <p className="demo-score">{hunger < 20 ? 'Starving!' : hunger < 50 ? 'Hungry' : 'Stable'}</p>
      </div>
    </div>
  );
}

function VisualNovelDemo() {
  const [scene, setScene] = useState(0);
  const scenes = [
    { text: 'You meet a mysterious figure...', choices: ['Talk', 'Ignore'] },
    { text: 'They offer you a choice.', choices: ['Accept', 'Refuse'] },
    { text: 'Your journey continues...', choices: ['Next', 'End'] },
  ];

  function choose() {
    if (scene < scenes.length - 1) {
      setScene((s) => s + 1);
    }
  }

  return (
    <div className="demo-stack">
      <div className="visual-novel-window">
        <p className="text-lg font-bold text-slate-950">{scenes[scene].text}</p>
        <div className="mt-5 grid gap-2">
          {scenes[scene].choices.map((choice) => (
            <button key={choice} className="choice-button choice-button-active" onClick={choose} type="button">
              {choice}
            </button>
          ))}
        </div>
      </div>
      <p className="demo-score">Scene {scene + 1}/{scenes.length}</p>
    </div>
  );
}

function TacticalRpgDemo() {
  const [units, setUnits] = useState(['Knight', 'Archer']);
  const [turn, setTurn] = useState(1);
  const allUnits = ['Knight', 'Archer', 'Mage'];

  function recruit() {
    const available = allUnits.find((u) => !units.includes(u));
    if (available && units.length < 3) {
      setUnits([...units, available]);
    }
  }

  function endTurn() {
    setTurn((t) => t + 1);
  }

  return (
    <div className="demo-stack">
      <div className="tactical-grid">
        <p className="text-sm font-bold">Squad: {units.join(', ')}</p>
        <p className="text-xs mt-2">Turn: {turn}</p>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={recruit} disabled={units.length >= 3} type="button">
          Recruit
        </button>
        <button className="primary-action" onClick={endTurn} type="button">
          <Zap size={18} aria-hidden="true" />
          End Turn
        </button>
        <p className="demo-score">Squad Size: {units.length}/3 | Turn: {turn}</p>
      </div>
    </div>
  );
}

function DeckBuilderDemo() {
  const [deck, setDeck] = useState(['Card1', 'Card2', 'Card3']);
  const available = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5'];

  function addCard(card: string) {
    if (deck.length < 20) {
      setDeck([...deck, card]);
    }
  }

  return (
    <div className="demo-stack">
      <div className="deckbuilder-ui">
        <p className="text-sm font-bold">Deck: {deck.length}/20</p>
        <p className="text-xs mt-2">{deck.slice(0, 5).join(', ')}{deck.length > 5 ? '...' : ''}</p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {available.map((card) => (
          <button
            key={card}
            className="text-xs px-2 py-1 bg-blue-600 text-white rounded"
            onClick={() => addCard(card)}
            disabled={deck.length >= 20}
            type="button"
          >
            +
          </button>
        ))}
      </div>
      <div className="demo-actions mt-2">
        <p className="demo-score">Deck Power: {deck.length * 5}</p>
      </div>
    </div>
  );
}

function TurnBasedStrategyDemo() {
  const [turn, setTurn] = useState(1);
  const [tech, setTech] = useState(1);
  const [cities, setCities] = useState(2);

  function nextTurn() {
    setTurn((t) => t + 1);
  }

  function researchTech() {
    if (turn % 3 === 0) {
      setTech((t) => t + 1);
    }
  }

  function buildCity() {
    if (turn % 5 === 0) {
      setCities((c) => c + 1);
    }
  }

  return (
    <div className="demo-stack">
      <div className="strategy-ui">
        <p className="text-sm font-bold">Era {Math.floor(turn / 10) + 1}</p>
        <p className="text-xs">Turn: {turn} | Tech: {tech} | Cities: {cities}</p>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={researchTech} type="button">
          Research
        </button>
        <button className="secondary-action" onClick={buildCity} type="button">
          Build
        </button>
        <button className="primary-action" onClick={nextTurn} type="button">
          <Zap size={18} aria-hidden="true" />
          Next Turn
        </button>
        <p className="demo-score">Turn {turn}</p>
      </div>
    </div>
  );
}

function RealTimeStrategyDemo() {
  const [scv, setScv] = useState(3);
  const [mineral, setMineral] = useState(50);
  const [units, setUnits] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setMineral((m) => Math.min(200, m + scv * 2));
    }, 500);
    return () => clearInterval(timer);
  }, [scv]);

  function buildScv() {
    if (mineral >= 50) {
      setScv((s) => s + 1);
      setMineral((m) => m - 50);
    }
  }

  function trainUnit() {
    if (mineral >= 100) {
      setUnits((u) => u + 1);
      setMineral((m) => m - 100);
    }
  }

  return (
    <div className="demo-stack">
      <div className="rts-ui">
        <p className="text-sm font-bold">Minerals: {mineral}</p>
        <p className="text-xs">SCVs: {scv} | Units: {units}</p>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={buildScv} disabled={mineral < 50} type="button">
          Build SCV
        </button>
        <button className="primary-action" onClick={trainUnit} disabled={mineral < 100} type="button">
          <Zap size={18} aria-hidden="true" />
          Train Unit
        </button>
        <p className="demo-score">Economy: {scv * 2}/s</p>
      </div>
    </div>
  );
}

function IdleClickerDemo() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCookies((c) => Math.floor(c + cps));
    }, 1000);
    return () => clearInterval(timer);
  }, [cps]);

  function click() {
    setCookies((c) => c + 1);
  }

  function buyUpgrade() {
    if (cookies >= 10) {
      setCookies((c) => c - 10);
      setCps((c) => c + 0.5);
    }
  }

  return (
    <div className="demo-stack">
      <div className="clicker-display">
        <p className="text-3xl font-black text-center">🍪</p>
        <p className="text-center text-lg font-bold">{Math.floor(cookies)}</p>
        <p className="text-center text-xs">{cps.toFixed(1)}/sec</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={click} type="button">
          <Zap size={18} aria-hidden="true" />
          Click
        </button>
        <button className="secondary-action" onClick={buyUpgrade} disabled={cookies < 10} type="button">
          Upgrade (10)
        </button>
      </div>
    </div>
  );
}

function DungeonCrawlerDemo() {
  const [depth, setDepth] = useState(1);
  const [enemies, setEnemies] = useState(1);
  const [gold, setGold] = useState(0);

  function fight() {
    setGold((g) => g + depth * 5);
    setEnemies((e) => Math.max(0, e - 1));
  }

  function descend() {
    if (enemies === 0) {
      const nextDepth = depth + 1;
      setDepth(nextDepth);
      setEnemies(nextDepth + 1);
    }
  }

  return (
    <div className="demo-stack">
      <div className="dungeon-ui">
        <p className="text-sm font-bold">Depth: B{depth}</p>
        <p className="text-xs">Enemies: {enemies} | Gold: {gold}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={fight} disabled={enemies === 0} type="button">
          <Zap size={18} aria-hidden="true" />
          Fight
        </button>
        <button className="secondary-action" onClick={descend} disabled={enemies > 0} type="button">
          Descend
        </button>
        <p className="demo-score">Depth B{depth}</p>
      </div>
    </div>
  );
}

function HackNSlashDemo() {
  const [combo, setCombo] = useState(0);
  const [style, setStyle] = useState('Power');
  const styles = ['Power', 'Speed', 'Style'];

  function attack() {
    setCombo((c) => c + 1);
  }

  function switchStyle() {
    setStyle(styles[(styles.indexOf(style) + 1) % styles.length]);
  }

  return (
    <div className="demo-stack">
      <div className="hack-slash-ui">
        <p className="text-lg font-bold text-center">⚔️</p>
        <p className="text-center text-sm font-bold">Style: {style}</p>
        <p className="text-center text-lg text-red-600">COMBO x{combo}</p>
      </div>
      <div className="demo-actions">
        <button className="primary-action" onClick={attack} type="button">
          <Zap size={18} aria-hidden="true" />
          Attack
        </button>
        <button className="secondary-action" onClick={switchStyle} type="button">
          Switch Style
        </button>
        <p className="demo-score">Combo: {combo}</p>
      </div>
    </div>
  );
}

function TwinStickShooterDemo() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [score, setScore] = useState(0);

  function shoot() {
    setScore((s) => s + 10);
  }

  return (
    <div className="demo-stack">
      <div className="twinstick-stage">
        <span className="player" style={{ left: `${x}%`, top: `${y}%` }} />
        <span className="enemy" style={{ left: `${50 + Math.sin(Date.now() / 1000) * 20}%`, top: '20%' }} />
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={() => setX(Math.max(10, x - 10))} type="button">
          ← Move
        </button>
        <button className="secondary-action" onClick={() => setX(Math.min(90, x + 10))} type="button">
          Move →
        </button>
        <button className="secondary-action" onClick={() => setY(Math.max(20, y - 10))} type="button">
          ↑ Move
        </button>
        <button className="secondary-action" onClick={() => setY(Math.min(80, y + 10))} type="button">
          Move ↓
        </button>
        <button className="primary-action" onClick={shoot} type="button">
          <Zap size={18} aria-hidden="true" />
          Shoot
        </button>
        <p className="demo-score">Score: {score}</p>
      </div>
    </div>
  );
}

function ShmupDemo() {
  const [pos, setPos] = useState(50);
  const [score, setScore] = useState(0);
  const [bulletTime, setBulletTime] = useState(0);

  useEffect(() => {
    setBulletTime((b) => (b + 1) % 100);
  }, []);

  function dodge() {
    const bulletPos = bulletTime * 1.5;
    if (Math.abs(pos - bulletPos) > 8) {
      setScore((s) => s + 100);
    }
  }

  return (
    <div className="demo-stack">
      <div className="shmup-stage">
        <span className="player" style={{ left: `${pos}%` }} />
        <span className="bullet" style={{ top: `${bulletTime}%` }} />
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={() => setPos(Math.max(10, pos - 8))} type="button">
          ← Dodge
        </button>
        <button className="secondary-action" onClick={() => setPos(Math.min(90, pos + 8))} type="button">
          Dodge →
        </button>
        <button className="primary-action" onClick={dodge} type="button">
          <Zap size={18} aria-hidden="true" />
          Evade
        </button>
        <p className="demo-score">Score: {score}</p>
      </div>
    </div>
  );
}

function TradingCardGameDemo() {
  const [collection, setCollection] = useState(['Rare1', 'Common1', 'Common2']);
  const [deck, setDeck] = useState<string[]>([]);

  function pullCard() {
    const rarity = Math.random() > 0.85 ? 'Rare' : 'Common';
    const newCard = `${rarity}${Math.floor(Math.random() * 100)}`;
    setCollection([...collection, newCard]);
  }

  function addToDeck(card: string) {
    if (deck.length < 60) {
      setDeck([...deck, card]);
    }
  }

  return (
    <div className="demo-stack">
      <div className="tcg-ui">
        <p className="text-sm font-bold">Collection: {collection.length} | Deck: {deck.length}/60</p>
        <div className="text-xs mt-2">{collection.slice(-3).join(', ')}</div>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={pullCard} type="button">
          Pull Card
        </button>
        <button className="primary-action" onClick={() => addToDeck(collection[0])} disabled={deck.length >= 60} type="button">
          <Zap size={18} aria-hidden="true" />
          Add to Deck
        </button>
        <p className="demo-score">Cards: {collection.length}</p>
      </div>
    </div>
  );
}

function AutoBattlerDemo() {
  const [team, setTeam] = useState(['Warrior', 'Mage']);
  const [wins, setWins] = useState(0);

  function recruit() {
    const units = ['Warrior', 'Mage', 'Rogue', 'Healer'];
    if (team.length < 3) {
      setTeam([...team, units[Math.floor(Math.random() * units.length)]]);
    }
  }

  function battle() {
    setWins((w) => w + 1);
  }

  return (
    <div className="demo-stack">
      <div className="autobattler-board">
        <p className="text-sm font-bold">Team: {team.join(', ')}</p>
        <p className="text-xs mt-2">Wins: {wins}</p>
      </div>
      <div className="demo-actions">
        <button className="secondary-action" onClick={recruit} disabled={team.length >= 3} type="button">
          Recruit
        </button>
        <button className="primary-action" onClick={battle} type="button">
          <Zap size={18} aria-hidden="true" />
          Battle
        </button>
        <p className="demo-score">Wins: {wins} | Team: {team.length}</p>
      </div>
    </div>
  );
}

type SliderProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function Slider({ label, value, onChange }: SliderProps) {
  return (
    <label className="slider-row">
      <span>{label}</span>
      <input
        max="100"
        min="0"
        onChange={(event) => onChange(Number(event.target.value))}
        type="range"
        value={value}
      />
    </label>
  );
}
