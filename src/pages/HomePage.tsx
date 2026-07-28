import { AboutSection } from '@/components/sections/AboutSection';
import { ArtificialVisionSection } from '@/components/sections/ArtificialVisionSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { DigitalInfrastructureSection } from '@/components/sections/DigitalInfrastructureSection';
import { DroneInventorySection } from '@/components/sections/DroneInventorySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { ServicesMapSection } from '@/components/sections/ServicesMapSection';
import { ValueSystemSection } from '@/components/sections/ValueSystemSection';
import { VisionProcessFlowSection } from '@/components/sections/VisionProcessFlowSection';
import { SeoHead } from '@/seo/SeoHead';
import { buildOrganizationJsonLd } from '@/seo/organizationJsonLd';
import { homeSeo } from '@/seo/types';

const homePageSeo = { ...homeSeo, jsonLd: buildOrganizationJsonLd() };

export function HomePage() {
  return (
    <>
      <SeoHead seo={homePageSeo} />
      <HeroSection />
      <AboutSection />
      <ValueSystemSection />
      <ServicesMapSection />
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
