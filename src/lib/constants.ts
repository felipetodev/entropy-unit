
export const NAV_LINKS = [
  {
    href: '/',
    label: 'HOME'
  },
  {
    href: '/games',
    label: 'JUEGOS'
  },
  {
    href: '/team',
    label: 'TEAM'
  },
  {
    href: '/contacto',
    label: 'CONTACTO'
  }
]

export const cards = [
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'

  },
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  }
]

export const blogCards = [
  ...cards,
  {
    id: crypto.randomUUID(),
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  }
]

export const stampStyles = 'color: #fff; font-size: 11px; font-weight: bold; background-color: #c400386b; padding: 2px 6px; border-radius: 5px; border: 1px solid #c50039'
