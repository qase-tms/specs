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
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review approval status is changed."
}
[/block]

### Event name

`review.approval_status_changed`

### Payload fields

| Parameter  | Type   | Description                                                 |
|------------|--------|-------------------------------------------------------------|
| id         | integer    | Test case review ID                                         |
| status     | string | Possible value: `unapproved`, `approved`, `request changes` |
| updated_by | object   | User object                                                 |
