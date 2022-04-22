---
title: "Test review webhooks"
excerpt: "Reopened event"
slug: "review.reopened"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Reopened

Payload example:

```json
{
  "event_name": "review.reopened",
  "timestamp": 1650534883,
  "payload": {
    "id": 2,
    "title": "Check edit function and result of updates",
    "case_id": 25,
    "project": "ID",
    "data": {
      "id": "25",
      "title": "Check edit function and result of updates",
      "status": 0,
      "description": "description",
      "suite_id": 12,
      "severity": 0,
      "priority": 0,
      "type": 1,
      "layer": 0,
      "is_flaky": 0,
      "milestone_id": null,
      "behavior": 1,
      "automation": 0,
      "params": [],
      "tags": [],
      "preconditions": null,
      "postconditions": null,
      "custom_field": [],
      "steps_type": "classic",
      "code": "ID",
      "review": true
    },
    "approves": [],
    "updated_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    },
    "updated": "2022-04-21 09:54:09"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is reopened."
}
[/block]

### Event name

`review.reopened`

### Payload fields

| Parameter  | Type   | Description                         |
|------------|--------|-------------------------------------|
| id         | integer    | Test case review ID                 |
| title      | string | Test case title                     |
| case_id    | integer    | Test case ID                        |
| project    | string | Project code                        |
| data       | object | Test case review object             |
| updated_by | object   | User object                         |
| approves   | array  | Approve objects array               |
| updated    | string | Test case review update timestamp   |
