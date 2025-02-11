interface Language {
  name: string;
  level: string;
  description: string;
  show: boolean;
}

const languages: Language[] = [
  {
    name: "Indonesia",
    level: "Native",
    description: "Ini bahasa ibu saya.",
    show: true,
  },
  {
    name: "English",
    level: "B1",
    description: "I can speak English like an intermediate",
    show: true,
  },
];

export default languages;

