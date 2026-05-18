import type { Metadata } from 'next';
import React from 'react';
import KnowledgeHubClient from './KnowledgeHubClient';

export const metadata: Metadata = {
  title: "Knowledge Hub | WealthMind Finserve",
  description: "Simple guides to help you invest smarter. Learn about SIP, ELSS, mutual funds and more.",
};

export default function KnowledgeHubPage() {
  return <KnowledgeHubClient />;
}
