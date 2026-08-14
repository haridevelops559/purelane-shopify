# Purelane Implementation Spec

## Assessment scope

Required sections:

1. Hero — `.hero`
2. Shop / product grid — `#shop`
3. Best-selling combos — `#combos`
4. Bundles — `#bundles`
5. Reviews rail — `#reviews`

The supplied `purelane-homepage.html` is the visual specification.
The implementation must preserve its visual output while converting
prototype assumptions into production Shopify architecture.

## Shopify data

Products, prices, availability and imagery come from Shopify.

Required product fixtures:

- normal product
- sold-out product
- product without an image
- product with a very long title
- at least eight products total

## Reusability

Repeated product-card presentation uses a shared snippet.

Repeated merchandising content uses section blocks where appropriate.

## Merchant editing

Marketing users must be able to change content/products/configuration
through the Shopify theme editor without editing Liquid.

## Theme-editor safety

Sections and blocks must remain functional when:

- added
- removed
- reordered
- duplicated
- reconfigured

Animations must not depend on a permanently fixed DOM.

## Accessibility

- semantic HTML
- keyboard interaction
- visible focus
- image alt text
- sufficient contrast
- reduced-motion support

## Performance

- Shopify image pipeline
- lazy loading for below-the-fold imagery
- avoid unnecessary JavaScript
- avoid unnecessary continuous animation
- preserve visual fidelity while improving implementation quality

## Visual QA

Test from 375px upward, including:

- 375px
- mobile
- tablet
- desktop

Compare implementation against the supplied prototype rather than
redesigning it.