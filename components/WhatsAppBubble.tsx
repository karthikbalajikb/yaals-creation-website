import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppBubble() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="clay-soft hidden rounded-full px-4 py-2 text-sm font-semibold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="pulse-ring absolute inset-0 rounded-full bg-green-500/40" />
        <span className="animate-float flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-[6px_6px_16px_rgba(18,140,126,0.45),-4px_-4px_12px_rgba(255,255,255,0.6)] transition-transform duration-200 group-hover:scale-105">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </span>
    </a>
  );
}
