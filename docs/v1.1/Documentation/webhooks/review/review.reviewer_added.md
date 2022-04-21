---
title: "Test review webhooks"
excerpt: "Reviewer added event"
slug: "review.reviewer_added"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Reviewer added

Payload example:

```json
{
  "event_name": "review.reviewer_added",
  "timestamp": 1650534955,
  "payload": {
    "id": 2,
    "reviewer": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case reviewer is added.

### Event name

`review.reviewer_added`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | int  | Test case review ID |
| reviewer  | User | User object         |
