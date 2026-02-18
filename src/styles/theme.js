const theme = {
  colors: {
    primary: '#4F46E5', // Indigo 600
    primaryHover: '#4338CA', // Indigo 700
    secondary: '#64748B', // Slate 500
    secondaryHover: '#475569', // Slate 600
    background: '#F8FAFC', // Slate 50
    surface: '#FFFFFF',
    bodyBackground: '#F1F5F9', // Slate 100
    text: '#1E293B', // Slate 800
    textSecondary: '#64748B', // Slate 500
    textLight: '#F1F5F9',
    border: '#E2E8F0', // Slate 200
    error: '#EF4444', // Red 500
    success: '#10B981', // Emerald 500
    warning: '#F59E0B', // Amber 500
  },
  fonts: {
    main: 'Inter, system-ui, -apple-system, sans-serif',
    heading: 'Inter, system-ui, -apple-system, sans-serif', // Opcional, se quiser diferenciar
  },
  fontSizes: {
    xsmall: '0.75rem',  // 12px
    small: '0.875rem',  // 14px
    medium: '1rem',     // 16px
    large: '1.25rem',   // 20px
    xlarge: '1.5rem',   // 24px
    xxlarge: '2.25rem', // 36px
    huge: '3rem',       // 48px
  },
  spacing: {
    xsmall: '0.25rem', // 4px
    small: '0.5rem',   // 8px
    medium: '1rem',    // 16px
    large: '1.5rem',   // 24px
    xlarge: '2rem',    // 32px
    xxlarge: '3rem',   // 48px
    huge: '5rem',      // 80px
  },
  borderRadius: {
    small: '0.375rem', // 6px
    default: '0.5rem', // 8px
    large: '0.75rem',  // 12px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    default: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default theme;