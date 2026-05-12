import { NavLink } from 'react-router-dom'
import { chapterRoutes } from '../routes'

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Chapters">
      <div className="sidebarHeader">
        <div className="sidebarTitle">Learn Vim（中英对照）</div>
        <div className="sidebarSubtitle">目录来自 SUMMARY.md</div>
      </div>

      <nav className="sidebarNav">
        {chapterRoutes.map((ch) => (
          <NavLink
            key={ch.slug}
            to={`/ch/${ch.slug}`}
            className={({ isActive }) => `navItem ${isActive ? 'isActive' : ''}`}
          >
            {ch.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

