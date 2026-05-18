import type { Metadata } from 'next';
import React from 'react';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | WealthMind Finserve",
  description: "Book a free 30-minute consultation with our NISM certified advisor. No commitment, just clarity.",
};

export default function ContactPage() {
  return <ContactClient />;
}
