// Example Person that can be used with BOS Demographics API
// Any property with a value is indicating the values that can be passed
// i.e. UUID for a person Id and the different enum values for relationshipStatus

var person = {
    'firstName' : '',
    'middleName' : '',
    'lastName' : '',
    'id' : 'UUID',
    'gender' : '',
    'birthDate' : {
        'month': 0,
        'day': 0,
        'year': 0
    },
    'phoneNumbers' : [
        {
            'type': '',
            'number': '',
            "extensions": [
                {
                    'key': '',
                    'value':  ''
                }
            ]
        }
    ],
    'addresses': [
        {
            'street': '',
            'city': '',
            'state': '',
            'country': '',
            'zipCode': '',
            "extensions": [
                {
                    'key': '',
                    'value':  ''
                }
            ]
        }
    ],
    "extensions": [
        {
            'key': '',
            'value':  ''
        }
    ],
    "relationshipStatus" : "Single, Married, CivilUnion, DomesticPartnership, Divorced, Widowed"
}

export default person;