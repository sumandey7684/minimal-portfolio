export interface Project {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Code Canvas",
    description:
      "Code Canvas is a Next.js app that lets you write, preview, and style code snippets in real time with syntax highlighting, customizable themes, fonts, and gradient backgrounds.",
    live: "https://code-canvas-suman.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/CodeCanvas",
  },
  {
    id: "2",
    name: "Tarang",
    description:
      "A simple tool for generating customizable mesh gradients with text/image overlays, export options, and wallpaper/asset use.",
    live: "https://tarang-suman.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/wallpaper-app",
  },
  {
    id: "3",
    name: "GyaanSaar-AI",
    description:
      "An OpenAI GPT-4 powered Next.js tool that summarizes articles from URLs with a sleek, animated UI.",
    live: "https://gyaansaar-ai.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/GyaanSaar-AI",
  },
  {
    id: "4",
    name: "SumanFolio-v3",
    description:
      "Personal portfolio showcasing projects, skills, and experience with a modern design built using Next.js and Tailwind CSS.",
    live: "https://suman-folio-v3-89th.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/SumanFolio-v3",
  },
  {
    id: "5",
    name: "Brainwave",
    description:
      "A modern React + Tailwind website showcasing sleek UI/UX design, smooth animations, and inspirational user experience.",
    live: "https://brainwave-suman.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/Brainwave",
  },
  {
    id: "6",
    name: "Metaversus",
    description:
      "A Next.js 13 website built with Tailwind CSS and Framer Motion, featuring smooth animations and a full build–deploy workflow.",
    live: "https://metaversus-ten-ashy.vercel.app/",
    sourceCode: "https://github.com/sumandey7684/Metaversus",
  },
];
