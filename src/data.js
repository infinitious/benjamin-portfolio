// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio. No layout code to touch — just text.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Benjamin Owadokun',
  title: 'Full-Stack Developer — React · Node.js · MySQL',
  // Honest, defensible summary. Tweak freely.
  tagline:
    'I build and ship real web applications — e-commerce, booking, and finance platforms with payments, admin dashboards, and secure APIs.',
  about:
    'Full-stack developer with 6+ years building web and desktop applications. ' +
    'I have shipped live, payment-integrated products used by real businesses — ' +
    'from an e-commerce store with Paystack and bank-transfer checkout, to a salon ' +
    'booking platform with partial-payment logic, to a finance management system. ' +
    'I work primarily in React, Node.js/Express, and MySQL (Prisma), and I have also ' +
    'built backends in MongoDB and desktop apps in C#/.NET. B.Sc. Computer Science, ' +
    'University of Ilorin — Best Programmer of the Year (NACOSS, 2019).',
  location: 'Nigeria', // ← set to your actual current location
  email: 'owadokunbenjamin@gmail.com',
  phone: '+234 802 639 3724',
  github: 'https://github.com/infinitious',
  linkedin: 'https://linkedin.com/in/benjamin-owadokun-a192a7117',
};

// Skills shown as tags. Reorder/trim to match what you'd defend in an interview.
export const skills = [
  'React.js', 'Node.js', 'Express.js', 'MySQL', 'Prisma', 'MongoDB',
  'REST API Design', 'Paystack', 'Stripe', 'JavaScript', 'C# / .NET',
  'Tailwind CSS', 'Git & GitHub', 'Azure (AZ-900)',
];

// Projects. `featured: true` shows them first and larger.
// `live` = a working URL anyone can click. Leave `live` empty for "code only".
export const projects = [
  {
    name: 'Olaeze Store',
    featured: true,
    live: 'https://olaeze.com',
    code: '', // add GitHub link if public
    summary: 'E-commerce platform for farming & irrigation equipment.',
    detail:
      'Full storefront with cart and checkout, plus an admin panel for managing ' +
      'products and orders. Customers pay via Paystack or direct bank transfer.',
    stack: ['React', 'Node.js', 'MySQL', 'Paystack'], // ← set to the LIVE stack
    tags: ['E-commerce', 'Payments', 'Admin dashboard'],
  },
  {
    name: 'Dolbic Church',
    featured: true,
    live: 'https://dolbic.com',
    code: '',
    summary: 'Content-managed church website with admin dashboard.',
    detail:
      'Non-technical admins manage sermons, events, galleries, and announcements ' +
      'across the whole site from a custom dashboard.',
    stack: ['React', 'Node.js', 'CMS'],
    tags: ['CMS', 'Admin dashboard'],
  },
  {
    name: 'Rosevein Salon Booking',
    featured: true,
    live: '', // ← deploying now — paste the live URL here once it's up
    code: '',
    summary: 'Online booking platform for a unisex salon.',
    detail:
      'Clients browse services, check availability, and book — paying 30% upfront ' +
      'online and the balance in person.',
    stack: ['React', 'Node.js', 'MySQL'],
    tags: ['Booking', 'Payments'],
  },
  {
    name: 'Hairxterification',
    featured: false,
    live: 'https://hairxterification.netlify.app/',
    code: '',
    summary: 'Brand & services website for a hair styling business.', // ← confirm wording
    detail:
      'Responsive marketing site showcasing services and gallery. Built in 2020.', // ← confirm details
    stack: ['HTML', 'CSS', 'JavaScript'], // ← set to the REAL stack you used
    tags: ['Website', 'Hair & Beauty'],
  },
  {
    name: 'Kennymark Couture',
    featured: false,
    live: 'https://kennymarkcouture.netlify.app/',
    code: '',
    summary: 'Brand website for a couture fashion label.', // ← confirm wording
    detail:
      'Responsive showcase site for a fashion / couture brand.', // ← confirm details
    stack: ['HTML', 'CSS', 'JavaScript'], // ← set to the REAL stack you used
    tags: ['Website', 'Fashion'],
  },
  {
    name: 'Warehouse & Multi-Shop System',
    featured: false,
    live: '',
    code: 'https://github.com/infinitious',
    summary: 'Inventory, invoicing, and multi-shop sales management.',
    detail:
      'Inventory tracking, invoice generation, debt management, multi-shop sales ' +
      'records, and role-based authentication.',
    stack: ['Node.js', 'React', 'MySQL'],
    tags: ['Inventory', 'RBAC'],
  },
  {
    name: 'CBT Exam System',
    featured: false,
    live: '',
    code: '',
    summary: 'Desktop computer-based testing application.',
    detail:
      'Timed, automated exams as a Windows desktop app — built in C#/.NET.',
    stack: ['C#', '.NET', 'Desktop'],
    tags: ['Desktop', 'C#'],
  },
  {
    name: 'Student Registration & Verification System',
    featured: false,
    live: '',
    code: 'https://github.com/infinitious/student-registration-and-verification-system', // ← confirm repo URL
    summary: 'Desktop app for student registration and verification.', // ← confirm wording
    detail:
      'Manages student enrolment records and identity verification workflows.', // ← confirm details
    stack: ['C#', '.NET', 'Desktop'], // ← set to the REAL stack
    tags: ['Desktop', 'Education'],
  },
  {
    name: 'Project Archive System',
    featured: false,
    live: '',
    code: 'https://github.com/infinitious/Project-Archive-System', // ← confirm repo URL
    summary: 'Desktop app for archiving and retrieving project records.', // ← confirm wording
    detail:
      'Stores, organizes, and retrieves archived project documents.', // ← confirm details
    stack: ['C#', '.NET', 'Desktop'], // ← set to the REAL stack
    tags: ['Desktop', 'Archive'],
  },
  {
    name: 'Point of Sales',
    featured: false,
    live: '',
    code: 'https://github.com/infinitious/Point-of-Sales', // ← confirm repo URL
    summary: 'Desktop point-of-sale system for retail.', // ← confirm wording
    detail:
      'Handles sales, receipts, and inventory at the checkout counter.', // ← confirm details
    stack: ['C#', '.NET', 'Desktop'], // ← set to the REAL stack
    tags: ['Desktop', 'POS'],
  },
];
