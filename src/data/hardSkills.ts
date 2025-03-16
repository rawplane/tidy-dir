interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Ini adalah framework untuk membuat website saya.",
    icon: "astro_dark",
  },
  {
    name: "NodeJs",
    description:
      "Runtime JavaScript yang memungkinkan saya menjalankan kode di luar browser. Saya menggunakannya untuk mengelola dependensi proyek.",
    icon: "nodejs",
  },
  {
  name: "Tailwind",
  description: "Ini adalah framework css yang saya sering pakai",
  icon: "tailwindcss",
  },
  {
    name: "Excel",
    description: "Saya juga dapat menggunakan excel untuk mengelola data saya.",
    icon: "excel",
  },
  {
    name: "Git",
    description:
      "Sistem version control yang saya gunakan untuk mengelola perubahan kode secara efisien, berkolaborasi dalam tim, serta menjaga integritas proyek",
    icon: "git",
  },
  {
    name: "Docker",
    description:
      "Docker memungkinkan saya untuk membuat, mengelola, dan menjalankan aplikasi dalam lingkungan yang terisolasi menggunakan container",
    icon: "Docker",
  },
];

export default hardSkills;
