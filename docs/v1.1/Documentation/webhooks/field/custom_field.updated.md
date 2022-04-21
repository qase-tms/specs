---
title: "Custom field webhooks"
excerpt: "Updated event"
slug: "custom_field.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "custom_field.updated",
  "timestamp": 1650533629,
  "payload": {
    "id": 208,
    "title": "test field",
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

This event is being sent when a custom field is updated.

### Event name

`custom_field.updated`

### Payload fields

| Parameter | Type | Description     |
|-----------|------|-----------------|
| id        | int  | Custom field ID |
