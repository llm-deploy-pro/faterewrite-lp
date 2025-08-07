// File location: tailwind.config.js
// Step 2: Visual Language Psychology Implementation

import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // Preserved original grays
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Enhanced blue palette for cognitive depth
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',  // Deep blue primary
          900: '#1E3A8A',
          950: '#172554',  // NEW: Darkest blue for gradients
        },
        // Strategic purple palette for intelligence/wisdom
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',  // NEW: Light purple for accents
          400: '#C084FC',  // NEW: Medium purple
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',  // Intelligence purple primary
          800: '#6B21A8',  // NEW: Deep purple
          900: '#581C87',  // NEW: Darkest purple
        },
        // NEW: Indigo bridge colors for smooth gradients
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        // NEW: Cognitive accent colors
        cognitive: {
          'deep-blue': '#1e40af',
          'wisdom-purple': '#7c3aed',
          'insight-indigo': '#4F46E5',
          'neural-violet': '#8B5CF6',
          'synapse-blue': '#3B82F6',
          'thought-purple': '#A78BFA',
        },
        // Preserved other colors
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
        },
        red: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        yellow: {
          50: '#FEFCE8',
          400: '#FACC15',
          500: '#EAB308',
        }
      },
      // NEW: Complex gradient definitions
      backgroundImage: {
        // Primary cognitive gradients
        'cognitive-gradient': 'linear-gradient(135deg, #1e40af 0%, #4338CA 25%, #6B21A8 50%, #7c3aed 100%)',
        'cognitive-radial': 'radial-gradient(ellipse at top, #1e40af, #7c3aed)',
        'cognitive-mesh': 'radial-gradient(at 40% 20%, #1e40af 0px, transparent 50%), radial-gradient(at 80% 80%, #7c3aed 0px, transparent 50%), radial-gradient(at 20% 70%, #4F46E5 0px, transparent 50%)',
        
        // Subtle background patterns
        'neural-pattern': 'linear-gradient(45deg, #1e40af 25%, transparent 25%), linear-gradient(-45deg, #1e40af 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e40af 75%), linear-gradient(-45deg, transparent 75%, #1e40af 75%)',
        'thought-waves': 'repeating-radial-gradient(circle at 0 0, transparent 0, #1e40af 10px, transparent 10px, transparent 20px)',
        
        // Glass morphism gradients
        'glass-gradient': 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
        'glass-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      // Enhanced animations for cognitive feel
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'scale-in': 'scaleIn 0.2s ease-out',
        // NEW: Cognitive-specific animations
        'thought-pulse': 'thoughtPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neural-flow': 'neuralFlow 8s linear infinite',
        'synapse-spark': 'synapseSpark 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        scaleIn: { '0%': { transform: 'scale(0.95)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        // NEW: Cognitive animations
        thoughtPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        neuralFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        synapseSpark: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      // Preserved spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      // Preserved font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      // Enhanced shadows for depth
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.1)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.15)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.2)',  // NEW
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-glow': 'inset 0 0 20px rgba(124, 58, 237, 0.1)',  // NEW
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'cognitive': '0 10px 40px -10px rgba(30, 64, 175, 0.3), 0 0 60px -20px rgba(124, 58, 237, 0.3)',  // NEW
      },
      // Backdrop blur for glassmorphism
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      // Preserved other properties
      aspectRatio: {
        'w-4': 4,
        'h-3': 3,
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transformOrigin: {
        'center-bottom': 'center bottom',
        'center-top': 'center top',
      }
    },
  },
  plugins: [
    typography,
  ],
}