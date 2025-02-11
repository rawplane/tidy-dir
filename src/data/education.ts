interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  currentUni: boolean;
}

const education: Education[] = [
  {
    title: "Teknik Komputer Jaringan",
    startDate: "2024-09-01",
    endDate: "",
    school: "SMK Prisma Depok",
    location: "",
    description: "Mempelajari Jaringan Komputer dasar.",
    currentUni: true,
  },
];

export default education;

