import { AboutSection } from '@/components/sections/AboutSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ExplorePagesSection } from '@/components/sections/ExplorePagesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { ServicesMapSection } from '@/components/sections/ServicesMapSection';
import { StockDifferencesSection } from '@/components/sections/StockDifferencesSection';
import { TechnologyComplementSection } from '@/components/sections/TechnologyComplementSection';
import { ValueSystemSection } from '@/components/sections/ValueSystemSection';
import { WarehouseIntentSection } from '@/components/sections/WarehouseIntentSection';
import { getRouteById } from '@/routes';
import { SeoHead } from '@/seo/SeoHead';
import { toPageSeo } from '@/seo/pageSeo';

const homeRoute = getRouteById('home');
if (!homeRoute) throw new Error('Home route missing from publishedRoutes');
const homePageSeo = toPageSeo(homeRoute);

export function HomePage() {
  return (
    <>
      <SeoHead seo={homePageSeo} />
      <HeroSection />
      <AboutSection />
      <ValueSystemSection />
      <ServicesMapSection />
      <IndustriesSection />
      <MethodologySection />
      <WarehouseIntentSection />
      <StockDifferencesSection />
      <TechnologyComplementSection />
      <ClientsSection />
      <ExplorePagesSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
