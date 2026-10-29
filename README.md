# COS30045 Demo 2 – Data Visualisation Exercises

A collection of web-based data visualisation exercises built for the COS30045 unit. Each exercise is a standalone static web page that renders charts in the browser using D3.js and data stored as CSV files. The project covers SVG drawing, responsive bar charts, multi-chart data stories, and interactive visualisations (histograms, scatterplots, filters and tooltips).

LINK DEMO: https://mainguyenn25.github.io/cos30045-demo2/

## Overview

The project is organised by week. Each week's exercises live in their own folder, and the root of the repository contains a home page that links to the main exercise pages.

| Week | Folder | Topic |
|------|--------|-------|
| 4 | `W4/` | SVG drawing, responsive bar charts, D3 data binding |
| 5 | `W5/` | Multi-chart data stories, choosing chart types |
| 6 | `W6/` | Interactive visualisations: histogram, scatterplot, filters, tooltips |

## Features

- **SVG house drawing** (Exercise 4.1) – a hand-written SVG illustration with reusable components.
- **Bar charts with D3** (Exercises 4.3–4.7) – data loading with d3.csv, data binding, scales and axes, and responsive SVG containers that resize with the browser window.
- **Multi-chart data stories** (Exercises 5.1–5.3) – average energy consumption of 55-inch TVs, average Australian electricity spot prices, and the number of TVs by screen-size category.
- **Interactive visualisations** (Exercises 6.1–6.4):
  - Histogram of TV data, with bins computed by D3.
  - Scatterplot of TV energy consumption against screen technology.
  - Filter controls that update the charts when the user changes a selection.
  - Tooltips that show details of a data point on hover.

## Project structure

```
cos30045-demo2/
├── index.html            # Home page linking to Exercises 4.1, 4, 5 and 6
├── styles.css            # Shared styles for the home page and exercise pages
├── exercise-4.1.html     # Exercise 4.1 – SVG house
├── exercise-4.html       # Exercise 4.3–4.6 – Bar chart website
├── exercise-5.html       # Exercise 5 – Multi-chart page 
├── exercise-6.html       # Exercise 6 – Interactivity 
├── data/                 # Shared CSV datasets
├── W4/
│   ├── 4.1/              # SVG house (pic.svg, test.html)
│   ├── 4.3/ … 4.7/       # Each step: index.html, css/style.css, js/main.js
│   └── data/             # CSV used by Week 4 exercises
├── W5/
│   ├── 5.1/              # Average 55-inch TV energy consumption
│   ├── 5.2/              # Average ARE spot prices
│   ├── 5.3/              # TVs by screen size category
│   └── data/             # CSV used by Week 5 exercises
└── W6/
    ├── 6.1/ … 6.4/       # Each step: index.html, css/, js/, data/
    │                     #   js/load-data.js, shared-constants.js,
    │                     #   histogram.js, scatterplot.js, interactions.js
```

Each Week 6 step is split into modules:

- `load-data.js` – reads and converts the CSV file with d3.csv().
- `shared-constants.js` – shared margins, chart sizes and colours.
- `histogram.js` – draws the energy consumption histogram.
- `scatterplot.js` – draws the scatterplot.
- `interactions.js` – filters and tooltips.

## Datasets

| File | Description | Used in |
|------|-------------|---------|
| `W6_TVdata.csv` | TV models with brand, model, screen size, screen technology, star rating and annual energy consumption | 6.1–6.4 |
| `55 inch TVs only.csv` | Mean labelled energy consumption of 55-inch TVs by screen technology | 5.1 |
| `tvBrandCount.csv` | Number of TV models per brand | 4.4 |
| `5.3.csv` | Number of TVs in each screen-size category (Small, Medium, Large) | 5.3 |
| `ARE_Spot_Prices.csv` | Annual electricity spot prices by Australian state/region, from 1998 | 5.2 |


## Exercise guide

| Exercise | Page | What to look at |
|----------|------|-----------------|
| 4.1 | `exercise-4.1.html` | SVG house made from basic shapes and reusable tree symbols |
| 4 | `exercise-4.html` | Bar chart of TV brand counts, step by step (4.3 → 4.7) |
| 5 | `exercise-5.html` | Three charts telling one data story (5.1, 5.2, 5.3) |
| 6 | `exercise-6.html` | Histogram, scatterplot, filters and tooltips (6.1 → 6.4) |

## Technologies

- **HTML** and **CSS** for page structure and layout (including responsive layouts).
- **JavaScript** for application logic.
- **D3.js** for data loading, data binding, scales, axes and SVG rendering.
- **SVG** for the house drawing and charts.
- **CSV** as the data format.

## AI usage

- **Tool:** GitHub Copilot

## How I used the AI tool

- To generate the initial HTML and CSS structure for the exercise pages.
- To suggest layout and styling options, which I then adjusted to fit the exercise requirements.

## What I did myself

- Wrote all JavaScript for the exercises, including the D3 code for data binding, scales, axes, bars, histogram, scatterplot, filters and tooltips.
- Checked the generated HTML and CSS, and changed them where needed so the pages worked with my JavaScript.
- Tested each exercise page in the browser and fixed errors.

