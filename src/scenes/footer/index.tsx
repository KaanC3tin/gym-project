import { useRef } from "react";
import { Icon } from "@iconify/react";

import Logooo from "@/assets/Logooo.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kaan-%C3%A7etin-74a880275/",
    icon: "mdi:linkedin",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/kaanC3tin",
    icon: "mdi:github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mordecai.by",
    icon: "mdi:instagram",
  },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  useGsapFadeIn(footerRef, { offsetY: 30 });

  return (
    <footer ref={footerRef} className="bg-primary-100 py-16">
      <div className="mx-auto flex w-5/6 flex-col gap-14 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <img alt="irongym logo" src={Logooo} className="h-12 w-12" />
          <p className="mt-5 text-sm text-gray-700">
            Stay motivated and achieve your fitness goals with us. Join our community for expert tips, energising workouts, and
            ongoing support. Follow us on social media for the latest updates—your journey starts here!
          </p>
          <p className="mt-6 text-sm text-gray-700">© Irongym All Rights Reserved.</p>
        </div>

        <div className="max-w-sm">
          <h4 className="text-lg font-semibold text-gray-900">Bize Ulaşın</h4>
          <p className="mt-3 text-sm text-gray-700">kaan_1536@outlook.com</p>
          <ul className="mt-6 flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-500 shadow transition hover:scale-105 hover:text-secondary-500"
                  aria-label={link.label}
                >
                  <Icon icon={link.icon} width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
