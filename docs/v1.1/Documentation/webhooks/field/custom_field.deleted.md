---
title: "Custom field webhooks"
excerpt: "Deleted event"
slug: "custom_field.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "custom_field.deleted",
  "timestamp": 1650533655,
  "payload": {
    "id": 208,
    "title": "test e",
    "isRequired": false,
    "isFilterable": false,
    "isVisible": true,
    "default_value": "5",
    "value": "[]",
    "type": "number",
    "entity": "case"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a custom field is deleted.

### Event name

`custom_field.deleted`

### Payload fields

| Parameter | Type | Description     |
|-----------|------|-----------------|
| id        | int  | Custom field ID |
