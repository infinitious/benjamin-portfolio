import React from 'react';
import { profile, skills, projects } from './data.js';

function ProjectCard({ p }) {
  return (
    <article className={`card ${p.featured ? 'featured' : ''}`}>
      <div className="card-eyebrow">
        {p.tags?.length > 0 && <span className="card-cats">{p.tags.join(' · ')}</span>}
        {p.year && <span className="card-year">{p.year}</span>}
      </div>
      <div className="card-head">
        <h3>{p.name}</h3>
        {p.live
          ? <span className="badge live">● Live</span>
          : <span className="badge soon">Code / soon</span>}
      </div>
      <p className="summary">{p.summary}</p>
      <p className="detail">{p.detail}</p>
      <div className="tags">
        {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
      </div>
      <div className="links">
        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="link primary">Visit site ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="link">Code ↗</a>}
      </div>
    </article>
  );
}

export default function App() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <div className="page">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="hero">
        <nav className="nav">
          <span className="logo">{profile.name}</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-body">
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-cta">
            <a href="#projects" className="link primary">See my work</a>
            <a href={`mailto:${profile.email}`} className="link">Hire me</a>
          </div>
        </div>
      </header>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="section">
        <h2>Selected Work</h2>
        <p className="section-sub">Real, live applications built for real businesses.</p>
        <div className="grid">
          {featured.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
        <h3 className="more-title">More projects</h3>
        <div className="grid">
          {others.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="section">
        <h2>About</h2>
        <p className="about">{profile.about}</p>
        <div className="skills">
          {skills.map(s => <span key={s} className="tag skill">{s}</span>)}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="section contact">
        <h2>Let's work together</h2>
        <p className="section-sub">Available for full-stack web development — remote.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="link primary">{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
