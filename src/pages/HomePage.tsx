import { AboutSection } from '@/components/sections/AboutSection';
import { ArtificialVisionSection } from '@/components/sections/ArtificialVisionSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { DigitalInfrastructureSection } from '@/components/sections/DigitalInfrastructureSection';
import { DroneInventorySection } from '@/components/sections/DroneInventorySection';
import { ExplorePagesSection } from '@/components/sections/ExplorePagesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { ServicesMapSection } from '@/components/sections/ServicesMapSection';
import { ValueSystemSection } from '@/components/sections/ValueSystemSection';
import { VisionProcessFlowSection } from '@/components/sections/VisionProcessFlowSection';
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
      <ExplorePagesSection />
      <DigitalInfrastructureSection />
      <DroneInventorySection />
      <ArtificialVisionSection />
      <VisionProcessFlowSection />
      <MethodologySection />
      <ClientsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
