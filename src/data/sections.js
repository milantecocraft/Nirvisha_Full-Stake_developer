// Single source of truth for section order — used by the navbar scroll-spy,
// the right-side section rail, and the active-section hook.
export const sections = [
  { id: 'top', label: 'Intro', no: '00' },
  { id: 'about', label: 'About', no: '01' },
  { id: 'skills', label: 'Skills', no: '02' },
  { id: 'projects', label: 'Projects', no: '03' },
  { id: 'experience', label: 'Experience', no: '04' },
  { id: 'achievements', label: 'Highlights', no: '05' },
  { id: 'contact', label: 'Contact', no: '06' },
]

export const sectionIds = sections.map((s) => s.id)
