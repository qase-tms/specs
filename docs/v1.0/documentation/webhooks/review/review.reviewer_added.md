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
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case reviewer is added."
}
[/block]

### Event name

`review.reviewer_added`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| reviewer  | object | User object         |
