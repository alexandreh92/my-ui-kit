import type { MenuItem } from '../../../../src/elements/Menu/Item';

export const itemMock: MenuItem[] = [
  {
    icon: 'chat-middle-filled',
    value: 'Option 1',
    badged: false,
    active: false,
    badgeCount: null,
    name: 'option-1',
    onClick: (name) => alert(`you've clicked on ${name} option`),
  },
  {
    icon: 'check',
    value: 'Option 2',
    badged: false,
    active: false,
    badgeCount: null,
    name: 'option-2',
    onClick: (name) => alert(`you've clicked on ${name} option`),
  },
  {
    icon: 'comment',
    value: 'Option 3 - Active',
    badged: false,
    active: true,
    badgeCount: null,
    name: 'option-3',
    onClick: (name) => alert(`you've clicked on ${name} option`),
  },
  {
    icon: 'download',
    value: 'Option 4 - Badge',
    badged: true,
    active: false,
    badgeCount: 10,
    name: 'option-4',
    onClick: (name) => alert(`you've clicked on ${name} option`),
  },
];
