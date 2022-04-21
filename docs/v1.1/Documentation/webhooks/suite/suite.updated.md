---
title: "Test suite webhooks"
excerpt: "Updated event"
slug: "suite.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "suite.updated",
  "timestamp": 1650540955,
  "payload": {
    "id": 11
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test suite is updated. It returns only ID of test suite and notifies that fields were updated.

### Event name

`suite.updated`

### Payload fields

| Parameter | Type | Description   |
|-----------|------|---------------|
| id        | int  | Test suite ID |
