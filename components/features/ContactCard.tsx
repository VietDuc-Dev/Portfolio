import Image from "next/image";
import { Icon } from "../common/icons/icon";
import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="w-full transform hover:scale-[1.02] transition-transform duration-500 ease-in-out relative overflow-hidden grid grid-cols-3 py-4">
      {/* Avatar */}
      <div>
        <div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

          <div className="absolute inset-0 bg-linear-to-br from-purple-400/20 via-transparent to-blue-400/20 rounded-3xl border rounded-bl-none rounded-tr-none"></div>

          <div className="flex justify-center mb-6 relative z-10 mt-5">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="w-30 h-30 object-cover rounded-full border-4 border-white/80 shadow-xl hover:scale-105 transform transition-all duration-400 relative z-10 overflow-hidden">
                <Image
                  src="/Avatar.jpg"
                  alt="Avatar"
                  fill
                  sizes="120px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 text-primary">
          <div className="flex items-start gap-1">
            <Phone size={13} className="mt-1" />
            <p className="text-sm">+84 386 631 531</p>
          </div>
          <div className="flex items-start gap-1">
            <Mail size={13} className="mt-1" />
            <p className="text-sm">levietduc.dev@gmail.com</p>
          </div>
          <div className="flex items-start gap-1">
            <MapPin size={13} className="mt-1" />
            <p className="text-sm">Hiep Binh Chanh, Thu Duc</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-2">
        <div className="text-center mb-6 relative z-10">
          <h2 className="text-3xl font-bold mb-2">
            <span className="relative inline-block">Le Viet Duc</span>
          </h2>
          {/* <p className="text-lg font-medium text-purple-200 tracking-wider">
            levietduc.dev@gmail.com
          </p> */}
        </div>

        <p className="text-center text-white/80 mb-8 px-6 relative z-10 transition-all duration-500 hover:text-white">
          I’m a web developer focused on building performant, scalable, and
          user-friendly web applications. Open to collaboration, and long-term
          opportunities.
        </p>

        <div className="flex justify-center space-x-6 z-10">
          <Icon>
            <FaGithub size={22} />
          </Icon>
          <Icon>
            <FaLinkedin size={22} />
          </Icon>
          <Icon>
            <FaFacebook size={22} />
          </Icon>
          <Icon>
            <FaYoutube size={22} />
          </Icon>
          <Icon>
            <FaTiktok size={22} />
          </Icon>
        </div>
      </div>
    </div>
  );
}
