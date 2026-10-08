export const WEAPONS = {
  m4a1: {
    name: 'M4A1',
    caliber: '5.56×45mm',
    slots: ['optic', 'foregrip', 'muzzle', 'tactical'],
  },
  glock: {
    name: 'Glock 19X',
    caliber: '9×19mm',
    slots: ['optic'],
  },
};

export const SLOT_LABELS = {
  optic: 'Optic',
  foregrip: 'Foregrip',
  muzzle: 'Muzzle',
  tactical: 'Tactical',
};

export const ATTACHMENTS = {
  eotech: { name: 'EOTech XPS3', slot: 'optic', weapons: ['m4a1'] },
  reflex: { name: 'Mini Reflex', slot: 'optic', weapons: ['m4a1', 'glock'] },
  acog: { name: 'ACOG 4×32', slot: 'optic', weapons: ['m4a1'] },
  angled: { name: 'Angled Grip', slot: 'foregrip', weapons: ['m4a1'] },
  vertical: { name: 'Vertical Grip', slot: 'foregrip', weapons: ['m4a1'] },
  suppressor: { name: 'Suppressor', slot: 'muzzle', weapons: ['m4a1'] },
  flashlight: { name: 'Flashlight', slot: 'tactical', weapons: ['m4a1'] },
};

export const ANCHORS = {
  m4a1: {
    optic: { x: 430, y: 86 },
    foregrip: { x: 300, y: 128 },
    muzzle: { x: 90, y: 108 },
    tactical: { x: 250, y: 128 },
  },
  glock: {
    optic: { x: 460, y: 116 },
  },
};
