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
      "email": "bib@bob.io",
      "name": "Bib Bob"
    },
    "updated": "2022-04-21 09:54:09"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case review is reopened.

### Event name

`review.reopened`

### Payload fields

| Parameter  | Type   | Description                         |
|------------|--------|-------------------------------------|
| id         | int    | Test case review ID                 |
| title      | String | Test case title                     |
| case_id    | int    | Test case ID                        |
| project    | String | Project code                        |
| data       | Object | Test case review object             |
| updated_by | User   | User object                         |
| approves   | Array  | Approve objects array               |
| created    | String | Test case review creation timestamp |
