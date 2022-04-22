---
title: "Test run webhooks"
excerpt: "Updated event"
slug: "run.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "run.updated",
  "timestamp": 1650540114,
  "payload": {
    "id": 1,
    "cases_added": 14
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test plan is updated and new test cases were added."
}
[/block]

### Event name

`run.updated`

### Payload fields

| Parameter   | Type  | Description                           |
|-------------|-------|---------------------------------------|
| id          | integer   | Test run ID                       |
| cases_count | integer    | Amount of test cases in run      |
