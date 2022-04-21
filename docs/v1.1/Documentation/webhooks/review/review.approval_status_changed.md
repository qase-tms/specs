---
title: "Test review webhooks"
excerpt: "Approval status changed event"
slug: "review.approval_status_changed"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Approval status changed

Payload example:

```json
{
  "event_name": "review.approval_status_changed",
  "timestamp": 1650544272,
  "payload": {
    "id": 2,
    "status": "approved",
    "updated_by": {
      "email": "apetrov@qase.io",
      "name": "Alexey Petrov"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
}
```

This event is being sent when a test case review approval status is changed.

### Event name

`review.approval_status_changed`

### Payload fields

| Parameter  | Type   | Description                                                 |
|------------|--------|-------------------------------------------------------------|
| id         | int    | Test case review ID                                         |
| status     | String | Possible value: `unapproved`, `approved`, `request changes` |
| updated_by | User   | User object                                                 |
