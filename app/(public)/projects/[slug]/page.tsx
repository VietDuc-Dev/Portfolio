import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

export default function ProjectDetailPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      {/* Preview */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
        {/* <Image
          src="/projects/portfolio-preview.png" // thay bằng ảnh của bạn
          alt="Professional Portfolio Template"
          width={1400}
          height={800}
          className="object-cover w-full"
          priority
        /> */}
        <img
          className="w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] "
          src="https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85"
          alt="Sunset in the mountains"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Professional Portfolio Template
          </h1>

          <p className="text-sm mb-8">
            Featured: <span className="font-medium">No</span>
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Getform",
                "Google Fonts",
                "HTML",
                "CSS",
                "JavaScript",
                "Getform",
                "Google Fonts",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full glass"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h3 className="font-semibold mb-3">Project Features</h3>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Modern and fully responsive UI</li>
              <li>Fast performance with minimal HTML & CSS</li>
              <li>Contact form integration with Getform</li>
              <li>Mobile tab navigation setup</li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="font-semibold mb-3">Project Links</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="hover:text-white">
                <FaGithub /> Github
              </Button>
              <Button variant="outline" className="hover:text-white">
                <FaGlobe /> Live
              </Button>
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

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="
        p-3 rounded-full border
        hover:bg-muted transition
      "
    >
      {icon}
    </Link>
  );
}
