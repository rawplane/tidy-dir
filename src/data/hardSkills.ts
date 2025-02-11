interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description:
      "Ini adalah framework kesukaan saya di karenakan ini membuat static website menjadi cepat",
    icon: "astro_dark",
  },
  {
    name: "NodeJs",
    description: "Nodejs lumayan baik untuk pengembangan backend saya.",
    icon: "nodejs",
  },
];

export default hardSkills;
