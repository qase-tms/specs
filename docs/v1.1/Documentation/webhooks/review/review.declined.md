---
title: "Test review webhooks"
excerpt: "Declined event"
slug: "review.declined"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Declined

Payload example:

```json
{
  "event_name": "review.declined",
  "timestamp": 1650534857,
  "payload": {
    "id": 2,
    "declined_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case review is declined.

### Event name

`review.declined`

### Payload fields

| Parameter   | Type | Description         |
|-------------|------|---------------------|
| id          | int  | Test case review ID |
| declined_by | User | User object         |
