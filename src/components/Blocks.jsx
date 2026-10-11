import { config } from '../config.js'
import { EXAMS, MODULES, PHASES } from '../data/content.js'

const pad = (n) => String(n).padStart(2, '0')
const { thresholds, duration } = config

export function Phases() {
  return (
    <div className="phases">
      {PHASES.map((p) => (
        <div className="phase" key={p[0]}><span className="when">{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><span className="mods">{p[3]}</span></div>
      ))}
    </div>
  )
}

export function ExamsShort() {
  return (
    <div className="cells c2">
      {EXAMS.map((e, i) => (
        <div key={e[0]}><span className="num">{pad(i + 1)}</span><h3>{e[0]}</h3><p>{e[3]}</p></div>
      ))}
      <div style={{ background: 'var(--red)', color: '#fff', justifyContent: 'center' }}><b>Seuil de réussite</b><p style={{ color: '#fff' }}>{thresholds.global}/100, {thresholds.domain} % par domaine, zéro faute critique.</p></div>
    </div>
  )
}

export function ExamsFull() {
  return (
    <div className="cells c5">
      {EXAMS.map((e, i) => (
        <div key={e[0]}><span className="num">{pad(i + 1)}</span><h3>{e[0]}</h3><p className="small" style={{ marginTop: -6 }}>{e[1]}</p><p>{e[2]}</p><span className="kick" style={{ marginTop: 'auto', paddingTop: 10 }}>{e[3]}</span></div>
      ))}
    </div>
  )
}

export function Modules() {
  return (
    <div className="modules">
      {MODULES.map((m, i) => (
        <article className="mod" key={m[0]}><div className="mod-top"><span className="mod-n">{pad(i + 1)}</span><span className="mod-ph">Phase {Math.floor(i / duration.modulesPerPhase) + 1}</span></div><h3>{m[0]}</h3><p className="hook">{m[1]}</p><ul>{m[2].map((c) => <li key={c}>{c}</li>)}</ul></article>
      ))}
    </div>
  )
}
