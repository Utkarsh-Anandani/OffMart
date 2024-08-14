import { ThemeProvider } from '../components/theme-provider';
import './ai.css'

type AiAssistantLayoutProps = {
    children: React.ReactNode;
};

export default function AiAssistantLayout({ children }: AiAssistantLayoutProps) {
    return (
    <ThemeProvider attribute= "class" defaultTheme = "system" enableSystem disableTransitionOnChange>
        { children }
    </ThemeProvider>
  );
}
