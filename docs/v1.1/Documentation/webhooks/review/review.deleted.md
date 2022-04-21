---
title: "Test review webhooks"
excerpt: "Deleted event"
slug: "review.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "review.deleted",
  "timestamp": 1650534818,
  "payload": {
    "id": 1,
    "deleted_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case review is deleted.

### Event name

`review.deleted`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | int  | Test case review ID |
| deleted_by | User | User object         |
