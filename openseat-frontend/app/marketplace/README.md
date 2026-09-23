# Marketplace App Routes

Route tree for the OpenSeat marketplace. Role-specific UI lives in `src/candidate/` and `src/client/` — pages here are thin entry points only.

## URL Map

| URL | Owner | Purpose |
|-----|-------|---------|
| `/marketplace` | Shared | Role-based redirect hub |
| `/marketplace/login` | Shared | Authentication |
| `/marketplace/register` | Shared | Registration |
| `/marketplace/join` | Shared | Role selection onboarding |
| `/marketplace/candidate/dashboard` | Candidate | Browse & bid on job rooms |
| `/marketplace/candidate/profile` | Candidate | Profile setup |
| `/marketplace/client/dashboard` | Client | Post jobs & manage applicants |

## Layout Guards

- `candidate/layout.tsx` — redirects non-candidates away
- `client/layout.tsx` — redirects non-clients away
- Root `layout.tsx` — wraps all routes with auth + job room providers
