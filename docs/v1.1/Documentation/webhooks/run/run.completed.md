---
title: "Test run webhooks"
excerpt: "Completed event"
slug: "run.completed"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Completed

Payload example:

```json
{
  "event_name": "run.completed",
  "timestamp": 1650540194,
  "payload": {
    "id": 2,
    "cases": 14,
    "passed": 0,
    "failed": 0,
    "blocked": 0,
    "duration": 0
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test run is successfully completed."
}
[/block]

### Event name

`run.completed`

### Payload fields

| Parameter | Type | Description                   |
|-----------|------|-------------------------------|
| id        | integer  | Test run ID                   |
| cases     | integer  | Amount of test cases in a run |
| passed    | integer  | Amount of passed cases        |
| failed    | integer  | Amount of failed cases        |
| blocked   | integer  | Amount of blocked cases       |
| duration  | integer  | Test run duration in seconds  |
