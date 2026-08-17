# Purelane — Shopify Homepage Build

A production-oriented Shopify implementation of the Purelane plant-based homecare homepage prototype, rebuilt from `purelane-homepage.html` for a clean Dawn-based development store.

## Dev Store

**Store:** https://purelane-troopod-0pcrpqco.myshopify.com/

**Password:** `[ADD DEV STORE PASSWORD]`

> The store is a Shopify development store and may remain password protected.

## Assignment

The goal was to take a single-file visual prototype and turn it into merchant-editable Shopify sections that can survive the Shopify theme editor.

### Required sections

1. Hero
2. Shop / Product Grid
3. Best-selling Combos
4. Bundles
5. Reviews Rail

The required five sections were prioritised before bonus work.

## What Was Built

### Hero

- Rebuilt the prototype hero as a Shopify section.
- Product imagery comes from Shopify product data rather than static prototype markup.
- Hero image rendering was normalised for desktop and mobile.
- Preserved responsive layout and visual hierarchy.
- Hero content is exposed through section settings where appropriate.

### Shop / Product Grid

- Built around real Shopify collection/product data.
- Reusable product-card snippet used instead of repeating product markup.
- Product title, image, availability and price are rendered from Shopify.
- Added handling for products without images.
- Added product-state labels such as sold out/new/top rated/best seller.
- Product cards include accessible product links and add-to-cart behaviour.
- Explored Shopify inventory/location behaviour when products appeared sold out despite inventory existing at a different location.

### Best-selling Combos

- Converted the prototype combo cards into a reusable Shopify section/block structure.
- Products can be selected through Shopify's product picker.
- Combo content, pricing copy, benefits, labels and links are configurable through the theme editor.
- Added responsive horizontal presentation and visual treatment matching the prototype.

### Bundles

- Converted bundle cards into Shopify section blocks.
- Product selections and bundle content are merchant-editable.
- Bundle pricing, compare pricing, benefits and CTA content are configurable.
- Preset bundle examples were retained for the theme editor.

### Reviews

- Rebuilt the reviews presentation as a dedicated section.
- Added a horizontally animated review rail.
- Added hover/focus pause behaviour.
- Added reduced-motion handling.
- Styling follows the prototype's visual language.

## Merchant Editability

A major requirement was avoiding hardcoded marketing content.

The implementation uses Shopify section settings and blocks for:

- Headings and descriptions
- Product selections
- Collection selection
- Product counts
- Prices and compare prices where these are presentation/configuration fields
- Benefits and supporting copy
- CTA labels and links
- Featured states
- Bundle/combo configuration

Real product information is pulled from Shopify wherever native Shopify data is available.

The homepage section order is controlled through `templates/index.json`.

## Important Files

```text
assets/
  purelane.css

sections/
  purelane-hero.liquid
  purelane-shop.liquid
  purelane-combos.liquid
  purelane-bundles.liquid
  purelane-reviews.liquid

snippets/
  purelane-hero-product.liquid
  purelane-product-card.liquid

templates/
  index.json
