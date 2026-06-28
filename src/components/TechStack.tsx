import { motion } from "motion/react";
import { ChevronRight, Layers, Cpu, Wrench } from "lucide-react";
import { SKILLS_AND_TOOLS } from "../data";

// Helper component to render authentic official SVG brand logos for the tech stack
function TechLogo({ icon }: { icon: string }) {
  switch (icon) {
    case "html":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#E34F26" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#1572B6" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.25l.186 2.06h8.468l-.282 3.07-2.96.804-2.992-.804-.191-2.184H6.244l.386 4.39 5.372 1.45 5.39-1.45.626-6.91H6.591zm.655-5.632l.24 2.622h13.064l-.24-2.622H7.246z"/>
        </svg>
      );
    case "js":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.024-.77-1.87-2.028-2.382-.823-.332-1.748-.495-2.172-.888-.175-.157-.24-.343-.24-.556 0-.315.228-.523.578-.606.315-.067.752-.016 1.054.168.324.195.532.55.578.966h2.72c-.048-1.554-.93-2.658-2.222-3.084-.508-.168-1.085-.23-1.63-.23-1.493 0-2.49.684-2.906 1.764-.203.532-.232 1.134-.232 1.696 0 1.258.484 2.14 1.34 2.623.774.43 1.834.61 2.378.95.27.172.392.4.392.744 0 .393-.343.684-.875.684-.627 0-.987-.291-1.185-.774-.244-.588-.232-1.275-.251-1.87h-2.734c.038 1.947.966 3.125 2.585 3.516.578.134 1.25.134 1.82 0 1.705-.365 2.806-1.396 2.903-3.141zm-10.457-3.41h-2.72v5.71c0 .548-.12.752-.52.752-.365 0-.52-.168-.52-.752V14.86H5.62v6.643c0 1.777.923 2.518 2.533 2.518 1.545 0 2.525-.71 2.768-2.152.096-.583.111-1.196.111-1.795v-5.222z"/>
        </svg>
      );
    case "ts":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0zm20.088 18.068c-.143-.85-.64-1.55-1.684-1.97-.68-.27-1.45-.41-1.8-.73-.143-.13-.2-.28-.2-.46 0-.26.19-.43.48-.5.26-.05.62-.01.87.14.27.16.44.45.48.8h2.25c-.04-1.29-.77-2.2-1.84-2.55-.42-.14-.9-.19-1.35-.19-1.24 0-2.06.57-2.41 1.46-.17.44-.19.94-.19 1.4 0 1.04.4 1.77 1.11 2.17.64.36 1.52.5 1.97.79.22.14.32.33.32.61 0 .32-.28.57-.72.57-.52 0-.82-.24-.98-.64-.2-.49-.19-1.06-.21-1.55h-2.27c.03 1.61.8 2.59 2.14 2.92.48.11 1.04.11 1.51 0 1.41-.3 2.33-1.16 2.41-2.6zm-10.42-3.15H4.25v1.94h2.28v6.17h2.23v-6.17h2.27v-1.94z"/>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm animate-[spin_12s_linear_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm bg-black rounded-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="black" stroke="rgba(255,255,255,0.1)"/>
          <path d="M18.25 19L9.25 7.5H7.5V16.5H9V9.75L17.15 20.05C17.55 19.75 17.9 19.4 18.25 19Z" fill="white"/>
          <rect x="15" y="7.5" width="1.5" height="9" fill="white"/>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#38BDF8" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <path fill="#BD34FE" d="M22.41 3.513L12.75 21.05c-.32.58-.92.58-1.24 0L1.85 3.513c-.34-.63.26-1.34.92-1.07l8.47 3.48c.24.1.52.1.76 0l8.47-3.48c.66-.27 1.26.44.92 1.07z"/>
            <path fill="#FFD62A" d="M16.14 7.6l-5.6 10.93c-.15.3-.58.3-.73 0l-3.3-6.43c-.1-.2-.05-.45.13-.58l7.6-5.55c.34-.25.86.12.7.53L14 9.17c-.07.18.02.38.18.45l1.64.65c.35.14.48.56.23.83z"/>
          </g>
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M12 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-4v-8z" fill="#1ABCFE"/>
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25.18a.25.25 0 0 0-.25.25v2.45a.25.25 0 0 1-.25.25H9.4a3.74 3.74 0 0 0-3.74 3.74v1.83H1.83A1.83 1.83 0 0 0 0 10.53v3.66a1.83 1.83 0 0 0 1.83 1.83h2.44v-2.44a3.74 3.74 0 0 1 3.74-3.74h4.32a.25.25 0 0 0 .25-.25V7.12a3.74 3.74 0 0 1 3.74-3.74h1.83V1.83A1.83 1.83 0 0 0 16.32 0h-1.83a.25.25 0 0 0-.24.18z" fill="#3776AB"/>
          <path d="M9.75 23.82a.25.25 0 0 0 .25-.25v-2.45a.25.25 0 0 1 .25-.25h4.35a3.74 3.74 0 0 0 3.74-3.74v-1.83h3.83A1.83 1.83 0 0 0 24 13.47v-3.66a1.83 1.83 0 0 0-1.83-1.83h-2.44v2.44a3.74 3.74 0 0 1-3.74 3.74H11.7a.25.25 0 0 0-.25.25v2.45a3.74 3.74 0 0 1-3.74 3.74H5.88v1.51a1.83 1.83 0 0 0 1.83 1.83h1.83a.25.25 0 0 0 .21-.18z" fill="#FFD343"/>
          <circle cx="7.34" cy="5.16" r="0.67" fill="#fff"/>
          <circle cx="16.66" cy="18.84" r="0.67" fill="#fff"/>
        </svg>
      );
    case "cpp":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L1.04 6v12L12 24l10.96-6V6L12 0z" fill="#00599C"/>
          <path d="M13.4 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c1 0 1.9.4 2.6 1h-1.6c-.3-.2-.6-.3-1-.3-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4c.5 0 .9-.2 1.2-.4H11c.5.8 1.4 1.3 2.4 1.3V12z" fill="#fff"/>
          <path d="M15 11h1V10h1v1h1v1h-1v1h-1v-1h-1v-1zm4.5 0h1V10h1v1h1v1h-1v1h-1v-1h-1v-1z" fill="#fff"/>
        </svg>
      );
    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#009688" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.5 12h-4v7.5l-5-10h4v-5l5 7.5z"/>
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#FF2D20" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 10.963a.5.5 0 0 0-.251-.433l-4.521-2.585v4.542l3.456 1.977a.5.5 0 0 0 .5-.002.5.5 0 0 0 .253-.434v-5.065zm-11.453 5.483l-3.456-1.977a.5.5 0 0 0-.5.002.5.5 0 0 0-.253.434v3.541l4.209 2.407a.5.5 0 0 0 .5-.002.5.5 0 0 0 .253-.434v-3.541l-.753-.43zm-7.709-6.326l3.456 1.977V7.556l-3.456-1.977a.5.5 0 0 0-.5.002.5.5 0 0 0-.253.434v4.542zm11.413 2.115l3.456 1.977v-4.542l-3.456-1.977V7.21l4.209 2.407a.5.5 0 0 1 .253.434v5.065a.5.5 0 0 1-.253.434l-4.209 2.407V12.235zM7.201 13.914a.5.5 0 0 1 .253-.434l4.209-2.407v4.542l-3.456-1.977a.5.5 0 0 1-.253-.434V13.914zM.047 13.037a.5.5 0 0 1 .253-.434l4.209-2.407v4.542l-3.456-1.977a.5.5 0 0 1-.253-.434v-3.541z"/>
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.27 2.21a7.43 7.43 0 0 0-3.3 2c-.67.7-1 1.6-1 2.3 0 .5.3 1 .6 1.2a12.63 12.63 0 0 1-2.4 1.4c-1.4.7-2.8 1.4-3.7 2.5a5.53 5.53 0 0 0-1.1 2.5c-.2 1.4.4 2.8 1.5 3.7A8.13 8.13 0 0 0 6 19.11c1.3.4 2.8 0 4-.5a15.7 15.7 0 0 1 3.5-.8c.9-.1 1.8 0 2.5-.2a6.43 6.43 0 0 0 4.1-3.6 8.35 8.35 0 0 0 .5-3.3c-.1-1.3-.7-2.6-1.6-3.6a8.87 8.87 0 0 0-4.6-2.5 14.16 14.16 0 0 0-2.11-.3z" fill="#00758F"/>
          <path d="M12.17 3.51a14.2 14.2 0 0 1 2.1 1.1 6.53 6.53 0 0 1 2.7 3.1 7.23 7.23 0 0 1 .3 4.3 8.36 8.36 0 0 1-2.5 4.7l.4-.8a6.38 6.38 0 0 0-.2-4.9c-.6-1.1-1.6-1.9-2.7-2.4a15.34 15.34 0 0 0-3.1-.9l.6-.2a6.43 6.43 0 0 1 2.4-.1z" fill="#F29111"/>
        </svg>
      );
    case "nest":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#E0234E" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.93 24a.12.12 0 0 1-.12-.08l-2.45-6.6a.12.12 0 0 1 .05-.14l4.24-2.86a.12.12 0 0 1 .15 0l4.24 2.86a.12.12 0 0 1 .05-.14l-2.45 6.6a.12.12 0 0 1-.12.08H11.93z" fillOpacity=".8"/>
          <path d="M12 0L1.44 3.86l2.12 8.78L12 18.5l8.44-5.86 2.12-8.78L12 0z" />
          <path d="M12 4.1L5.8 6.34l1.24 5.12L12 15l4.96-3.54 1.24-5.12L12 4.1z" fill="#FFF"/>
          <path d="M12 6.5l-3.3 1.2.66 2.73L12 12l2.64-1.57.66-2.73-3.3-1.2z" />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#777BB4" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-5.32 15h-1.61l.53-2.61h1.36c1.12 0 1.83-.55 2.05-1.63.22-1.07-.31-1.62-1.43-1.62h-1.42L5.5 15H3.89l2.12-10.42h3.29c2.39 0 3.49 1.13 3.01 3.52-.43 2.11-1.92 3.52-4.04 3.52l.53-2.62H7.43l-.53 2.62h1.61L8 15zm7.32 0h-1.61l2.12-10.42h1.61L14 15zm7.52 0H19.9l.53-2.61h1.36c1.12 0 1.83-.55 2.05-1.63.22-1.07-.31-1.62-1.43-1.62H21l-.63 3.12-1.61.02L20.88 4.58h3.29c2.39 0 3.49 1.13 3.01 3.52-.43 2.11-1.92 3.52-4.04 3.52h.38z" transform="scale(0.8) translate(3, 3)"/>
        </svg>
      );
    case "rest":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#009688" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 6c0 1.66 3.58 3 8 3s8-1.34 8-3V8.15c-1.83 1.15-4.78 1.85-8 1.85s-6.17-.7-8-1.85V12zm0 6c0 1.66 3.58 3 8 3s8-1.34 8-3v-3.85c-1.83 1.15-4.78 1.85-8 1.85s-6.17-.7-8-1.85V18z"/>
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#007ACC" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.793L3.13 6.205a.752.752 0 0 0-.796.035L.32 7.747a.752.752 0 0 0-.317.51l-.79 11.246a.752.752 0 0 0 .317.654l2.015 1.507a.752.752 0 0 0 .796.035l3.914-3.087 9.46 8.793a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.413V4.587a1.5 1.5 0 0 0-.85-1.365zM4 14.1v-4.2l3.7 2.1L4 14.1zm14 4.5l-6-5.1 6-5.1v10.2z"/>
        </svg>
      );
    case "android":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#3DDC84" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.523 15.3414a.6108.6108 0 0 1-.6108-.6108v-4.1021a.6108.6108 0 0 1 1.2216 0v4.1021a.6108.6108 0 0 1-.6108.6108zm-11.046 0a.6108.6108 0 0 1-.6108-.6108v-4.1021a.6108.6108 0 0 1 1.2216 0v4.1021a.6108.6108 0 0 1-.6108.6108zm10.155-8.0642l1.2774-2.2131a.2443.2443 0 0 0-.0853-.3323.2435.2435 0 0 0-.3313.0883l-1.2952 2.2441a7.9944 7.9944 0 0 0-4.2023-.119L10.735 4.7046a.2435.2435 0 0 0-.3313-.0883.2443.2443 0 0 0-.0853.3323l1.2774 2.2131C8.3616 8.3541 6.321 10.6384 6.046 13.3986h11.908c-.275-2.7602-2.3156-5.0445-5.3283-6.1214zM9.7045 10.4286a.4883.4883 0 1 1 .4883-.4883.4883.4883 0 0 1-.4883.4883zm4.591 0a.4883.4883 0 1 1 .4883-.4883.4883.4883 0 0 1-.4883.4883z"/>
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#F05032" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.384 11.61L12.39.616c-.82-.82-2.147-.82-2.966 0L8.14 1.897l3.028 3.028c.78-.266 1.688-.063 2.29.539.608.608.81 1.52.532 2.305l3.02 3.02c.783-.28 1.696-.076 2.305.532.784.783.784 2.053 0 2.836-.783.784-2.053.784-2.836 0-.61-.61-.813-1.527-.531-2.31l-2.936-2.935v5.03c.28.084.536.24.733.438.783.783.783 2.053 0 2.836-.783.784-2.053.784-2.836 0-.783-.783-.783-2.053 0-2.836.2-.2.456-.354.733-.438V9.124a1.864 1.864 0 0 1-.733-.438 1.87 1.87 0 0 1-.532-2.305l-3.02-3.02-6.13 6.13c-.82.82-.82 2.147 0 2.966l10.993 10.993c.82.82 2.147.82 2.966 0l10.993-10.993c.82-.82.82-2.147 0-2.966z"/>
        </svg>
      );
    case "photoshop":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#001C2C" stroke="#00C8FF" strokeWidth="1.5"/>
          <text x="12" y="16.5" fill="#00C8FF" fontSize="12" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">Ps</text>
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#181717" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 22.525H0L12 1.475L24 22.525Z"/>
        </svg>
      );
    case "illustrator":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#261300" stroke="#FF9A00" strokeWidth="1.5"/>
          <text x="12" y="16.5" fill="#FF9A00" fontSize="12" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">Ai</text>
        </svg>
      );
    case "npm":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#CB3837" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0zm21.365 3.33H2.63v17.34h9.38v-12.2h4.31v12.2h5.05V3.33z"/>
        </svg>
      );
    case "motion":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h12l6 6H6L0 0zm0 12h18l-6 6H0v-6zm12-6h12l-6 6H12V6z"/>
        </svg>
      );
    case "vue":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 1.5h-4.2L12 15 4.2 1.5H0L12 22.5 24 1.5z" fill="#41B883"/>
          <path d="M20 1.5h-4L12 8.5 8 1.5H4l8 14 8-14z" fill="#35495E"/>
        </svg>
      );
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 select-none pointer-events-none drop-shadow-sm" fill="#336791" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.92 11.1c-.2-.5-.5-.9-.9-1.2l-.4-.3a7.48 7.48 0 0 0-4.9-1.8H14.1c-.5 0-.9.2-1.2.5l-1.3 1.3-1.3-1.3a1.74 1.74 0 0 0-1.2-.5H7.3c-1.9 0-3.7.7-4.9 1.8l-.4.3c-.4.3-.7.7-.9 1.2-.4 1-.4 2.1-.1 3.1.3 1 .9 1.8 1.8 2.4l.4.3c1 .7 2.2 1 3.4 1H7c.4 0 .8-.1 1.2-.2v2.4c0 1 .4 1.9 1.1 2.6l1.2 1.2c.7.7 1.6 1.1 2.6 1.1h1.8c1 0 1.9-.4 2.6-1.1l1.2-1.2c.7-.7 1.1-1.6 1.1-2.6v-2.4c.4.1.8.2 1.2.2h.4c1.2 0 2.4-.3 3.4-1l.4-.3c.9-.6 1.5-1.4 1.8-2.4.3-1 .3-2.1-.1-3.1z"/>
        </svg>
      );
    default:
      return <div className="w-8 h-8 rounded bg-white/10 text-white font-bold text-xs flex items-center justify-center">⚙️</div>;
  }
}

