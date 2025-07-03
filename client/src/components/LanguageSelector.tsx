import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, type Language } from '@/lib/i18n';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-viking-tan hover:bg-viking-tan/10 transition-colors gap-2 min-w-[120px]"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-parchment border-viking-tan/20 shadow-lg"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`cursor-pointer flex items-center gap-3 p-3 hover:bg-viking-tan/10 transition-colors ${
              language === lang.code ? 'bg-viking-tan/20 font-semibold' : ''
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium text-viking-brown">{lang.nativeName}</span>
              <span className="text-xs text-text-brown-light">{lang.name}</span>
            </div>
            {language === lang.code && (
              <div className="ml-auto w-2 h-2 bg-viking-gold rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}