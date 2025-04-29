
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					navy: "#0A192F",
					lightNavy: "#112240",
					lightestNavy: "#233554",
					slate: "#8892B0",
					lightSlate: "#A8B2D1",
					lightestSlate: "#CCD6F6",
					white: "#E6F1FF",
					teal: "#64FFDA",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				pulse: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				'robot-hover': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-5px) rotate(-5deg)'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(5deg)'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'reverse-spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(-360deg)'
					}
				},
				'float-particle': {
					'0%, 100%': {
						transform: 'translate(0px, 0px)'
					},
					'25%': {
						transform: 'translate(5px, -5px)'
					},
					'50%': {
						transform: 'translate(0px, -10px)'
					},
					'75%': {
						transform: 'translate(-5px, -5px)'
					}
				},
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateX(20px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(20px) rotate(-360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'robot-hover': 'robot-hover 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'reverse-spin-slow': 'reverse-spin-slow 12s linear infinite',
				'float-particle': 'float-particle 8s ease-in-out infinite',
				'float-particle-delay': 'float-particle 8s ease-in-out 1s infinite',
				'float-particle-delay-2': 'float-particle 8s ease-in-out 2s infinite',
				'orbit': 'orbit 10s linear infinite',
				'orbit-delay': 'orbit 12s linear 1s infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
