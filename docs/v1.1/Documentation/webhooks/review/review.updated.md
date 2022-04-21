---
title: "Test review webhooks"
excerpt: "Updated event"
slug: "review.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "review.updated",
  "timestamp": 1650534611,
  "payload": {
    "id": 1,
    "title": "Check edit function and result of updates",
    "case_id": 25,
    "project": "ID",
    "data": {
      "id": 25,
      "title": "Check edit function and result of updates f",
      "status": 0,
      "description": "frfr",
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
      "tags": [
        "jira"
      ],
      "preconditions": null,
      "postconditions": null,
      "steps_type": "classic"
    },
    "approves": [],
    "updated_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    },
    "updated": "2022-04-21 09:47:38"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case review is deleted.

### Event name

`review.updated`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | int  | Test case review ID |
| deleted_by | User | User object         |
