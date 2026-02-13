# Atmos Design System Documentation

## Overview
A comprehensive, unique icon theme and modern UI/UX design system for the Atmos Carbon Footprint Tracker platform, featuring earth-tone sustainability aesthetics, custom SVG icons, and modern design patterns.

---

## 🎨 Design Philosophy

The Atmos design system embodies:
- **Sustainability-focused aesthetics** with earth tones and nature-inspired colors
- **Modern UI patterns** including glassmorphism and gradient effects
- **Professional, calm presentation** suitable for both individuals and enterprise clients
- **Accessibility-first** approach with WCAG-compliant color contrasts
- **Smooth micro-interactions** that enhance user experience without distraction

---

## 🎯 Custom Icon Set (SVG-based)

All icons are custom-designed SVG components with:
- Scalable vector graphics (no pixelation at any size)
- Customizable colors via props
- Consistent design language
- Optimized for web performance

### Icons Created:

1. **CarbonIcon** (`components/icons/CarbonIcon.js`)
   - Circular design with crosshairs
   - Represents carbon tracking and measurement
   - Used in: Navigation logo, hero section

2. **ActivityIcon** (`components/icons/ActivityIcon.js`)
   - Three-bar chart design with varying heights
   - Represents activity logging and tracking
   - Used in: Feature cards

3. **InsightsIcon** (`components/icons/InsightsIcon.js`)
   - Diamond shape with layered effects
   - Represents AI/ML insights and analysis
   - Used in: Feature cards

4. **TrendIcon** (`components/icons/TrendIcon.js`)
   - Upward trending line graph with data points
   - Represents progress tracking over time
   - Used in: Feature cards

5. **MapIcon** (`components/icons/MapIcon.js`)
   - Folded map with location marker
   - Represents regional context and comparisons
   - Used in: Feature cards

6. **EnterpriseIcon** (`components/icons/EnterpriseIcon.js`)
   - Building/office structure
   - Represents organization and enterprise features
   - Used in: Feature cards

---

## 🌈 Color Palette

### Primary Colors (Nature-Inspired)

**Forest Green** (Primary Brand Color)
```
50:  #f0fdf4
100: #dcfce7
200: #bbf7d0
300: #86efac
400: #4ade80
500: #22c55e ← Primary
600: #16a34a
700: #15803d
800: #166534
900: #14532d
```

**Ocean Blue** (Secondary)
```
50:  #ecfeff
100: #cffafe
200: #a5f3fc
300: #67e8f9
400: #22d3ee
500: #06b6d4
600: #0891b2
700: #0e7490
800: #155e75
900: #164e63
```

**Earth Brown** (Accent)
```
50:  #faf5f0
100: #f5ebe0
200: #e8d5c4
300: #d4b5a0
400: #b8957a
500: #9d7a5f
600: #8b6854
700: #735647
800: #5f483e
900: #503d34
```

**Sky Blue** (Highlights)
```
50:  #f0f9ff
100: #e0f2fe
200: #bae6fd
300: #7dd3fc
400: #38bdf8
500: #0ea5e9
600: #0284c7
700: #0369a1
800: #075985
900: #0c4a6e
```

**Leaf Green** (Accents)
```
50:  #f7fee7
100: #ecfccb
200: #d9f99d
300: #bef264
400: #a3e635
500: #84cc16
600: #65a30d
700: #4d7c0f
800: #3f6212
900: #365314
```

---

## 🧩 UI Components

### FeatureCard Component
**Location:** `components/ui/FeatureCard.js`

Features:
- Gradient border effect on hover
- Custom icon integration
- Smooth hover animations
- Arrow indicator on hover
- Multiple gradient variants

**Props:**
```javascript
{
  icon: Component,           // SVG icon component
  title: string,            // Card title
  description: string,      // Card description
  gradient: string         // Tailwind gradient classes
}
```

### GlassCard Component
**Location:** `components/ui/GlassCard.js`

Features:
- Glassmorphism effect with backdrop blur
- Semi-transparent background
- Subtle border styling
- Modern, elegant appearance

### AnimatedBackground Component
**Location:** `components/ui/AnimatedBackground.js`

Features:
- Floating animated circles
- Grid pattern overlay
- Gradient mesh background
- Staggered animation delays
- Performance-optimized

### Button Component
**Location:** `components/ui/Button.js`

