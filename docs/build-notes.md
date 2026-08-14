# Purelane Shopify Assessment — Build Notes

## Objective

Reproduce the supplied Purelane homepage prototype in Shopify Dawn.

The supplied `purelane-homepage.html` is treated as the visual source
of truth. The implementation should preserve the supplied layout,
spacing, typography, colour, responsive behaviour and interactions.

## Required Sections

1. Hero
2. Shop / Product Grid
3. Best-selling Combos
4. Bundles
5. Reviews Rail

## Shopify Requirements

- Use real Shopify product data for products, prices, availability and imagery.
- Make merchant-controlled content editable through section settings/blocks.
- Reuse common UI patterns rather than duplicating card implementations.
- Keep sections safe when added, removed, reordered or reconfigured in
  the Shopify theme editor.

## Required Edge Cases

- Sold-out product
- Product without an image
- Product with a very long title

## Engineering Priorities

1. Visual fidelity to the supplied prototype
2. Completion of all five required sections
3. Real Shopify data
4. Responsive behaviour
5. Theme-editor safety
6. Accessibility
7. Performance