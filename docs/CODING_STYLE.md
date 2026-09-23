# OpenSeat Coding Style Guide

This document defines the mandatory coding conventions for the OpenSeat repository.

## TypeScript

- TypeScript strict mode must remain enabled.
- Implicit `any` is prohibited.
- Explicit `any` is prohibited unless an approved exception is documented.
- Promises must be handled explicitly. Floating promises are not allowed.
- Prefer type-only imports when an import is used only as a type.

Example:

```ts
import type { ButtonHTMLAttributes } from "react";