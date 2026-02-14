export interface Project {
  id: string;
  title: string;
  category: 'web' | 'design';
  thumbnail: string;
  previewUrl?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

// Fix: Added ChatMessage interface to resolve 'no exported member' error in AIChat.tsx
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}