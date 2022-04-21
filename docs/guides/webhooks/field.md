# Custom Field webhooks

| Navigate |
| - |
| [custom_field.created](#created) |
| [custom_field.updated](#updated) |
| [custom_field.deleted](#deleted) |

## Created

Payload example:

```json
{
  "event_name": "custom_field.created",
  "timestamp": 1650533521,
  "payload": {
    "id": 208,
    "title": "test",
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

This event is being sent when a new custom field is created.

### Event name

`custom_field.created`

### Payload fields

| Parameter     | Type    | Description                                                                                         |
|---------------|---------|-----------------------------------------------------------------------------------------------------|
| id            | int     | Custom field ID                                                                                     |
| title         | string  | Custom field title                                                                                  |
| isRequired    | boolean | A boolean value that indicates, that custom field should be filled on case create/update page.      |
| isFilterable  | boolean | A boolean value that indicates, that custom field will be shown in filters                          |
| isVisible     | boolean | A boolean value that indicates, that custom field will be visible in preview and on test case page. |
| default_value | string  | Default value for custom field                                                                      |
| value         | object  | Available only for selectbox fields. An object with selectbox values.                               |
| type          | string  | Custom field type. Available values: `number`, `string`, `text`, `selectbox`, `checkbox`.           |

## Updated

Payload example:

```json
{
  "event_name": "custom_field.updated",
  "timestamp": 1650533629,
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

This event is being sent when a custom field is updated.

### Event name

`custom_field.updated`

### Payload fields

| Parameter | Type | Description     |
|-----------|------|-----------------|
| id        | int  | Custom field ID |

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
