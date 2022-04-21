---
title: "Test review webhooks"
excerpt: "Reviewer removed event"
slug: "review.reviewer_removed"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Reviewer removed

Payload example:

```json
{
  "event_name": "review.reviewer_removed",
  "timestamp": 1650534974,
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
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case reviewer is removed."
}
[/block]

### Event name

`review.reviewer_removed`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| reviewer  | object | User object         |
