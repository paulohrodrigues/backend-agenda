define({ "api": [
  {
    "type": "post",
    "url": "/agenda/",
    "title": "create contacts",
    "name": "CreateContacts",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "Data",
            "description": "<p>contacts for save. Example: {name: 'José', number: 82999315616}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>any of firestore</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/routes.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "delete",
    "url": "/modify/:id",
    "title": "delete contacts",
    "name": "DeleteContacts",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>contacts unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>any of firestore</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/routes.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/agenda/",
    "title": "list contacts",
    "name": "ReadContacts",
    "group": "Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>any of firestore</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/routes.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "update",
    "url": "/modify/:id",
    "title": "update contacts",
    "name": "UpdateContacts",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>contacts unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "Data",
            "description": "<p>contacts for updated {name: 'José', number: 82999315616}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>any of firestore</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/routes.js",
    "groupTitle": "Contacts"
  }
] });
