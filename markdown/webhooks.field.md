## Created

Payload example:

```json
{
     "id": 1,
     "title": "Text",
     "isRequired": false,
     "isFilterable": false,
     "isVisible": false,
     "default_value": "",
     "value": null,
     "type": "string"
}
```

This event is being sent when a new custom field is created.

### Event name

`custom_field.created`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Custom field ID
title | string | Custom field title
isRequired | boolean | A boolean value that indicates, that custom field should be filled on case create/update page.
isFilterable | boolean | A boolean value that indicates, that custom field will be shown in filters
isVisible | boolean | A boolean value that indicates, that custom field will be visible in preview and on test case page.
default_value | string | Default value for custom field
value | object | Available only for selectbox fields. An object with selectbox values.
type | string | Custom field type. Available values: `number`, `string`, `text`, `selectbox`, `checkbox`.

## Updated

Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a custom field is updated.

### Event name

`custom_field.updated`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Custom field ID

## Deleted

Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a custom field is deleted.

### Event name

`custom_field.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Custom field ID
