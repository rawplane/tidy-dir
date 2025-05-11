interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Ini adalah framework untuk membuat static website saya.",
    icon: "astro_dark",
  },
  {
    name: "NodeJs",
    description:
      "Runtime JavaScript yang memungkinkan saya menjalankan kode di luar browser. Saya menggunakannya untuk mengelola dependensi proyek saya.",
    icon: "nodejs",
  },
  {
  name: "Tailwind",
  description: "Ini adalah framework css yang saya sering pakai",
  icon: "tailwindcss",
  },
  {
    name: "Microsoft Office Suite",
    description: "Saya menggunakan microsoft office untuk membuat dokumen, mengelola data, dan membuat slide presentasi melalui Word, Excel, dan Power Point.",
    icon: "microsoft",
  },
  {
    name: "Git",
    description:
      "Sistem version control yang saya gunakan untuk mengelola perubahan kode saya.",
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
