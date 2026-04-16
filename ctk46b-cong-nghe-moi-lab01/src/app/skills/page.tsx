const skillGroups = [
  {
    title: "Ngôn ngữ lập trình",
    items: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.JS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API", "PostgreSQL"],
  },
  {
    title: "Công cụ",
    items: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold mb-3">{group.title}</h2>
            <ul className="space-y-2 text-gray-700">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
