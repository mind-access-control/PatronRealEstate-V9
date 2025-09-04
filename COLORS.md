# Patron Real Estate Color Palette

## Overview

This document outlines the color palette used throughout the Patron Real Estate website, based on the official logo design.

## Logo Colors

The Patron Real Estate logo features:

- **Lime Green**: Vibrant lime green for the main arch and "Patron" text
- **Dark Gray**: Professional dark gray for mountains and "REAL ESTATE" text
- **Light Gray**: Subtle light gray for the house silhouettes

## Color System

### Primary Colors

- **Lime Green (Primary)**: `#84cc16` - Used for main brand elements, buttons, links
- **Dark Gray**: `#1e293b` - Used for text, backgrounds, professional elements
- **Light Gray**: `#737373` - Used for secondary text, borders, subtle elements

### Color Scale

Each color has a full scale from 50 (lightest) to 950 (darkest):

#### Lime Green Scale

- `patron-limeGreen-50`: `#f7fee7` (Lightest)
- `patron-limeGreen-100`: `#ecfccb`
- `patron-limeGreen-200`: `#d9f99d`
- `patron-limeGreen-300`: `#bef264`
- `patron-limeGreen-400`: `#a3e635`
- `patron-limeGreen-500`: `#84cc16` (Main brand color)
- `patron-limeGreen-600`: `#65a30d`
- `patron-limeGreen-700`: `#4d7c0f`
- `patron-limeGreen-800`: `#3f6212`
- `patron-limeGreen-900`: `#365314`
- `patron-limeGreen-950`: `#1a2e05` (Darkest)

#### Dark Gray Scale

- `patron-darkGray-50`: `#f8fafc` (Lightest)
- `patron-darkGray-100`: `#f1f5f9`
- `patron-darkGray-200`: `#e2e8f0`
- `patron-darkGray-300`: `#cbd5e1`
- `patron-darkGray-400`: `#94a3b8`
- `patron-darkGray-500`: `#64748b`
- `patron-darkGray-600`: `#475569`
- `patron-darkGray-700`: `#334155`
- `patron-darkGray-800`: `#1e293b` (Main dark gray)
- `patron-darkGray-900`: `#0f172a`
- `patron-darkGray-950`: `#020617` (Darkest)

#### Light Gray Scale

- `patron-lightGray-50`: `#fafafa` (Lightest)
- `patron-lightGray-100`: `#f5f5f5`
- `patron-lightGray-200`: `#e5e5e5`
- `patron-lightGray-300`: `#d4d4d4`
- `patron-lightGray-400`: `#a3a3a3`
- `patron-lightGray-500`: `#737373` (Main light gray)
- `patron-lightGray-600`: `#525252`
- `patron-lightGray-700`: `#404040`
- `patron-lightGray-800`: `#262626`
- `patron-lightGray-900`: `#171717`
- `patron-lightGray-950`: `#0a0a0a` (Darkest)

## Usage Guidelines

### Primary Elements

- **Main buttons**: `bg-patron-limeGreen-500 text-white`
- **Links**: `text-patron-limeGreen-500 hover:text-patron-limeGreen-600`
- **Active navigation**: `text-patron-limeGreen-500 bg-patron-limeGreen-50`

### Text Hierarchy

- **Primary text**: `text-patron-darkGray-800`
- **Secondary text**: `text-patron-darkGray-600`
- **Muted text**: `text-patron-lightGray-500`

### Backgrounds

- **Main background**: `bg-white`
- **Card backgrounds**: `bg-white`
- **Footer background**: `bg-patron-darkGray-800`
- **Muted backgrounds**: `bg-patron-lightGray-50`

### Borders & Dividers

- **Light borders**: `border-patron-lightGray-200`
- **Medium borders**: `border-patron-darkGray-200`
- **Dark borders**: `border-patron-darkGray-700`

## CSS Variables

The colors are also available as CSS variables for use in custom styles:

- `--primary`: Lime green main color
- `--primary-foreground`: White text on primary
- `--background`: White background
- `--foreground`: Dark gray text
- `--muted`: Light gray for muted elements
- `--muted-foreground`: Medium gray for muted text

## Implementation

All colors are defined in:

- `tailwind.config.js` - Tailwind CSS configuration
- `app/globals.css` - CSS variables and theme configuration

## Accessibility

- Lime green meets WCAG AA contrast requirements on white backgrounds
- Dark gray provides excellent readability
- Light gray is used sparingly to maintain contrast
