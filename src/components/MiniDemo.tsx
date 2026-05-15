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
