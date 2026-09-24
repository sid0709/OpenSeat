# OpenSeat frontend architecture

OpenSeat is a two-sided work marketplace. `Candidate` means the person bidding
for work; `Client` means the person posting and managing work.

## Product areas

| Area | Candidate workflow | Client workflow |
| --- | --- | --- |
| Identity | Register, choose Candidate, edit profile | Register, choose Client, edit profile |
| Marketplace | Browse, filter, inspect job detail, submit a bid | Browse market, inspect competing supply |
| Work pipeline | My bids, discussion, awarded jobs, active work | Job posts, applicants, approval, active hires |
| Collaboration | Message job owner | Message candidates |
| Delivery | Track milestones, submit updates, mark work ready | Review progress, request changes, complete work |

## Route map

```text
app/marketplace/
├── page.tsx                         # role-aware entry point
├── jobs/page.tsx                    # shared marketplace list/demo
├── jobs/[jobId]/page.tsx            # job detail / right-side detail target
├── messages/page.tsx                # shared conversation inbox
├── candidate/
│   ├── dashboard/page.tsx           # browse and bid
│   ├── bids/page.tsx                # candidate bid pipeline
│   ├── work/page.tsx                # awarded and active work
│   └── profile/page.tsx             # candidate profile
└── client/
    ├── dashboard/page.tsx           # client overview
    ├── jobs/new/page.tsx            # create a job
    ├── jobs/page.tsx                # client-owned jobs
    ├── applications/page.tsx        # applicant review and approval
    ├── work/page.tsx                # active hires and milestones
    └── profile/page.tsx             # client profile
```

## Source ownership

```text
src/
├── candidate/                       # candidate-only UI, hooks, and view models
├── client/                          # client-only UI, hooks, and view models
└── shared/
    ├── auth/                        # auth/session boundary
    ├── components/                  # reusable marketplace components
    ├── data/                        # demo fixtures only
    ├── job-rooms/                   # marketplace state boundary (replace with API)
    ├── types/                       # domain contracts shared by all roles
    └── workspace/                   # future conversations, bids, and milestones
```

The demo currently uses React context and local state. The contexts are
deliberately kept behind domain-shaped methods (`applyToJob`, `postJobRoom`,
`sendChatMessage`, `approveProposal`) so an API client can replace them without
rewriting page components.

## Domain entities to preserve when the backend is added

`User`, `CandidateProfile`, `ClientProfile`, `Job`, `Bid`, `Conversation`,
`Message`, `Contract`, `Milestone`, `WorkSubmission`, and `Notification`.

Every entity should have an owner, lifecycle status, timestamps, and stable IDs.
Do not put server data directly in page components; add it to a shared domain
context or query hook first.