**Variants:**
- `primary` - Gradient green background
- `secondary` - White with border
- `outline` - Transparent with border
- `ghost` - Transparent minimal

**Features:**
- Icon support
- Multiple variants
- Hover animations
- Link or button functionality

---

## 🎭 Design Patterns

### Glassmorphism
Semi-transparent cards with backdrop blur effects:
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Gradient Text
Multi-color gradient text effects:
```css
.gradient-text {
  background: linear-gradient(135deg, #84cc16 0%, #22c55e 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Card Hover Effects
Smooth lift and shadow animations:
```css
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

---

## 📐 Typography

**Font Family:** Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Features: cv02, cv03, cv04, cv11 enabled

**Hierarchy:**
- H1: 6xl-8xl (72-96px) - Hero headings
- H2: 4xl-5xl (36-48px) - Section headings
- H3: xl-2xl (20-24px) - Card titles
- Body: base-xl (16-20px) - Paragraphs

---

## ✨ Animations

### Custom Keyframes

**Float Animation** (6s infinite)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

**Slide Up** (0.5s)
```css
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```

**Fade In** (0.6s)
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

---

## 🎨 Visual Effects

### Box Shadows
- `shadow-glass` - Soft glassmorphic shadow
- `shadow-glass-lg` - Larger glass shadow
- `shadow-inner-glow` - Inner glow effect

### Background Gradients
- `bg-eco-gradient` - Main eco gradient (lime to green to cyan)
- `animated-gradient` - Animated multi-color gradient

---

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Grid layouts automatically adjust:
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

---

## ♿ Accessibility

- WCAG 2.1 Level AA compliant color contrasts
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on interactive elements
- Alt text for all icons and images

---

## 🚀 Performance

Optimizations:
- SVG icons (lightweight, scalable)
- CSS animations (hardware-accelerated)
- Lazy loading for images
- Optimized gradient rendering
- Minimal re-paints

---

## 📦 File Structure

```
frontend/
├── components/
│   ├── icons/
│   │   ├── CarbonIcon.js
│   │   ├── ActivityIcon.js
│   │   ├── InsightsIcon.js
│   │   ├── TrendIcon.js
│   │   ├── MapIcon.js
│   │   └── EnterpriseIcon.js
│   └── ui/
│       ├── FeatureCard.js
│       ├── GlassCard.js
│       ├── AnimatedBackground.js
│       └── Button.js
├── styles/
│   └── globals.css
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎯 Usage Examples

### Using Custom Icons
```javascript
import CarbonIcon from '../components/icons/CarbonIcon';

<CarbonIcon className="w-12 h-12" color="#22c55e" />
```

### Using FeatureCard
```javascript
import FeatureCard from '../components/ui/FeatureCard';
import InsightsIcon from '../components/icons/InsightsIcon';

<FeatureCard
  icon={InsightsIcon}
  title="Smart Insights"
  description="AI-powered recommendations"
  gradient="from-atmos-ocean-500 to-atmos-sky-500"
/>
```

### Using Buttons
```javascript
import Button from '../components/ui/Button';

<Button href="/signup" variant="primary">
  Get Started
</Button>
```

---

## 🔄 Future Enhancements

Planned additions:
- [ ] Dark mode support
- [ ] Additional icon variations
- [ ] Loading state components
- [ ] Toast notification system
- [ ] Modal/dialog components
- [ ] Form input components
- [ ] Data visualization components
- [ ] Mobile-specific optimizations

---

## 📝 Design Guidelines

### Do's ✅
- Use gradient text for hero headings
- Apply glassmorphism to overlay elements
- Use custom icons consistently
- Maintain earth-tone color harmony
- Keep animations subtle and purposeful

### Don'ts ❌
- Don't mix emoji with SVG icons
- Don't use more than 3 gradients per view
- Don't make animations longer than 1 second
- Don't use pure black (#000000)
- Don't override core spacing scale

---

## 🎨 Brand Assets

### Logo Usage
The Atmos logo consists of:
1. CarbonIcon (green circular icon)
2. "Atmos" wordmark with gradient

Minimum size: 32px height
Clear space: 16px on all sides

### Color Usage
- Primary actions: Forest green (#22c55e)
- Secondary actions: Ocean blue (#06b6d4)
- Warnings: Leaf green (#84cc16)
- Errors: Keep accessible red tones
- Success: Forest green shades

---

**Last Updated:** February 2026
**Version:** 1.0.0
**Maintained by:** Atmos Design Team
