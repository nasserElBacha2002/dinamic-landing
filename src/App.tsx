import { Box } from '@mantine/core';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
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

export default function App() {
  return (
    <Box component="div" bg="gray.0" style={{ overflowX: 'hidden' }}>
      <Header />
      <Box component="main">
        <HeroSection />
        <AboutSection />
        <ValueSystemSection />
        <ServicesMapSection />
        <DigitalInfrastructureSection />
        <DroneInventorySection />
        <ArtificialVisionSection />
        <MethodologySection />
        <ClientsSection />
        <CtaSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
