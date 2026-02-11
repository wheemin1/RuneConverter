import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faqQ1'), a: t('faqA1') },
    { q: t('faqQ2'), a: t('faqA2') },
    { q: t('faqQ3'), a: t('faqA3') },
    { q: t('faqQ4'), a: t('faqA4') },
    { q: t('faqQ5'), a: t('faqA5') },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto mt-12 bg-gradient-to-br from-amber-50/80 to-stone-50/80 border-amber-200/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-center text-amber-900">
          {t('faqTitle')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-amber-900 font-semibold hover:text-amber-700">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-stone-700 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
