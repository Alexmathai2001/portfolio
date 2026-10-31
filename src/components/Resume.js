import React from "react";
import {
  stats,
  experience,
  projects,
  skills,
  certifications,
  education,
} from "../data/resume";

const Section = ({ id, title, children }) => (
  <section id={id} className="mt-20">
    <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold tracking-tight">
      <span className="text-muted">&gt;</span>
      {title}
    </h2>
    {children}
  </section>
);

const Points = ({ items }) => (
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-soft">
    {items.map((p) => (
      <li key={p} className="flex gap-3">
        <span className="text-muted">–</span>
        <span>{p}</span>
      </li>
    ))}
  </ul>
);

const Resume = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24">
      {/* stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel rounded-lg p-5 text-center">
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <Section id="experience" title="Experience">
        <div className="space-y-8 border-l border-line pl-6">
          {experience.map((job) => (
            <div key={job.title + job.period} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border border-muted bg-bg"></span>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-bold">{job.title}</h3>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className="text-sm text-muted">
                {job.org} · {job.place}
              </p>
              <Points items={job.points} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="key-projects" title="Key Projects">
        <div className="space-y-6">
          {projects.map((p) => (
            <article key={p.name} className="panel rounded-lg p-6">
              <h3 className="font-bold">{p.name}</h3>
              <p className="mt-1 text-xs text-muted">{p.stack}</p>
              <Points items={p.points} />
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="space-y-5">
          {skills.map((g) => (
            <div key={g.group} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <p className="w-44 shrink-0 text-sm text-muted">{g.group}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-md border border-line px-3 py-1 text-xs text-soft">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.id} className="panel rounded-lg p-5">
              <i className="bi bi-patch-check text-xl"></i>
              <h3 className="mt-3 text-sm font-bold">{c.name}</h3>
              <p className="mt-1 text-xs text-muted">
                {c.issuer} · {c.year}
              </p>
              <p className="mt-3 break-all text-xs text-muted">ID: {c.id}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="panel flex flex-col justify-between gap-2 rounded-lg p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-bold">{education.school}</h3>
            <p className="text-sm text-soft">{education.degree}</p>
          </div>
          <div className="text-sm text-muted sm:text-right">
            <p>{education.period}</p>
            <p>CGPA: {education.cgpa}</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