export default function TechStack() {
  return (
    <section id="skills" className="min-h-screen w-full bg-cream p-6 md:p-12 flex flex-col justify-between border-b border-near-black/10 select-none">
      
      {/* Running Page Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-near-black/60 pt-2 border-b border-near-black/10 pb-4">
        <div>PORTFOLIO</div>
        <div className="hidden sm:block">FULLSTACK DEVELOPER</div>
        <div>20(26)</div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full mt-10 md:mt-16">
        
        {/* Double Folder Tabs Header */}
        <div className="flex flex-col sm:flex-row gap-2 relative z-10 -mb-[2px] px-2">
          
          {/* Inactive Introduction Tab */}
          <button 
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#1D6FB8] hover:bg-brand-blue text-white/90 hover:text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-pointer border-t border-x border-near-black/5 transition-colors"
          >
            INTRODUCTION
            <ChevronRight className="w-4 h-4 text-white/30" />
          </button>

          {/* Active Skills & Tools Tab */}
          <div className="relative bg-brand-blue text-white px-8 py-3 rounded-t-2xl font-mono text-sm tracking-wider flex items-center gap-2 cursor-default border-t border-x border-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            SKILLS & TOOLS
            <ChevronRight className="w-4 h-4 text-white/50" />
          </div>
        </div>

        {/* Main Blue Banner Container */}
        <div className="bg-brand-blue rounded-r-3xl rounded-bl-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-10 justify-between relative overflow-hidden min-h-[600px]">
          
          {/* Subtle grid accent background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Large Title Section */}
          <div className="text-center md:text-left z-10 space-y-2">
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white uppercase leading-none">
              Tech Stack
            </h2>
            <p className="text-white/60 font-mono text-xs uppercase tracking-widest">
              BUILDING MODERN AND SCALABLE DIGITAL SOLUTIONS
            </p>
          </div>

          {/* Three Categorized Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
            
            {/* Frontend Column */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Frontend
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.frontend.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Column */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Backend
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.backend.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools Column */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white/95 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-white/25 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-near-black/5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-lg text-near-black tracking-tight uppercase">
                    Tools
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {SKILLS_AND_TOOLS.tools.map((tech) => (
                    <motion.div 
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-near-black/5 transition-colors group cursor-default"
                    >
                      <TechLogo icon={tech.icon} />
                      <span className="text-[10px] font-mono font-medium text-near-black/70 mt-1.5 group-hover:text-near-black transition-colors text-center truncate w-full">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-near-black/50 mt-10 border-t border-near-black/10 pt-4">
        <span>02 // SKILLS & TOOLS</span>
        <span className="h-px bg-near-black/10 flex-1 mx-4"></span>
        <span>BUILDING MODERN SOLUTIONS</span>
      </div>
    </section>
  );
}
