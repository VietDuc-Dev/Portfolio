"use client";

import { Button } from "@/components/ui/button";
import ProjectAPI from "@/lib/server/ProjectAPI";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import LoadingProject from "../loading";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      try {
        const data = await ProjectAPI.getProjectDetail(slug);
        setProject(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <LoadingProject />;

  if (!project) {
    return (
      <p className="text-center mt-12 text-muted-foreground">
        Project not found.
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      {/* Preview */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
        <Image
          src={project.images[0].imageUrl}
          alt="Professional Portfolio Template"
          width={1400}
          height={800}
          className="object-cover w-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-sm mb-8">
            <span className="font-normal">{project.description}</span>
          </p>

          <p className="text-sm mb-8">
            Featured: <span className="font-medium">{project.featured}</span>
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((tech) => (
                <span
                  key={tech.skillId}
                  className="px-4 py-1.5 text-xs font-medium rounded-full glass"
                >
                  {tech.skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h3 className="font-semibold mb-3">Project Features</h3>
            <ul className="space-y-2 list-disc pl-5">
              {project.features.map((item) => (
                <li key={item.id}>
                  {item.emoji} {item.message}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="font-semibold mb-3">Project Links</h3>
            <div className="flex flex-wrap gap-4">
              <Link href={project.githubUrl}>
                <Button variant="outline" className="hover:text-white">
                  <FaGithub /> Github
                </Button>
              </Link>
              <Link href={project.liveUrl}>
                <Button variant="outline" className="hover:text-white">
                  <FaGlobe /> Live
                </Button>
              </Link>
              <Button variant="outline" className="hover:text-white">
                <FaYoutube /> Youtube
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="space-y-6">
          {/* CTA */}
          {/* <div className="rounded-2xl border p-6 shadow-sm">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition">
              Purchase Premium Code
            </button>
          </div> */}
          {/* Connect */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Contact me</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="hover:text-white">
                <FaYoutube /> Zalo
              </Button>
              <Button variant="outline" className="hover:text-white">
                <FaYoutube /> Email
              </Button>
              <Button variant="outline" className="hover:text-white">
                <FaYoutube /> Phone
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
