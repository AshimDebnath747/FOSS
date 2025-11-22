import { Software, Category } from '../types';

export const initialSoftwareList: Software[] = [
  {
    id: '1',
    name: 'VS Code',
    description: 'Code editing. Redefined. Free. Built on open source. Runs everywhere.',
    category: Category.Development,
    homepageUrl: 'https://code.visualstudio.com',
    license: 'MIT',
    logoUrl: 'https://picsum.photos/id/1/200/200',
    addedBy: 'Admin',
    features: ['IntelliSense', 'Run and Debug', 'Built-in Git', 'Extensions']
  },
  {
    id: '2',
    name: 'GIMP',
    description: 'The GNU Image Manipulation Program. It is a freely distributed program for such tasks as photo retouching, image composition and image authoring.',
    category: Category.Design,
    homepageUrl: 'https://www.gimp.org',
    license: 'GPLv3',
    logoUrl: 'https://picsum.photos/id/2/200/200',
    addedBy: 'Admin',
    features: ['High Quality Photo Manipulation', 'Original Artwork Creation', 'Graphic Design Elements']
  },
  {
    id: '3',
    name: 'LibreOffice',
    description: 'LibreOffice is a powerful and free office suite, a successor to OpenOffice.org.',
    category: Category.Productivity,
    homepageUrl: 'https://www.libreoffice.org',
    license: 'MPL 2.0',
    logoUrl: 'https://picsum.photos/id/3/200/200',
    addedBy: 'Admin',
    features: ['Writer', 'Calc', 'Impress', 'Draw', 'Base', 'Math']
  },
  {
    id: '4',
    name: 'Blender',
    description: 'Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline.',
    category: Category.Design,
    homepageUrl: 'https://www.blender.org',
    license: 'GPL',
    logoUrl: 'https://picsum.photos/id/4/200/200',
    addedBy: 'Admin',
    features: ['Modeling', 'Rigging', 'Animation', 'Simulation', 'Rendering', 'Compositing']
  },
  {
    id: '5',
    name: 'VLC Media Player',
    description: 'VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files.',
    category: Category.Utilities,
    homepageUrl: 'https://www.videolan.org/vlc/',
    license: 'GPL',
    logoUrl: 'https://picsum.photos/id/5/200/200',
    addedBy: 'Admin',
    features: ['Plays everything', 'Runs on all platforms', 'No spyware', 'No ads']
  },
  {
    id: '6',
    name: 'Linux Mint',
    description: 'Linux Mint is a modern, elegant and comfortable operating system which is both powerful and easy to use.',
    category: Category.Utilities,
    homepageUrl: 'https://linuxmint.com',
    license: 'GPL',
    logoUrl: 'https://picsum.photos/id/6/200/200',
    addedBy: 'Admin',
    features: ['Works out of the box', 'Community driven', 'Safe and reliable']
  }
];